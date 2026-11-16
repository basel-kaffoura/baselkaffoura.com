import { Mail } from 'lucide-react'
import { FaWhatsapp, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa'

const LINKS = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/basel-kaffoura', label: 'GitHub' },
  { icon: <FaLinkedin size={16} />, href: 'https://linkedin.com/in/basel-kaffoura', label: 'LinkedIn' },
  { icon: <FaWhatsapp size={16} />, href: 'https://wa.me/971503898795', label: 'WhatsApp' },
  { icon: <FaTelegram size={16} />, href: 'https://t.me/basel_kaffoura', label: 'Telegram' },
  { icon: <Mail size={16} />, href: 'mailto:baselkaffoura@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-t border-(--c-border) py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-(--c-muted)">
            © {new Date().getFullYear()} Basel Kaffoura · Dubai, UAE
          </p>

          <div className="flex items-center gap-3">
            {LINKS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-(--c-border) text-(--c-muted) hover:text-primary hover:border-primary/40 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
