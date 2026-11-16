import type { Project } from '@/types'

export const projects: Project[] = [
  // ── Built / Led ───────────────────────────────────────────────────────────

  {
    id: 'cylas',
    title: 'Cylas — CRM & Contact-Centre Platform',
    company: 'Louis Charles International / NDH Financial',
    market: 'United Kingdom',
    category: 'saas',
    status: 'built',
    description:
      'Multi-tenant CRM and contact-centre platform for UK debt-advice and insolvency firms. Advisers call, message and manage cases in one workspace, with recording, transcription and AI voice agents built for an FCA- and GDPR-regulated environment.',
    role: 'Full-stack Engineer',
    techStack: ['Laravel', 'PHP 8', 'React', 'TypeScript', 'Inertia.js', 'Tailwind CSS', 'Radix UI', 'PostgreSQL', 'Redis', 'Laravel Reverb'],
    integrations: [
      'Telnyx Voice & WebRTC',
      'Telnyx AI Assistants',
      'Deepgram',
      'WhatsApp Business (Meta Cloud API)',
      'Stripe Billing',
      'AWS S3, KMS & GuardDuty',
      'Gmail & Outlook',
    ],
    features: [
      'In-browser calling, IVR and hunt-group routing',
      'Call recording, live transcription and compliance alerts',
      'AI voice agents with human hand-over',
      'WhatsApp, SMS and a unified real-time inbox',
      'Usage-based billing on Stripe',
      'Storybook-first design system',
    ],
    productUrl: 'https://www.cylas.ai',
    imageUrl: '/images/projects/cylas-diagram-mint.png',
    featured: true,
    isPrivate: true,
    caseStudy: {
      tagline: 'Telephony, AI voice agents and omnichannel messaging for regulated UK debt advice',
      context:
        'UK debt-advice firms run high volumes of regulated conversations with clients and creditors. Cylas gives every firm its own isolated workspace for calls, messages and case work, with the consent, recording and data-protection controls that FCA and GDPR rules require.',
      role:
        'Full-stack engineer across the platform: provider integrations and backend in Laravel, real-time features, and the React interface advisers use all day. I led the move of the whole telephony layer to Telnyx.',
      stats: [
        { value: 'Multi-tenant', label: 'one isolated workspace per firm' },
        { value: '5', label: 'channels in one inbox' },
        { value: 'FCA · GDPR', label: 'regulated environment' },
      ],
      imageAlt:
        'Overview diagram: phone calls, WhatsApp, SMS and voicemail, email and portal chat flow into Cylas, which provides telephony and IVR, recording and compliance, live transcription, AI voice agents, a unified inbox and workflows and billing, giving each firm an isolated workspace, its own phone numbers, AI assistance and data protection',
      imageCaption: 'How Cylas brings every client conversation into one platform.',
      screenshot: {
        src: '/images/projects/cylas.png',
        alt: 'Cylas lead record showing case status, client details and the contact menu with WhatsApp, SMS and AI agent options',
        caption: 'Adviser workspace in Cylas, shown with sample data.',
      },
      areas: [
        {
          title: 'Telephony',
          icon: 'phone',
          summary: 'Moved the whole telephony layer to Telnyx and built the contact-centre features advisers rely on.',
          points: [
            'Provider-agnostic adapter, per-firm provider configuration and a staged cutover runbook',
            'Telnyx managed sub-accounts, so each firm has its own numbers, credentials, billing and isolation',
            'In-browser calling over WebRTC and SIP, with sessions that survive page navigation',
            'IVR menus, hunt groups with round-robin and longest-idle routing, queueing, voicemail and out-of-hours handling',
            'Blind and warm transfers, and three-way calls with creditors on conferences',
          ],
        },
        {
          title: 'Recording & compliance',
          icon: 'shield',
          summary: 'Lawful-basis recording and real-time compliance checks on every type of call.',
          points: [
            'Recording for inbound, outbound, transferred and three-way calls, with per-leg recordings and recovery when a recording fails to start',
            'Recording notices configurable per number and direction, with proof the caller heard them',
            'Recordings stored in AWS S3 behind short-lived download links',
            'Real-time monitoring of adviser speech, with alerts acknowledged on the call card',
          ],
        },
        {
          title: 'Transcription & AI voice',
          icon: 'audio',
          summary: 'Live transcripts on every call, and AI agents that can make and answer calls.',
          points: [
            'Live transcription on Deepgram nova-3, streamed to the call card and labelled by speaker',
            'Post-call and voicemail transcription with a spend brake and PII redaction notices',
            'AI-led outbound calls and an AI receptionist for hunt groups, with hand-over to a human on request',
            'Agent tools for booking callbacks and UK postcode lookup, with hourly health checks and self-repair',
          ],
        },
        {
          title: 'WhatsApp, SMS & inbox',
          icon: 'messages',
          summary: 'Every channel a client uses, in one real-time inbox.',
          points: [
            'WhatsApp Business end to end on the Meta Cloud API, with templates synced from Meta, rich media and quick replies that drive workflows',
            '24-hour window, consent and STOP enforcement, per-firm caps, throughput pacing and number-health monitoring',
            'SMS on Telnyx with per-number pacing, bulk-send limits and Do Not Contact enforcement',
            'Unified inbox for WhatsApp, SMS, Gmail and Outlook email, voicemail and portal chat on Laravel Reverb',
          ],
        },
        {
          title: 'Automation & billing',
          icon: 'workflow',
          summary: 'Workflows, AI-assisted messaging and usage-based billing.',
          points: [
            'AI-drafted messages with adviser review and spend caps, and lead scoring built on an expression DSL',
            'Workflow builder extensions: re-entry rules, send windows, stop-on-reply and an AI assistant step',
            'Usage-based Stripe billing for voice, recording, text-to-speech and WhatsApp, with nightly usage sync',
            'UK number ordering with regulatory requirement groups and daily checks for lapsing approvals',
          ],
        },
        {
          title: 'Security & design system',
          icon: 'lock',
          summary: 'Personal data protected by design, and a rebuilt adviser portal.',
          points: [
            'KMS field-level encryption of personal data, GDPR DPIA addenda and data-retention purges',
            'Malware scanning of uploads with AWS GuardDuty, hardened MFA and webhook signature verification throughout',
            'Adviser portal rebuilt Storybook-first: app shell, role-based navigation, a command palette and live notifications',
            'React, TypeScript, Inertia.js, Tailwind CSS and Radix UI, with accessibility and keyboard tests',
          ],
        },
      ],
      practice: [
        'Test-driven delivery with Pest, Vitest, Storybook interaction tests and Playwright end-to-end tests',
        'PHPStan static analysis, quality and duplication ratchets in CI, and design-parity checks',
        'Diagnosed production issues across webhooks, Redis/Horizon queues, real-time and telephony using captured provider payloads',
      ],
    },
  },

  {
    id: 'lending-platform',
    title: 'Lending Platforms — Real-Time Lead Routing',
    company: 'Louis Charles International',
    market: 'UK & US',
    category: 'fintech',
    status: 'built',
    description:
      'Loan application funnels for three consumer-lending brands, all connected to PingFree, a lead-routing platform that finds each applicant a lender while they wait.',
    role: 'Lead Engineer',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress'],
    features: [
      'Real-time lead routing',
      'Loan application funnels',
      'UK and US compliance',
      'Admin dashboards and reporting',
    ],
    imageUrl: '/images/projects/lending-diagram.png',
    featured: true,
    isPrivate: true,
    caseStudy: {
      tagline: 'Matching UK and US loan applicants with lenders in real time',
      context:
        "The group runs online loan-broking brands in the UK and the US. Every application has to be checked, matched with a lender and answered while the applicant waits, under each market's lending and data-protection rules.",
      role:
        'I designed and built PingFree, the routing platform, and the AllDayLoans application funnel, and took over YupLoans as its owner. As the team grew, I led the engineers who joined.',
      stats: [
        { value: '1,200+', label: 'applications a day' },
        { value: '3', label: 'loan brands on one platform' },
        { value: 'UK · US', label: 'two regulated markets' },
      ],
      imageAlt:
        'Flow diagram: applications from AllDayLoans, QuickCashDirect, YupLoans and affiliate partners pass through PingFree, which validates, de-duplicates and routes them to a lender panel, then sends the applicant to the lender or to fallback offers',
      imageCaption: 'How an application flows through the platform.',
      areas: [
        {
          title: 'Real-time lead routing',
          icon: 'workflow',
          summary: 'One API that takes applications from every brand and partner and finds a lender in real time.',
          points: [
            'Lender order configurable per partner, with fallback offers when an application is declined',
            'Duplicate detection, safe retries and a full audit trail of every lender response',
            'Admin dashboards showing applications, acceptance and earnings by partner, lender and day',
          ],
        },
        {
          title: 'Application funnels',
          icon: 'form',
          summary: 'Fast, mobile-first loan applications that keep applicants moving.',
          points: [
            'Next.js application journeys with live affordability checks and address lookup',
            'Built to work reliably on mobile, including fixes for iOS Safari',
            'Ad-click attribution that survives modern browser privacy protections',
          ],
        },
        {
          title: 'Two markets, two rulebooks',
          icon: 'shield',
          summary: 'UK and US rules built into a single platform.',
          points: [
            'UK: FCA disclosures, recorded marketing consent (PECR) and a simple SMS opt-out',
            'US: TCPA and CCPA consent, with US-specific validation',
            'Validation and lender mapping that switch by region on one codebase',
          ],
        },
        {
          title: 'Security & reliability',
          icon: 'lock',
          summary: 'Protecting applicant data and the platform behind it.',
          points: [
            'Per-partner API keys, rate limiting and encrypted bank details',
            'Bot protection and automatic blocking of abusive traffic',
            'Audited and hardened the inherited YupLoans site after taking it over',
          ],
        },
      ],
      practice: [
        'Laravel API covered by 450+ automated Pest tests, run with coverage in CI',
        'Error tracking with Sentry, API documentation with Swagger and dependency audits on every build',
      ],
    },
  },

  {
    id: 'alldayloans-funnel',
    title: 'AllDayLoans — Loan Application Funnel',
    company: 'Louis Charles International',
    market: 'United Kingdom',
    category: 'fintech',
    status: 'built',
    description:
      'Next.js loan application funnel I built from scratch for a UK credit broker: a fast, mobile-first application with live affordability checks and UK address lookup, consent capture and ad-click attribution, with every application routed through PingFree.',
    role: 'Fullstack Developer',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Laravel', 'PHP'],
    integrations: [
      'Lender Panel APIs',
      'Electronic Signature',
      'Google Ads',
      'Meta Pixel',
      'Microsoft Clarity',
      'Sentry',
      'BetterStack',
    ],
    features: [
      'Multi-step application funnel',
      'Auto-decisioning flow',
      'Lender API integrations',
      'Electronic signature capture',
      'ICO-compliant data handling',
      'FCA disclosures and consent capture',
    ],
    liveUrl: 'https://alldayloans.co.uk',
    imageUrl: '/images/projects/adl-v2.png',
    featured: true,
  },

  {
    id: 'quickcashdirect',
    title: 'QuickCashDirect — Personal Loans Platform',
    company: 'Louis Charles International',
    market: 'United States',
    category: 'fintech',
    status: 'built',
    description:
      'US personal-loan site connecting borrowers with lenders: Next.js with rate limiting and bot protection, ad-click attribution and Google Ads conversion tracking, CCPA-compliant data handling and leads delivered to PingFree.',
    role: 'Fullstack Developer',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python FastAPI'],
    integrations: [
      'Twilio',
      'Google Ads',
      'Meta Ads',
      'TikTok Ads',
      'GoHighLevel',
      'Microsoft Clarity',
      'Sentry',
      'BetterStack',
      'Internal Louis Charles API',
    ],
    features: [
      'Multi-lender integration',
      'Lead routing and deduplication',
      'Real-time loan matching',
      'CCPA compliant data handling',
      'Multi-channel marketing infrastructure',
      'Cross-company API automation',
    ],
    liveUrl: 'https://www.quickcashdirect.com',
    imageUrl: '/images/projects/qcd-home.jpg',
    featured: false,
  },

  {
    id: 'yuploans',
    title: 'YupLoans — Online Lending Marketplace',
    company: 'Louis Charles International',
    market: 'United States',
    category: 'fintech',
    status: 'built',
    description:
      'US lending marketplace on WordPress that I took over and now own: an eligibility gate with reCAPTCHA v3, automatic blocking of abusive traffic, offers for declined applicants, conversion tracking and lead reporting.',
    role: 'Fullstack Developer',
    techStack: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    integrations: [
      'Google Ads',
      'Meta Ads',
      'GoHighLevel',
      'Twilio',
      'Sentry',
      'BetterStack',
      'Microsoft Clarity',
      'Internal Louis Charles API',
    ],
    features: [
      '40+ loan type pages',
      '35+ state coverage with geo-targeted SEO',
      'City-specific landing pages',
      'CCPA / Do Not Sell compliance',
      'Real-time loan matching',
    ],
    liveUrl: 'https://yuploans.com',
    imageUrl: '/images/projects/yuploans.png',
    featured: true,
  },

  {
    id: 'louis-charles-website',
    title: 'Louis Charles International — Company Website',
    company: 'Louis Charles International',
    market: 'United Arab Emirates',
    category: 'marketing',
    status: 'built',
    description:
      'Corporate website for Louis Charles International — a Dubai-based agency delivering marketing, AI automation, and administrative support services to UK and US businesses around the clock.',
    role: 'Lead Developer',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    features: [
      'Corporate branding and services showcase',
      'Responsive, SEO-optimized marketing pages',
      'Contact and lead capture flows',
      '24/7 global support positioning',
    ],
    liveUrl: 'https://louis-charles.com',
    imageUrl: '/images/projects/lci.png',
    featured: false,
  },

  {
    id: 'bas-crm',
    title: 'BAS — Debt-Advice CRM & Case Management',
    company: 'Louis Charles International',
    market: 'United Kingdom',
    category: 'internal-tools',
    status: 'built',
    description:
      'Internal CRM for a UK debt-advice team: lead pipelines, client fact-finds and document checklists, with WhatsApp, SMS and calls handled in real time.',
    role: 'Lead Engineer',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Celery', 'Redis', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Docker'],
    integrations: ['Twilio (WhatsApp, SMS, Voice)', 'SMTP'],
    features: [
      'Lead pipelines and case management',
      'Real-time WhatsApp and SMS inbox',
      'Calendar, to-dos and team presence',
      'Role-based access and data retention',
    ],
    imageUrl: '/images/projects/bas-diagram-rose.png',
    isPrivate: true,
    featured: true,
    caseStudy: {
      tagline: 'One workspace for a UK debt-advice team, from first message to approved case',
      context:
        'Debt advisers juggle WhatsApp conversations, calls, documents and regulated case steps for every client. BAS brings the whole journey into one internal system, from first contact to a completed Individual Voluntary Arrangement (IVA).',
      role:
        'I was responsible for both the backend and the frontend: the FastAPI and PostgreSQL API, the real-time messaging layer and the Next.js application advisers and managers use every day.',
      stats: [
        { value: '370+', label: 'API endpoints' },
        { value: '2,200+', label: 'automated backend tests' },
        { value: '6', label: 'role-based dashboards' },
      ],
      imageAlt:
        'Overview diagram: WhatsApp, SMS, calls and documents flow into BAS, which combines leads and pipelines, a client fact-find, a real-time inbox, calendar and to-dos, document checklists and team presence for advisers, sales managers, marketing and admins',
      imageCaption: 'How BAS brings client conversations and case work together.',
      areas: [
        {
          title: 'Lead & case management',
          icon: 'workflow',
          summary: 'Every client journey tracked from first contact to a completed case.',
          points: [
            'Configurable pipelines and statuses that follow the debt-advice process',
            'Structured client fact-find covering household, income and spending, creditors and support needs',
            'Document checklists per client with upload, verification and an audit trail',
          ],
        },
        {
          title: 'Omnichannel messaging',
          icon: 'messages',
          summary: 'WhatsApp, SMS and calls in one real-time conversation per client.',
          points: [
            'WhatsApp through Twilio with media, voice notes, read receipts and the 24-hour reply window',
            'One-to-one and bulk SMS, with calls logged against each client',
            'A single WebSocket for chat, notifications and presence, with automatic reconnection',
          ],
        },
        {
          title: 'Team productivity',
          icon: 'calendar',
          summary: 'Calendar, to-dos and live presence built around the advice team.',
          points: [
            'Shared calendar with meetings, RSVPs and reminders, plus to-dos managers can delegate',
            'Live team presence that switches to busy during meetings',
            'Dashboards tailored to each role, from advisers to managers',
          ],
        },
        {
          title: 'Security & data protection',
          icon: 'lock',
          summary: 'Built for a regulated, data-sensitive industry.',
          points: [
            'Role-based access with permission checks on every lead, file and note',
            'Signed file links, verified Twilio webhooks and rate-limited sign-in',
            'Automated data retention, GDPR export and deletion of chat data, and masked audit logs',
          ],
        },
      ],
      practice: [
        'FastAPI backend covered by 2,200+ pytest tests, each isolated in a rolled-back transaction',
        'Background jobs with Celery and Redis for data retention, clean-up and monitoring',
        'Docker set-ups for development, testing and production, with structured JSON logging',
      ],
    },
  },

  {
    id: 'dev-osx',
    title: 'Dev OSX — AI-Native Project Management',
    market: 'Internal',
    category: 'internal-tools',
    status: 'built',
    description:
      'An AI-native project-management platform that replaced ClickUp and Notion: ideas, specs, sprints, testing and delivery in one place, with AI coding agents working alongside the team through MCP.',
    role: 'Backend & Database Engineer',
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Auth.js', 'Tailwind CSS', 'Claude API', 'MCP', 'Vercel', 'Vitest', 'Playwright'],
    integrations: ['Anthropic Claude', 'Google Gemini', 'Slack', 'Notion', 'GitHub', 'Sentry', 'Cloudflare R2', 'Upstash'],
    features: [
      'Idea-to-deploy workflow engine',
      'AI specs, planning and agents',
      'MCP server for AI coding agents',
      'Slack, Notion, GitHub and Sentry integrations',
    ],
    imageUrl: '/images/projects/devosx-diagram.png',
    isPrivate: true,
    featured: true,
    caseStudy: {
      tagline: 'One place for ideas, specs, sprints and delivery, with AI agents working alongside the team',
      context:
        'Work was split across ClickUp and Notion, with ideas, specs, sprints and testing living in different tools. Dev OSX brings the whole journey into one platform, from a raw idea to a deployed feature, and lets AI coding agents pick up and finish work through MCP.',
      role:
        'I was the backend and database engineer on a six-person team. I designed and built the workflow engine that moves every item through its lifecycle and assigns the right people, wrote the recurring-tasks spec, and hardened time tracking.',
      stats: [
        { value: '1,600+', label: 'automated tests' },
        { value: '27', label: 'role-gated MCP tools for AI agents' },
        { value: '12', label: 'workflow stages, idea to deploy' },
      ],
      imageAlt:
        'Overview diagram: ideas, bugs, Slack and Notion feed into Dev OSX, which combines specs and an AI wizard, a builds board, sprints and weekly plans, a workflow engine, time tracking and UAT testing for developers, product owners, testers and AI coding agents',
      imageCaption: 'How work flows through Dev OSX, from idea to deploy.',
      areas: [
        {
          title: 'Idea to delivery',
          icon: 'workflow',
          summary: 'One flow from a raw idea to a deployed feature.',
          points: [
            'Ideas, bugs, features and tasks with a shared vocabulary, each feature backed by a spec',
            'A workflow engine that moves every item through 12 stages and assigns developers, testers and deployers',
            'Sprint and weekly planning with capacity, burndown and carry-forward, plus time tracking',
          ],
        },
        {
          title: 'AI built in',
          icon: 'ai',
          summary: 'Claude helps plan, write specs and organise the work.',
          points: [
            'Brain Dump turns free text into typed items; an AI wizard turns a conversation into a spec and work plan',
            'AI-assisted sprint picks, task assignment and forecasts from real hours',
            'Automated agents for code audits, test coverage, dependency checks and spec compliance',
          ],
        },
        {
          title: 'Agents & integrations',
          icon: 'plug',
          summary: "AI coding agents and the team's everyday tools plug straight in.",
          points: [
            'An MCP server with 27 role-gated tools, so AI coding agents can pick up, update and finish work',
            'Slack commands and alerts, Notion import and sync, and GitHub and Sentry webhooks',
            'A Chrome side panel for acceptance testing, with pass or fail per criterion and screen recording',
          ],
        },
        {
          title: 'Security & reliability',
          icon: 'lock',
          summary: 'Hardened for a team that ships every day.',
          points: [
            'Role-based access per project, with agent keys checked in constant time and membership verified on every call',
            'Encrypted integration secrets, signed webhooks and rate limiting that fails closed',
            'Every pull request gated on lint, type checks and tests, with idempotent migrations',
          ],
        },
      ],
      practice: [
        'About 1,600 automated tests: Vitest unit, API and component tests plus Playwright end-to-end',
        'Feature → staging → main workflow with reviewed pull requests and a CI quality gate',
        'Spec-first, AI-assisted delivery: brainstorm, plan, build with sub-agents, then check against the spec',
      ],
    },
  },

  {
    id: 'ndhfinancial',
    title: 'NDH Financial — Debt Solutions Platform',
    company: 'NDH Financial Limited',
    market: 'United Kingdom',
    category: 'fintech',
    status: 'contributed',
    description:
      'Website for NDH Financial, the UK personal-insolvency group behind Louis Charles International, including its chat-style debt-help journey. I worked on development, SEO and conversion optimisation.',
    role: 'Developer & SEO/CRO Specialist',
    techStack: ['WordPress', 'Custom Integrations', 'PHP'],
    integrations: [
      'Trustpilot API',
      'WhatsApp API',
      'Google Ads',
      'Meta Ads',
      'Microsoft Clarity',
      'BetterStack',
      'Sentry',
    ],
    features: [
      'IVA and debt management applications',
      'Trustpilot review integration',
      'GDPR and ICO compliance',
      'Breathing Space scheme integration',
      'SEO and conversion optimization',
    ],
    liveUrl: 'https://ndhfinancial.co.uk',
    imageUrl: '/images/projects/ndh-home.jpg',
    featured: false,
  },

  // ── Earlier Projects (PHP / Laravel Era) ──────────────────────────────────

  {
    id: 'lms-platform',
    title: 'DGEP — Government E-Learning Platform',
    company: 'Dubai Center for Government Excellence',
    market: 'United Arab Emirates',
    category: 'lms',
    status: 'built',
    description:
      'Large-scale government e-learning platform for Dubai Center for Government Excellence — serving thousands of public sector employees with structured learning paths, course management, and progress tracking. Budget exceeding $500K.',
    role: 'Lead Full-Stack Engineer',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Role-based access (Admin / Instructor / Student)',
      'Course and lesson management',
      'Progress and completion tracking',
      'Payment gateway integration',
      'Government-grade security and compliance',
    ],
    imageUrl: '/images/projects/dgep-diagram.png',
    featured: true,
  },

  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    market: 'Syria',
    category: 'ecommerce',
    status: 'built',
    description: 'Full e-commerce solution with multi-level authentication, advanced product search, payment gateway, and shipping integrations.',
    role: 'Fullstack Developer',
    techStack: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'Bootstrap'],
    features: [
      'Multi-level authentication',
      'Advanced product search and filtering',
      'Payment gateway integration',
      'Shipping gateway integration',
    ],
    imageUrl: '/images/projects/ecommerce.JPG',
    featured: false,
  },

  {
    id: 'task-management',
    title: 'Task Management System',
    market: 'Syria',
    category: 'saas',
    status: 'built',
    description: 'Real-time task management system with live CRUD operations, role-based permissions, and instant UI updates without full page reloads.',
    role: 'Fullstack Developer',
    techStack: ['Laravel', 'Livewire', 'PHP', 'MySQL'],
    features: [
      'Real-time task CRUD with Livewire',
      'Role-based permissions',
      'Instant UI updates (no page reload)',
      'Task assignment and tracking',
    ],
    imageUrl: '/images/projects/task.JPG',
    featured: false,
  },

  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    market: 'Iraq',
    liveUrl: 'https://b-arrow.com',
    category: 'real-estate',
    status: 'built',
    description: 'Property listing and management platform with client interactions, admin dashboard, and performance analytics.',
    role: 'Fullstack Developer',
    techStack: ['Laravel', 'Livewire', 'PHP', 'MySQL'],
    features: [
      'Property listings with search and filters',
      'Client inquiry management',
      'Admin dashboard with analytics',
      'Performance reporting',
    ],
    imageUrl: '/images/projects/blue-arrow-home.jpg',
    featured: false,
  },

  {
    id: 'schools-online',
    title: 'School-Online — School Management SaaS',
    market: 'Syria',
    category: 'saas',
    status: 'built',
    description:
      "Laravel SaaS I founded and built, connecting 6 private schools with 7,000+ students' parents: student, class and staff administration, a structured complaints system, and school-bus scheduling and tracking.",
    role: 'Fullstack Developer',
    techStack: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Student / teacher / class CRUD',
      'Unique student ID generation',
      'Role-based access management',
      'Attendance tracking',
    ],
    imageUrl: '/images/projects/school.JPG',
    featured: true,
  },
]
