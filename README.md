# baselkaffoura.com

Source code of my personal portfolio: case studies, experience, skills, certifications and a contact form.

**Live site:** [baselkaffoura.com](https://baselkaffoura.com)

[![Preview of baselkaffoura.com](https://baselkaffoura.com/opengraph-image)](https://baselkaffoura.com)

## Tech stack

- **Next.js 16** (App Router, statically generated pages) and **React 19**
- **TypeScript 5** in strict mode
- **Tailwind CSS 4**, configured CSS-first with `@theme` tokens, and **Framer Motion 12**
- **React Hook Form** and **Zod 4** for validation, **Resend** for email
- Deployed on **Vercel**

## Highlights

- **Content as data.** Every section renders from typed files in `src/data`, so components hold no copy.
- **Security headers.** Content-Security-Policy, Permissions-Policy, Referrer-Policy, X-Content-Type-Options and X-Frame-Options are set in `next.config.ts`.
- **Hardened contact form.** Input is validated in the browser and again with Zod in the route handler, which also checks the request origin, uses a honeypot field and HTML-escapes everything it puts in the email.
- **Generated social images.** Open Graph and Twitter images are rendered with `next/og`, using fonts bundled in `assets/fonts` so the build never depends on a network fetch.
- **Accessibility.** A dependency-free image lightbox with zoom, pinch, pan, Escape and back-button close, dark and light themes, and reduced-motion support.
- **SEO.** Canonical URLs, Open Graph metadata, `robots.ts` and `sitemap.ts`.

## Project structure

```text
src/
├── app/          # Layout, page, metadata routes and the contact API route
├── components/   # layout/, sections/ and ui/ components
├── data/         # Profile, projects, experience, skills and certifications
├── hooks/        # Scroll progress and active-section hooks
├── lib/          # Utilities, animation variants, social image and email helpers
└── types/        # Shared TypeScript types
```

## Running locally

Requires Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs at http://localhost:3000. The contact form needs a Resend API key; analytics are optional.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `RESEND_API_KEY` | Resend API key for the contact form |
| `CONTACT_RECEIVER_EMAIL` | Address that receives contact messages |
| `CONTACT_SENDER_EMAIL` | Verified sender address in Resend |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID (optional) |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity ID (optional) |

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check without emitting files |
| `npm run format` | Prettier |

## License

All rights reserved. The source is published for reference only. No part of it, including the written content, images and documents (case studies, CV and certificates), may be reused without permission. See [LICENSE](LICENSE). The fonts in `assets/fonts` are under the SIL Open Font License.
