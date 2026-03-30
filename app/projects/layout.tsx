'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const projects = [
  { slug: 'ola',          name: 'Ola!',               tags: ['Voice AI', "Women's Health"] },
  { slug: 'cerebrocare',  name: 'CerebroCare',         tags: ['Healthcare', 'IoT'] },
  { slug: 'dermat-ai',    name: 'Dermat-AI',           tags: ['Healthcare', 'AI/ML'] },
  { slug: 'drones',       name: 'Autonomous Drones',   tags: ['ML', 'IoT'] },
  { slug: 'unretirement', name: 'Unretirement',        tags: ['User Research'] },
  { slug: 'xpend',        name: 'XPend',               tags: ['Fintech', 'AI'] },
  { slug: 'storesmart',   name: 'StoreSmart',          tags: ['AgTech', 'IoT'] },
  { slug: 'aid-ally',     name: 'Aid Ally',            tags: ['Crisis Tech', 'AR'] },
]

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-[1100px] mx-auto px-6">
        <Header />
      </div>

      {/* Split panel */}
      <div className="max-w-[1100px] mx-auto px-6 flex gap-0">

        {/* LEFT — fixed project list */}
        <aside className="w-[220px] flex-shrink-0">
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
                    className={`group flex flex-col py-[0.7rem] border-t border-white/[0.08] last:border-b no-underline transition-colors ${
                      active ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <span className={`text-[0.82rem] font-medium transition-colors ${active ? 'text-tx' : 'text-tx'}`}>
                      {p.name}
                    </span>
                    <span className="text-[0.68rem] text-muted mt-[0.1rem]">
                      {p.tags.join(' · ')}
                    </span>
                    {active && (
                      <span className="block w-3 h-[1px] bg-acc mt-[0.4rem]" />
                    )}
                  </Link>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Divider */}
        <div className="w-px bg-white/[0.08] mx-10 self-stretch" />

        {/* RIGHT — project content */}
        <main className="flex-1 min-w-0 pb-16">
          {children}
        </main>

      </div>

      {/* Footer */}
      <div className="max-w-[1100px] mx-auto px-6">
        <Footer />
      </div>
    </div>
  )
}
