'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const projects = [
  { slug: 'ola',          name: 'Ola!',              tags: ['Voice AI', "Women's Health"] },
  { slug: 'cerebrocare',  name: 'CerebroCare',        tags: ['Healthcare', 'IoT'] },
  { slug: 'dermat-ai',    name: 'Equiderm',          tags: ['Healthcare', 'AI/ML'] },
  { slug: 'unretirement', name: 'Unretirement',       tags: ['User Research'] },
  { slug: 'xpend',        name: 'XPend',              tags: ['Fintech', 'AI'] },
  { slug: 'storesmart',   name: 'StoreSmart',         tags: ['AgTech', 'IoT'] },
  { slug: 'aid-ally',     name: 'Aid Ally',           tags: ['Crisis Tech', 'AR'] },
]

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const isOpen = path !== '/projects' && path !== '/projects/'
  const prevPath = useRef(path)
  const [key, setKey] = useState(path)

  useEffect(() => {
    if (prevPath.current !== path) {
      prevPath.current = path
      setKey(path)
    }
  }, [path])

  return (
    <div className="min-h-screen">
      {/* Header - always wide on desktop, full width on mobile */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <Header />
      </div>

      {isOpen ? (
        /* ── SPLIT VIEW (desktop) / STACKED (mobile) ── */
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex gap-0">

            {/* Sidebar - hidden on mobile */}
            <motion.aside
              className="hidden sm:block flex-shrink-0 overflow-hidden"
              animate={{ width: 210, opacity: 1 }}
              initial={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="sticky top-8 w-[210px]">
                <div className="text-[0.62rem] font-medium uppercase tracking-[0.14em] text-muted mb-4">Projects</div>
                <nav className="flex flex-col">
                  {projects.map(p => {
                    const active = path === `/projects/${p.slug}` || path === `/projects/${p.slug}/`
                    return (
                      <Link key={p.slug} href={`/projects/${p.slug}`}
                        className={`flex flex-col py-[0.65rem] border-t border-white/[0.08] last:border-b no-underline transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-40 hover:opacity-75'}`}
                      >
                        <span className="text-[0.8rem] font-medium text-tx">{p.name}</span>
                        <span className="text-[0.67rem] text-muted mt-[0.1rem]">{p.tags.join(' · ')}</span>
                        {active && <motion.span layoutId="activeBar" className="block h-px bg-acc mt-[0.4rem]" style={{ width: 16 }} />}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </motion.aside>

            {/* Divider - hidden on mobile */}
            <div className="hidden sm:block w-px bg-white/[0.08] mx-10 self-stretch" />

            {/* Content */}
            <main className="flex-1 min-w-0 pb-16">
              {/* Back link on mobile only */}
              <div className="sm:hidden mb-6">
                <Link href="/projects" className="text-[0.75rem] text-muted no-underline hover:text-acc transition-colors">
                  ← All projects
                </Link>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}>
                  {children}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      ) : (
        /* ── LIST VIEW ── */
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="max-w-[560px]">
            <main className="pb-16">
              <AnimatePresence mode="wait">
                <motion.div key={key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}>
                  {children}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      )}

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <Footer />
      </div>
    </div>
  )
}
