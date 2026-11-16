export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function buildEmailHtml(raw: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  // Every field is user input, so escape all of it before it goes into HTML.
  const data = {
    name: escapeHtml(raw.name),
    email: escapeHtml(raw.email),
    phone: raw.phone ? escapeHtml(raw.phone) : '',
    subject: escapeHtml(raw.subject),
    message: escapeHtml(raw.message).replace(/\n/g, '<br />'),
  }

  const timestamp = new Date().toLocaleString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Dubai',
    timeZoneName: 'short',
  })


  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>New Contact — Basel Kaffoura Portfolio</title>
  <!--[if mso]>
  <noscript>
    <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  </noscript>
  <![endif]-->
  <style>
    @media only screen and (max-width: 620px) {
      .email-wrapper { width: 100% !important; padding: 16px !important; }
      .email-card   { padding: 24px 20px !important; }
      .meta-table td { display: block !important; width: 100% !important; padding: 4px 0 !important; }
      .meta-label   { color: #6b7a99 !important; font-size: 11px !important; text-transform: uppercase; letter-spacing: 0.06em; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f0f2f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <!-- Preheader (hidden preview text) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    ${data.name} sent you a message via your portfolio — "${data.subject}"
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f0f2f7">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Email card (max 600px) -->
        <table role="presentation" class="email-card" cellpadding="0" cellspacing="0" border="0"
          style="width:100%;max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- ── Header ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#080c16 0%,#0f1629 100%);padding:32px 40px;text-align:center;">
              <!-- Logo mark -->
              <div style="display:inline-block;width:44px;height:44px;background-color:#00d4ff;border-radius:10px;text-align:center;line-height:44px;font-size:16px;font-weight:700;color:#080c16;margin-bottom:16px;">BK</div>
              <p style="margin:0;font-size:13px;color:#6b7a99;letter-spacing:0.08em;text-transform:uppercase;">Basel Kaffoura · Portfolio</p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">New Contact Message</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#00d4ff;">${timestamp}</p>
            </td>
          </tr>

          <!-- ── Sender highlight ── -->
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#f8f9fc;border-radius:12px;margin:28px 0 0;overflow:hidden;">
                <tr>
                  <td style="padding:20px 24px;border-left:4px solid #00d4ff;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;color:#6b7a99;text-transform:uppercase;letter-spacing:0.08em;">Message from</p>
                    <p style="margin:0;font-size:20px;font-weight:700;color:#0d0f1a;">${data.name}</p>
                    <a href="mailto:${data.email}" style="font-size:14px;color:#00d4ff;text-decoration:none;">${data.email}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Meta details ── -->
          <tr>
            <td style="padding:20px 40px 0;">
              <table role="presentation" class="meta-table" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="border-collapse:collapse;">
                <tr>
                  <td class="meta-label" style="padding:10px 0;width:90px;font-size:12px;font-weight:600;color:#6b7a99;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;border-bottom:1px solid #e5e7eb;">Subject</td>
                  <td style="padding:10px 0 10px 16px;font-size:15px;font-weight:600;color:#0d0f1a;vertical-align:top;border-bottom:1px solid #e5e7eb;">${data.subject}</td>
                </tr>
                <tr>
                  <td class="meta-label" style="padding:10px 0;font-size:12px;font-weight:600;color:#6b7a99;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;border-bottom:1px solid #e5e7eb;">Email</td>
                  <td style="padding:10px 0 10px 16px;vertical-align:top;border-bottom:1px solid #e5e7eb;">
                    <a href="mailto:${data.email}" style="font-size:14px;color:#4361ee;text-decoration:none;">${data.email}</a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td class="meta-label" style="padding:10px 0;font-size:12px;font-weight:600;color:#6b7a99;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;border-bottom:1px solid #e5e7eb;">Phone</td>
                  <td style="padding:10px 0 10px 16px;vertical-align:top;border-bottom:1px solid #e5e7eb;">
                    <a href="tel:${data.phone}" style="font-size:14px;color:#4361ee;text-decoration:none;">${data.phone}</a>
                    &nbsp;
                    <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="font-size:12px;color:#25d366;text-decoration:none;">WhatsApp ↗</a>
                  </td>
                </tr>` : ''}
              </table>
            </td>
          </tr>

          <!-- ── Message body ── -->
          <tr>
            <td style="padding:24px 40px 0;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:600;color:#6b7a99;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
              <div style="background-color:#f8f9fc;border-radius:12px;padding:20px 24px;">
                <p style="margin:0;font-size:15px;line-height:1.75;color:#374151;">${data.message}</p>
              </div>
            </td>
          </tr>

          <!-- ── Reply CTA ── -->
          <tr>
            <td style="padding:28px 40px 0;text-align:center;">
              <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}"
                style="display:inline-block;background-color:#00d4ff;color:#080c16;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:10px;letter-spacing:0.01em;">
                ↩ Reply to ${data.name}
              </a>
            </td>
          </tr>

          <!-- ── Divider ── -->
          <tr>
            <td style="padding:32px 40px 0;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,#e5e7eb,transparent);"></div>
            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="padding:20px 40px 32px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#9ca3af;">
                Sent from the contact form at
                <a href="https://baselkaffoura.com" style="color:#00d4ff;text-decoration:none;">baselkaffoura.com</a>
              </p>
              <p style="margin:0;font-size:11px;color:#d1d5db;">
                Basel Kaffoura · Senior Software Engineer · Dubai, UAE
              </p>
            </td>
          </tr>

        </table>
        <!-- /email card -->

      </td>
    </tr>
  </table>

</body>
</html>`
}
