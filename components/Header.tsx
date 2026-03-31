'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SQ = 'https://images.squarespace-cdn.com/content/v1/65f9079916d9d162d074166e'

const navLinks = [
  { href: '/', label: 'Home', match: (p: string) => p === '/' },
  { href: '/experience', label: 'Experience', match: (p: string) => p.startsWith('/experience') },
  { href: '/projects', label: 'Projects', match: (p: string) => p.startsWith('/projects') },
  { href: '/writing', label: 'Writing', match: (p: string) => p.startsWith('/writing') },
  { href: 'mailto:vkmurthy007@gmail.com', label: 'Contact', match: () => false },
]

export default function Header() {
  const path = usePathname()
  return (
    <header className="pt-5 pb-4 border-b border-white/[0.08] mb-8 sm:mb-10">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link href="/" className="flex items-center gap-[0.65rem] no-underline text-tx hover:text-acc transition-colors">
          <div className="w-7 h-7 rounded-full bg-bg3 border border-white/[0.14] flex-shrink-0 overflow-hidden flex items-center justify-center text-[10px] text-acc">
            <img
              src={`${SQ}/3384fa3e-8d6a-461e-9fa3-6aefc00c2ce8/IMG_4385.jpg`}
              alt="VK"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="text-[0.88rem] font-medium">Vaishnavi Krishnamurthy</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 flex-wrap">
          {navLinks.map(({ href, label, match }) => (
            href.startsWith('mailto') ? (
              <a key={label} href={href} className="nav-link">{label}</a>
            ) : (
              <Link
                key={label}
                href={href}
                className={`nav-link ${match(path) ? 'nav-link-active' : ''}`}
              >
                {label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  )
}
