export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'realtime-comms'
  | 'messaging'
  | 'styling-design'
  | 'databases'
  | 'digital-identity'
  | 'compliance'
  | 'ai-tools'
  | 'testing'
  | 'devops'
  | 'cms-platforms'
  | 'api-integrations'
  | 'seo-cro'

export type CertCategory =
  | 'ai'
  | 'backend'
  | 'frontend'
  | 'devops'
  | 'cloud'
  | 'marketing'
  | 'other'

export type ProjectCategory =
  | 'fintech'
  | 'admin-tools'
  | 'internal-tools'
  | 'ecommerce'
  | 'edtech'
  | 'lms'
  | 'real-estate'
  | 'saas'
  | 'marketing'

export type ProjectStatus = 'built' | 'contributed'

export interface Certificate {
  id: string
  title: string
  issuer: string
  category: CertCategory
  date: string
  credentialId?: string
  verifyUrl?: string
  downloadPath?: string
  description?: string
  featured?: boolean
}

export interface Skill {
  name: string
  category: SkillCategory
  level?: 'expert' | 'advanced' | 'intermediate'
  yearsOfExperience?: number
  note?: string
}

export type CaseStudyIcon = 'phone' | 'shield' | 'audio' | 'messages' | 'workflow' | 'lock' | 'form' | 'calendar' | 'ai' | 'plug'

export interface CaseStudyArea {
  title: string
  icon: CaseStudyIcon
  summary: string
  points: string[]
}

export interface CaseStudy {
  tagline: string
  context: string
  role: string
  stats: { value: string; label: string }[]
  areas: CaseStudyArea[]
  practice: string[]
  imageAlt?: string
  imageCaption?: string
  screenshot?: { src: string; alt: string; caption?: string }
}

export interface Project {
  id: string
  title: string
  company?: string
  market: string
  category: ProjectCategory
  status: ProjectStatus
  description: string
  role: string
  techStack: string[]
  integrations?: string[]
  features: string[]
  liveUrl?: string
  productUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured: boolean
  isPrivate?: boolean
  caseStudy?: CaseStudy
}

export interface WorkExperience {
  id: string
  company: string
  website?: string
  websites?: { label: string; url: string }[]
  role: string
  period: {
    start: string
    end: string | 'Present'
  }
  location: string
  description?: string
  responsibilities: string[]
  techStack?: string[]
  certificate?: string
}

export interface Profile {
  name: string
  firstName: string
  lastName: string
  title: string
  secondaryTitle: string
  specialty: string
  location: string
  availability: string
  domain: string
  coreStack: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  graduationYear: string
  location: string
  major?: string
  period?: string
  description?: string
  certificate?: string
}
