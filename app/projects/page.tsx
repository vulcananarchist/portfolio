import Link from 'next/link'

export const metadata = { title: 'Projects - VK' }

const projects = [
  { slug: 'ola',          name: 'Ola!',        desc: 'Voice AI app for early dementia detection in women - MIT AI Hackathon',               tags: ['Voice AI', "Women's Health", 'Cognitive Health'] },
  { slug: 'cerebrocare',  name: 'CerebroCare', desc: 'Integrated stroke recovery system with AI-driven monitoring and personalised therapy', tags: ['Healthcare', 'IoT', 'ML', 'Wearables'] },
  { slug: 'dermat-ai',    name: 'Equiderm',    desc: 'Agentic AI clinical decision support for skin of colour - Harvard MDE Thesis',         tags: ['Health Equity', 'Clinical AI', 'Harvard MDE Thesis'] },
  { slug: 'unretirement', name: 'Unretirement',desc: 'Data analysis and user research on why retired individuals return to work',             tags: ['Data Analysis', 'User Research', 'Product Design'] },
  { slug: 'xpend',        name: 'XPend',       desc: 'AI finance app - smart expense tracking and behavioural budgeting nudges',             tags: ['Fintech', 'AI', 'Product Management'] },
  { slug: 'storesmart',   name: 'StoreSmart',  desc: 'IoT and ML cold storage optimisation to reduce post-harvest food loss - Indian Patent',tags: ['AgTech', 'IoT', 'ML'] },
  { slug: 'aid-ally',     name: 'Aid Ally',    desc: 'AR-guided crisis recovery and humanitarian aid - 48% faster deployment',               tags: ['Crisis Tech', 'AR', 'UI/UX'] },
]

const aiProjects = [
  {
    slug: 'continuum',
    name: 'Continuum',
    desc: 'Care orchestration intelligence — Uber Health ride data as predictive clinical risk signals',
    tags: ['Agentic AI', 'SDOH', 'Uber Health', 'Claude API'],
    href: '/projects/continuum',
  },
]

export default function Projects() {
  return (
    <div>
      <section className="mb-[3rem]">
        <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted mb-[1.2rem]">Selected Projects</h2>
        <div>
          {projects.map(p => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="project-item block group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[0.875rem] font-medium transition-colors duration-150 group-hover:text-acc">{p.name}</div>
                  <div className="text-[0.78rem] text-muted mt-[0.1rem] leading-[1.55]">{p.desc}</div>
                  <div className="flex flex-wrap gap-[0.3rem] mt-[0.4rem]">
                    {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                </div>
                <span className="text-[0.78rem] text-muted flex-shrink-0 mt-[0.1rem] transition-colors duration-150 group-hover:text-acc">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted mb-[0.4rem]">Built with AI</h2>
        <p className="text-[0.75rem] text-muted mb-[1.2rem] leading-[1.6]">
          Products I designed and built end-to-end using AI as a collaborator.
        </p>
        <div>
          {aiProjects.map(p => (
            <Link key={p.slug} href={p.href} className="project-item block group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-[0.875rem] font-medium transition-colors duration-150 group-hover:text-acc">{p.name}</div>
                    <span className="text-[0.6rem] font-medium uppercase tracking-[0.1em] text-acc border border-acc/30 px-[0.4rem] py-[0.1rem] rounded-sm">Live</span>
                  </div>
                  <div className="text-[0.78rem] text-muted mt-[0.1rem] leading-[1.55]">{p.desc}</div>
                  <div className="flex flex-wrap gap-[0.3rem] mt-[0.4rem]">
                    {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                </div>
                <span className="text-[0.78rem] text-muted flex-shrink-0 mt-[0.1rem] transition-colors duration-150 group-hover:text-acc">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
