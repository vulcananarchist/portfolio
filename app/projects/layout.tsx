'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const projects = [
  { slug: 'ola',          name: 'Ola!',              tags: ['Voice AI', "Women's Health"] },
  { slug: 'cerebrocare',  name: 'CerebroCare',        tags: ['Healthcare', 'IoT'] },
  { slug: 'dermat-ai',    name: 'Dermat-AI',          tags: ['Healthcare', 'AI/ML'] },
  { slug: 'drones',       name: 'Autonomous Drones',  tags: ['ML', 'IoT'] },
  { slug: 'unretirement', name: 'Unretirement',       tags: ['User Research'] },
  { slug: 'xpend',        name: 'XPend',              tags: ['Fintech', 'AI'] },
  { slug: 'storesmart',   name: 'StoreSmart',         tags: ['AgTech', 'IoT'] },
  { slug: 'aid-ally',     name: 'Aid Ally',           tags: ['Crisis Tech', 'AR'] },
]

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const isProjectOpen = path !== '/projects' && path !== '/projects/'
  const [open, setOpen] = useState(isProjectOpen)

  useEffect(() => {
    // slight delay so CSS transition fires after mount
    const t = setTimeout(() => setOpen(isProjectOpen), 10)
    return () => clearTimeout(t)
  }, [isProjectOpen])

  return (
    <div className="min-h-screen">
      {/* Header always at full width */}
      <div
        className="mx-auto px-6 transition-all duration-500 ease-in-out"
        style={{ maxWidth: open ? '1100px' : '560px' }}
      >
        <Header />
      </div>

      {/* Body */}
      <div
        className="mx-auto px-6 transition-all duration-500 ease-in-out"
        style={{ maxWidth: open ? '1100px' : '560px' }}
      >
        <div className="flex gap-0">

          {/* Sidebar — slides in/out */}
          <aside
            className="flex-shrink-0 overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              width: open ? '210px' : '0px',
              opacity: open ? 1 : 0,
            }}
          >
            <div className="sticky top-8 w-[210px]">
              <div className="text-[0.62rem] font-medium uppercase tracking-[0.14em] text-muted mb-4">
                Projects
              </div>
              <nav className="flex flex-col">
                {projects.map(p => {
                  const active = path === `/projects/${p.slug}` || path === `/projects/${p.slug}/`
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className={`flex flex-col py-[0.65rem] border-t border-white/[0.08] last:border-b no-underline transition-all duration-200 ${
                        active ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                      }`}
                    >
                      <span className="text-[0.8rem] font-medium text-tx">{p.name}</span>
                      <span className="text-[0.67rem] text-muted mt-[0.1rem]">{p.tags.join(' · ')}</span>
                      {active && <span className="block w-4 h-px bg-acc mt-[0.4rem]" />}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Divider — fades in */}
          <div
            className="flex-shrink-0 transition-all duration-500 ease-in-out"
            style={{
              width: open ? '1px' : '0px',
              margin: open ? '0 2.5rem' : '0',
              background: 'rgba(255,255,255,0.08)',
              opacity: open ? 1 : 0,
              alignSelf: 'stretch',
            }}
          />

          {/* Main content */}
          <main className="flex-1 min-w-0 pb-16">
            {children}
          </main>

        </div>
      </div>

      <div
        className="mx-auto px-6 transition-all duration-500 ease-in-out"
        style={{ maxWidth: open ? '1100px' : '560px' }}
      >
        <Footer />
      </div>
    </div>
  )
}
