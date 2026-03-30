'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

  return (
    <div className="min-h-screen">
      <div className={isProjectOpen ? 'max-w-[1100px] mx-auto px-6' : 'max-w-[560px] mx-auto px-6'}>
        <Header />
      </div>

      {isProjectOpen ? (
        /* ── SPLIT VIEW: list left, content right ── */
        <div className="max-w-[1100px] mx-auto px-6 flex gap-0">
          {/* Left sidebar */}
          <aside className="w-[210px] flex-shrink-0">
            <div className="sticky top-8">
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
                      className={`flex flex-col py-[0.65rem] border-t border-white/[0.08] last:border-b no-underline transition-all ${
                        active ? 'opacity-100' : 'opacity-40 hover:opacity-70'
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

          {/* Divider */}
          <div className="w-px bg-white/[0.08] mx-10 self-stretch" />

          {/* Right content */}
          <main className="flex-1 min-w-0 pb-16">{children}</main>
        </div>
      ) : (
        /* ── DEFAULT: full list, normal width ── */
        <div className="max-w-[560px] mx-auto px-6">
          <main className="pb-16">{children}</main>
        </div>
      )}

      <div className={isProjectOpen ? 'max-w-[1100px] mx-auto px-6' : 'max-w-[560px] mx-auto px-6'}>
        <Footer />
      </div>
    </div>
  )
}
