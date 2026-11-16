'use client'

import { useState } from 'react'
import { useForm, useController } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { usePhoneInput, CountrySelector } from 'react-international-phone'
import 'react-international-phone/style.css'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Skip zod's eval feature probe, which the site's Content-Security-Policy would report.
z.config({ jitless: true })

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').regex(/^[a-zA-Z\s'-]+$/, 'Name must contain letters only'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().max(30).optional().or(z.literal('')),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  website: z.string().optional(),
})
type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const form = useForm<FormData>({ resolver: zodResolver(schema) })
  const { register, handleSubmit, reset, control, formState: { errors } } = form

  const { field: phoneField } = useController({ name: 'phone', control, defaultValue: '' })

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
    defaultCountry: 'ae',
    value: phoneField.value ?? '',
    disableFormatting: true,
    onChange: ({ phone }) => phoneField.onChange(phone),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    status === 'success' ? (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <CheckCircle2 size={48} className="text-success" />
        <h3 className="text-lg font-semibold text-(--c-text)">Message sent!</h3>
        <p className="text-(--c-muted) text-sm">I&apos;ll get back to you as soon as possible.</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5" noValidate>
        {/* Honeypot: hidden from people and screen readers; bots that fill it in are ignored. */}
        <input
          {...register('website')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px opacity-0"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-medium text-(--c-muted) mb-1.5">Name</label>
            <input
              {...register('name')}
              id="contact-name"
              autoComplete="name"
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck={false}
              placeholder="Your full name"
              onKeyDown={(e) => { if (/[0-9]/.test(e.key)) e.preventDefault() }}
              className={cn(
                'w-full px-4 py-3 rounded-xl bg-(--bg-surface-2) border text-(--c-text) placeholder-(--c-muted) text-sm transition-colors outline-none',
                errors.name ? 'border-accent focus:border-accent' : 'border-(--c-border) focus:border-primary'
              )}
            />
            {errors.name && <p className="mt-1 text-xs text-accent">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-medium text-(--c-muted) mb-1.5">Email</label>
            <input
              {...register('email')}
              id="contact-email"
              type="email"
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              placeholder="your@email.com"
              className={cn(
                'w-full px-4 py-3 rounded-xl bg-(--bg-surface-2) border text-(--c-text) placeholder-(--c-muted) text-sm transition-colors outline-none',
                errors.email ? 'border-accent focus:border-accent' : 'border-(--c-border) focus:border-primary'
              )}
            />
            {errors.email && <p className="mt-1 text-xs text-accent">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-medium text-(--c-muted) mb-1.5">
            Phone <span className="text-(--c-muted) font-normal">(optional)</span>
          </label>
          <div className={cn('phone-input-wrapper', errors.phone ? 'phone-input-error' : '')}>
            <CountrySelector
              selectedCountry={country.iso2}
              onSelect={(c) => setCountry(c.iso2)}
              renderButtonWrapper={({ children, rootProps }) => (
                <button type="button" {...rootProps} className="phone-country-btn">
                  {children}
                </button>
              )}
              dropdownStyleProps={{
                className: 'phone-dropdown',
                listItemClassName: 'phone-dropdown-item',
              }}
            />
            <input
              ref={inputRef}
              value={inputValue}
              onChange={handlePhoneValueChange}
              id="contact-phone"
              type="tel"
              placeholder="50 000 0000"
              className="flex-1 bg-transparent border-none outline-none text-(--c-text) text-sm py-3 px-3 placeholder-(--c-muted)"
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-accent">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-medium text-(--c-muted) mb-1.5">Subject</label>
          <input
            {...register('subject')}
            id="contact-subject"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="e.g. Software Engineer role at your company"
            className={cn(
              'w-full px-4 py-3 rounded-xl bg-(--bg-surface-2) border text-(--c-text) placeholder-(--c-muted) text-sm transition-colors outline-none',
              errors.subject ? 'border-accent focus:border-accent' : 'border-(--c-border) focus:border-primary'
            )}
          />
          {errors.subject && <p className="mt-1 text-xs text-accent">{errors.subject.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-xs font-medium text-(--c-muted) mb-1.5">Message</label>
          <textarea
            {...register('message')}
            id="contact-message"
            rows={5}
            autoComplete="off"
            placeholder="Please share details about the role, your company, and what you're looking for — I'd love to hear more..."
            className={cn(
              'w-full px-4 py-3 rounded-xl bg-(--bg-surface-2) border text-(--c-text) placeholder-(--c-muted) text-sm transition-colors outline-none resize-none',
              errors.message ? 'border-accent focus:border-accent' : 'border-(--c-border) focus:border-primary'
            )}
          />
          {errors.message && <p className="mt-1 text-xs text-accent">{errors.message.message}</p>}
        </div>
        {status === 'error' && (
          <p className="text-sm text-accent">Something went wrong. Please try again or email me directly.</p>
        )}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === 'loading'}
          icon={status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    )
  )
}
