import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'primary' | 'accent' | 'purple' | 'success' | 'outline' | 'tech' | 'category'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-(--bg-surface-2) text-(--c-muted) border border-(--c-border)',
  primary:
    'bg-primary/10 text-primary border border-primary/20',
  accent:
    'bg-accent/10 text-accent border border-accent/20',
  purple:
    'bg-purple/10 text-purple-light border border-purple/20',
  success:
    'bg-success/10 text-success border border-success/20',
  outline:
    'bg-transparent border border-(--c-border) text-(--c-muted)',
  tech:
    'bg-(--bg-surface-2) text-(--c-text) border border-(--c-border) font-mono text-xs',
  category:
    'bg-primary/10 text-primary border border-primary/20 font-medium uppercase tracking-wide',
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
