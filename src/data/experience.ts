import type { WorkExperience } from '@/types'

export const experience: WorkExperience[] = [
  {
    id: 'ndh-louis-charles',
    company: 'Louis Charles International / NDH Financial',
    websites: [
      { label: 'Louis Charles International', url: 'https://www.louis-charles.com/' },
      { label: 'NDH Financial', url: 'https://ndhfinancial.co.uk/' },
    ],
    role: 'Senior Software Engineer',
    period: { start: 'Jul 2025', end: 'Present' },
    location: 'Dubai, UAE (UK & US markets)',
    description:
      'NDH Financial is a UK-based personal insolvency and financial services company; Louis Charles International L.L.C-FZ is its Dubai branch, building Cylas, a multi-tenant CRM and contact-centre platform for UK debt advice, and the group\'s UK and US lending platforms.',
    responsibilities: [
      'Led the migration of the entire telephony layer to Telnyx: a provider-agnostic adapter, per-firm provider configuration, isolated sub-accounts per tenant and a staged cutover runbook',
      'Built in-browser calling for advisers (WebRTC/SIP) with IVR menus, hunt-group routing, queueing, voicemail, blind and warm transfers and three-way creditor calls',
      'Built lawful-basis call recording, live and post-call transcription with speaker labels (Deepgram) and real-time compliance alerts on adviser speech',
      'Built AI voice agents on Telnyx AI Assistants: AI-led outbound calls and an AI receptionist that books callbacks and hands over to a human on request',
      'Designed and built WhatsApp Business messaging end to end (Meta Cloud API), SMS and a real-time unified inbox on Laravel Reverb, plus usage-based billing on Stripe',
      'Rebuilt the adviser portal on a Storybook-first design system (React, TypeScript, Radix UI) and delivered test-first with Pest, Vitest, Playwright and PHPStan in CI',
      'Built and maintained the group\'s UK and US lending platforms (AllDayLoans, QuickCashDirect, YupLoans), with lead routing that processes 1,200+ applications per day and SEO/CRO work on Core Web Vitals and conversion; led two developers as the team grew',
      'Built the PingFree lead-management platform and BAS internal administration system, connecting all UK and US properties through cross-company API automation',
    ],
    techStack: [
      'Laravel', 'PHP 8', 'React', 'TypeScript', 'Inertia.js',
      'Telnyx', 'WebRTC', 'Deepgram', 'WhatsApp Business API', 'Stripe',
      'PostgreSQL', 'Redis', 'AWS', 'Next.js', 'Python FastAPI',
    ],
  },

  {
    id: 'ilearnme',
    company: 'iLearn',
    website: 'https://www.ilearnme.com',
    role: 'Senior Software Engineer',
    period: { start: 'Jan 2021', end: 'Jul 2025' },
    location: 'Dubai, UAE',
    description:
      'iLearn (ilearnme.com) is a Dubai-based EdTech company delivering enterprise Learning Management Systems for government and corporate clients across the UAE and Saudi Arabia.',
    responsibilities: [
      'Led full-stack development of LMS platforms for high-profile clients including Abu Dhabi Judicial Department, Dubai Center for Government Excellence, and Music Hub (Saudi Ministry of Culture)',
      'Developed web services for 3 large-scale simultaneous projects, each with a budget exceeding $500K',
      'Designed and implemented a dynamic appointment scheduler service that transformed client training event management',
      'Reduced server infrastructure costs by 20% through code optimization and performance improvements on legacy services',
      'Used Laravel Telescope extensively for monitoring, profiling, and diagnosing performance bottlenecks',
      'Designed and maintained project architecture, system structure, and database schemas',
      'Provided technical support, troubleshooting, and system improvements across all deployed platforms',
    ],
    techStack: [
      'Laravel', 'PHP', 'MySQL', 'Vue.js',
      'JavaScript', 'HTML', 'CSS', 'Bootstrap',
      'React', 'Next.js', 'Laravel Telescope', 'REST APIs',
    ],
  },

  {
    id: 'blue-arrow',
    company: 'Blue Arrow Real Estate',
    website: 'https://b-arrow.com',
    role: 'Full Stack PHP Developer',
    period: { start: 'Feb 2020', end: 'Dec 2020' },
    location: 'Erbil, Iraq',
    description:
      'Blue Arrow is a leading real estate platform in Erbil, Iraq — connecting buyers, sellers, and agents across residential and commercial property markets with a strong digital presence.',
    responsibilities: [
      'Architected and delivered a comprehensive real estate web platform consolidating CMS, CRM, HR, and LMS modules into a single unified system — replacing fragmented tools and becoming the company\'s core operational backbone',
      'Delivered the company\'s long-sought points-based KPI system for tracking employee performance',
      'Achieved a 40% reduction in page load times by integrating Redis caching across high-traffic data layers',
      'Applied Domain-Driven Design patterns and OOP principles to ensure a scalable, maintainable codebase',
      'Containerized the application with Docker, enabling consistent development and deployment environments',
      'Delivered the platform with PHPUnit tests across all critical modules',
    ],
    techStack: [
      'Laravel', 'PHP', 'Vue.js', 'Inertia.js', 'MySQL',
      'Redis', 'Docker', 'PHPUnit', 'Bootstrap', 'REST APIs',
    ],
  },

  {
    id: 'school-online',
    company: 'School-Online (Founder)',
    role: 'Full Stack Software Engineer',
    period: { start: 'Dec 2017', end: 'Dec 2019' },
    location: 'Damascus, Syria',
    description:
      'A self-initiated SaaS product built to bridge the communication gap between private schools and parents — turning a personal project into a profitable platform adopted by multiple schools.',
    responsibilities: [
      'Built a multi-tenant Laravel SaaS platform onboarding 6 private schools and serving 7,000+ students\' parents',
      'Designed and launched a structured complaints management system, replacing informal channels and improving school responsiveness',
      'Developed a school bus scheduling and real-time tracking feature — one of the key differentiators that drove school adoption',
      'Managed the full product lifecycle — from requirements gathering and architecture to deployment and client support',
      'Grew the platform organically through direct outreach to private schools, validating product-market fit',
    ],
    techStack: [
      'Laravel', 'PHP', 'MySQL', 'JavaScript',
      'HTML', 'CSS', 'Bootstrap', 'REST APIs',
    ],
  },
]
