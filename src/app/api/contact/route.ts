import { NextResponse } from 'next/server'
import { z } from 'zod'
import { buildEmailHtml } from '@/lib/contact-email'

const schema = z.object({
  name: z.string().min(2).max(100).regex(/^[\p{L}\p{M}\s'.-]+$/u),
  email: z.string().email().max(200),
  phone: z.string().max(30).regex(/^[+\d\s()-]*$/).optional().or(z.literal('')),
  subject: z.string().min(4).max(200),
  message: z.string().min(20).max(2000),
})

const siteHost = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://baselkaffoura.com').hostname
const allowedHosts = new Set([siteHost, `www.${siteHost}`, 'localhost'])

// Only accept submissions sent from the portfolio itself.
function isFromSite(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return false
  try {
    return allowedHosts.has(new URL(origin).hostname)
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  try {
    if (!isFromSite(request)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()

    // Honeypot: the "website" field is hidden from people, so only bots fill it in.
    // Pretend it worked so they don't retry.
    if (typeof body?.website === 'string' && body.website.trim() !== '') {
      return NextResponse.json({ success: true })
    }

    const data = schema.parse(body)

    const apiKey = process.env.RESEND_API_KEY
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL ?? 'baselkaffoura@gmail.com'
    const senderEmail = process.env.CONTACT_SENDER_EMAIL ?? 'onboarding@resend.dev'

    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: `Basel Kaffoura Portfolio <${senderEmail}>`,
      to: receiverEmail,
      replyTo: `${data.name} <${data.email}>`,
      subject: `✉ ${data.name}: ${data.subject}`,
      text: `New contact from ${data.name}\nEmail: ${data.email}${data.phone ? `\nPhone: ${data.phone}` : ''}\nSubject: ${data.subject}\n\n${data.message}\n\n—\nSent from baselkaffoura.com`,
      html: buildEmailHtml(data),
    })

    if (error) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
