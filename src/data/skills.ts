import type { Skill } from '@/types'

export const skills: Skill[] = [
  // ── Backend ───────────────────────────────────────────────────────────────
  { name: 'PHP', category: 'backend', level: 'expert', yearsOfExperience: 7, note: '7+ years' },
  { name: 'Laravel', category: 'backend', level: 'expert', yearsOfExperience: 7, note: 'REST APIs, queues, Livewire' },
  { name: 'Laravel Horizon', category: 'backend', level: 'expert', note: 'Redis queues, job monitoring' },
  { name: 'Symfony', category: 'backend', level: 'advanced', note: 'PHP framework, components' },
  { name: 'Python', category: 'backend', level: 'expert', note: 'FastAPI, async services' },
  { name: 'FastAPI', category: 'backend', level: 'expert', note: 'Async REST APIs' },
  { name: 'Node.js', category: 'backend', level: 'expert', note: 'Express, automation' },

  // ── Frontend ──────────────────────────────────────────────────────────────
  { name: 'JavaScript', category: 'frontend', level: 'expert', note: 'ES6+, core language' },
  { name: 'TypeScript', category: 'frontend', level: 'expert', note: 'All new projects' },
  { name: 'React', category: 'frontend', level: 'expert', note: 'Hooks, context, RSC' },
  { name: 'Next.js', category: 'frontend', level: 'expert', note: 'App Router, SSG, SSR' },
  { name: 'Inertia.js', category: 'frontend', level: 'expert', note: 'Laravel + React applications' },
  { name: 'Radix UI', category: 'frontend', level: 'advanced', note: 'Accessible component primitives' },
  { name: 'Vue.js', category: 'frontend', level: 'expert', note: 'Previous primary framework' },
  { name: 'Nuxt.js', category: 'frontend', level: 'advanced', note: 'Vue SSR' },
  { name: 'HTML5 / CSS3', category: 'frontend', level: 'expert', note: 'Semantic, accessible' },

  // ── Voice & Real-time Communications ──────────────────────────────────────
  { name: 'Telnyx Voice API', category: 'realtime-comms', level: 'expert', note: 'Call Control, conferences, sub-accounts' },
  { name: 'WebRTC', category: 'realtime-comms', level: 'expert', note: 'In-browser calling for advisers' },
  { name: 'SIP', category: 'realtime-comms', level: 'advanced', note: 'Credential registration, call legs' },
  { name: 'IVR & Call Routing', category: 'realtime-comms', level: 'expert', note: 'Hunt groups, queueing, voicemail' },
  { name: 'Call Recording', category: 'realtime-comms', level: 'expert', note: 'Lawful-basis, per-leg, recording notices' },
  { name: 'Laravel Reverb / WebSockets', category: 'realtime-comms', level: 'expert', note: 'Live presence and inbox updates' },

  // ── AI, Speech & LLM ──────────────────────────────────────────────────────
  { name: 'Voice AI Agents', category: 'ai-tools', level: 'expert', note: 'Telnyx AI Assistants, tools, human hand-over' },
  { name: 'Deepgram', category: 'ai-tools', level: 'expert', note: 'Live and post-call speech-to-text' },
  { name: 'Text-to-Speech', category: 'ai-tools', level: 'expert', note: 'Voice tuning for AI assistants' },
  { name: 'LLM Integration', category: 'ai-tools', level: 'expert', note: 'AI-drafted messages, prompt classes, spend caps' },
  { name: 'Anthropic Claude', category: 'ai-tools', level: 'expert', note: 'AI integration, prompt engineering' },
  { name: 'OpenAI', category: 'ai-tools', level: 'expert', note: 'GPT API integration, embeddings' },
  { name: 'Model Context Protocol', category: 'ai-tools', level: 'expert', note: 'Certified — Anthropic, 2026' },
  { name: 'Claude Code', category: 'ai-tools', level: 'expert', note: 'Certified — Anthropic, 2026' },
  { name: 'Cursor', category: 'ai-tools', level: 'expert', note: 'AI-powered IDE, agentic coding' },

  // ── Messaging & Omnichannel ───────────────────────────────────────────────
  { name: 'WhatsApp Business API', category: 'messaging', level: 'expert', note: 'Meta Cloud API, templates, rich media' },
  { name: 'SMS', category: 'messaging', level: 'expert', note: 'Telnyx messaging, pacing, consent' },
  { name: 'Omnichannel Inbox', category: 'messaging', level: 'expert', note: 'WhatsApp, SMS, email, voicemail, chat' },
  { name: 'Gmail & Outlook APIs', category: 'messaging', level: 'expert', note: 'Two-way email in the inbox' },
  { name: 'Webhooks', category: 'messaging', level: 'expert', note: 'Signature verification, key rotation, retries' },

  // ── Styling & Design ──────────────────────────────────────────────────────
  { name: 'Tailwind CSS', category: 'styling-design', level: 'expert', note: 'All new projects' },
  { name: 'Bootstrap', category: 'styling-design', level: 'expert', note: 'Legacy projects' },
  { name: 'UI/UX Design', category: 'styling-design', level: 'advanced', note: 'Figma, wireframing, user flows' },
  { name: 'Figma', category: 'styling-design', level: 'advanced', note: 'Prototyping & design' },
  { name: 'Design Systems', category: 'styling-design', level: 'expert', note: 'Storybook-first component libraries' },
  { name: 'Responsive Design', category: 'styling-design', level: 'expert', note: 'Mobile-first' },

  // ── Databases & Caching ───────────────────────────────────────────────────
  { name: 'MySQL', category: 'databases', level: 'expert', note: 'Advanced queries, optimization' },
  { name: 'PostgreSQL', category: 'databases', level: 'expert', note: 'Relational, advanced queries' },
  { name: 'MongoDB', category: 'databases', level: 'advanced', note: 'NoSQL, document stores' },
  { name: 'Redis', category: 'databases', level: 'advanced', note: 'Caching, queues, sessions' },

  // ── Testing & Quality ─────────────────────────────────────────────────────
  { name: 'Pest', category: 'testing', level: 'expert', note: 'Test-driven development in PHP' },
  { name: 'PHPUnit', category: 'testing', level: 'expert', note: 'Unit and feature tests' },
  { name: 'Vitest', category: 'testing', level: 'expert', note: 'TypeScript unit tests' },
  { name: 'Playwright', category: 'testing', level: 'advanced', note: 'End-to-end tests' },
  { name: 'Storybook', category: 'testing', level: 'expert', note: 'Component development, interaction tests' },
  { name: 'PHPStan', category: 'testing', level: 'expert', note: 'Static analysis in CI' },

  // ── Digital Identity & KYC ────────────────────────────────────────────────
  { name: 'UAE Pass', category: 'digital-identity', level: 'advanced', note: 'UAE national digital identity' },
  { name: 'Onfido', category: 'digital-identity', level: 'advanced', note: 'Biometric & document verification, KYC' },
  { name: 'Experian', category: 'digital-identity', level: 'advanced', note: 'Credit identity, UK lending compliance' },
  { name: 'TrueLayer', category: 'digital-identity', level: 'advanced', note: 'Open banking, income verification' },
  { name: 'OAuth 2.0 / OpenID Connect', category: 'digital-identity', level: 'expert', note: 'SSO, social login, auth flows' },
  { name: 'KYC / AML Workflows', category: 'digital-identity', level: 'advanced', note: 'Onboarding, identity & risk checks' },

  // ── Compliance & Security ─────────────────────────────────────────────────
  { name: 'ICO', category: 'compliance', level: 'expert', note: 'UK data protection compliance' },
  { name: 'GDPR', category: 'compliance', level: 'expert', note: 'EU data protection' },
  { name: 'FCA', category: 'compliance', level: 'expert', note: 'UK financial conduct regulation' },
  { name: 'CCPA', category: 'compliance', level: 'intermediate', note: 'US (California) privacy compliance' },
  { name: 'Field-level Encryption', category: 'compliance', level: 'expert', note: 'AWS KMS for personal data' },
  { name: 'MFA / 2FA', category: 'compliance', level: 'expert', note: 'Hardened authentication' },
  { name: 'reCAPTCHA', category: 'compliance', level: 'expert', note: 'Bot protection, form security' },
  { name: 'Electronic Signatures', category: 'compliance', level: 'intermediate', note: 'Compliant e-signature capture' },

  // ── DevOps & Cloud ────────────────────────────────────────────────────────
  { name: 'Git / GitHub', category: 'devops', level: 'expert', note: 'Branching, reviews, Actions' },
  { name: 'GitHub Actions', category: 'devops', level: 'expert', note: 'CI/CD automation' },
  { name: 'Docker', category: 'devops', level: 'expert', note: 'Containerization, compose' },
  { name: 'AWS', category: 'devops', level: 'expert', note: 'S3, KMS, GuardDuty, EC2' },
  { name: 'Laravel Cloud', category: 'devops', level: 'expert', note: 'Managed Laravel hosting' },
  { name: 'Azure', category: 'devops', level: 'advanced', note: 'Cloud services, deployments' },
  { name: 'Google Cloud', category: 'devops', level: 'advanced', note: 'Cloud services' },
  { name: 'Vercel', category: 'devops', level: 'expert', note: 'Deployments, preview URLs' },
  { name: 'Linux', category: 'devops', level: 'advanced', note: 'Server administration' },
  { name: 'Plesk', category: 'devops', level: 'expert', note: 'Server management, deployments' },
  { name: 'cPanel', category: 'devops', level: 'advanced', note: 'Hosting management' },
  { name: 'Jenkins', category: 'devops', level: 'intermediate', note: 'CI/CD pipelines' },

  // ── CMS & Platforms ───────────────────────────────────────────────────────
  { name: 'WordPress', category: 'cms-platforms', level: 'expert', note: 'Custom themes, plugins' },
  { name: 'WooCommerce', category: 'cms-platforms', level: 'advanced', note: 'E-commerce on WordPress' },
  { name: 'Shopify', category: 'cms-platforms', level: 'advanced', note: 'Stores, themes' },
  { name: 'Magento', category: 'cms-platforms', level: 'intermediate', note: 'E-commerce platform' },
  { name: 'Drupal', category: 'cms-platforms', level: 'intermediate', note: 'Enterprise CMS' },

  // ── Integrations ──────────────────────────────────────────────────────────
  { name: 'Stripe', category: 'api-integrations', level: 'expert', note: 'Billing, usage metering, subscriptions, webhooks' },
  { name: 'PayPal', category: 'api-integrations', level: 'advanced', note: 'Payments, checkout, IPN webhooks' },
  { name: 'Twilio', category: 'api-integrations', level: 'expert', note: 'SMS, voice, WhatsApp' },
  { name: 'Firebase (FCM)', category: 'api-integrations', level: 'advanced', note: 'Push notifications, realtime' },
  { name: 'SendGrid', category: 'api-integrations', level: 'expert', note: 'Transactional email, deliverability' },
  { name: 'Google Maps API', category: 'api-integrations', level: 'expert', note: 'Maps, geolocation' },
  { name: 'Pusher', category: 'api-integrations', level: 'expert', note: 'Real-time WebSockets, broadcasting' },
  { name: 'Meta Ads API', category: 'api-integrations', level: 'expert', note: 'Ads, lead gen, Conversions API' },
  { name: 'Google Ads API', category: 'api-integrations', level: 'expert', note: 'Campaign tracking, conversions' },
  { name: 'TikTok Ads API', category: 'api-integrations', level: 'intermediate', note: 'Campaign tracking, lead gen' },
  { name: 'GoHighLevel', category: 'api-integrations', level: 'advanced', note: 'CRM, marketing automation' },
  { name: 'Trustpilot API', category: 'api-integrations', level: 'intermediate', note: 'Reviews, reputation management' },
  { name: 'Sentry', category: 'api-integrations', level: 'expert', note: 'Error tracking, performance' },
  { name: 'Microsoft Clarity', category: 'api-integrations', level: 'expert', note: 'Heatmaps, session recordings' },
  { name: 'BetterStack', category: 'api-integrations', level: 'expert', note: 'Uptime monitoring, on-call' },

  // ── SEO & CRO ─────────────────────────────────────────────────────────────
  { name: 'Technical SEO', category: 'seo-cro', level: 'expert', note: 'Core Web Vitals, JSON-LD, sitemaps' },
  { name: 'GA4', category: 'seo-cro', level: 'expert', note: 'Events, conversions, attribution' },
  { name: 'CRO', category: 'seo-cro', level: 'expert', note: 'A/B testing, funnel optimization' },
  { name: 'Core Web Vitals', category: 'seo-cro', level: 'expert', note: 'LCP, CLS, TTFB optimization' },
]
