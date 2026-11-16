import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  alt?: boolean
}

export function SectionWrapper({ id, children, className, alt }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-24 sm:py-28',
        alt && 'section-alt',
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
