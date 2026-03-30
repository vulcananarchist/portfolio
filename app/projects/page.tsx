import Link from 'next/link'
import PageWrap from '@/components/PageWrap'

export const metadata = { title: 'Projects — VK' }

const projects = [
  {
    slug: 'ola',
    name: 'Ola!',
    desc: 'Voice AI app for early dementia detection in women — MIT AI Hackathon winner',
    tags: ['Voice AI', "Women's Health", 'Cognitive Health'],
  },
  {
    slug: 'cerebrocare',
    name: 'CerebroCare',
    desc: 'Integrated stroke recovery system with AI-driven monitoring and personalised therapy',
    tags: ['Healthcare', 'IoT', 'ML', 'Wearables'],
  },
  {
    slug: 'dermat-ai',
    name: 'Dermat-AI',
    desc: 'Longitudinal AI dermatology assessment — equitable diagnosis for underserved communities',
    tags: ['Healthcare', 'AI/ML', 'Product Strategy'],
  },
  {
    slug: 'drones',
    name: 'Autonomous Drones',
    desc: 'Indoor GPS-denied navigation — 98.2% accuracy (DRDO)',
    tags: ['ML', 'IoT', 'Autonomous Systems'],
  },
  {
    slug: 'unretirement',
    name: 'Unretirement',
    desc: 'Data analysis and user research on why retired individuals return to work',
    tags: ['Data Analysis', 'User Research', 'Product Design'],
  },
  {
    slug: 'xpend',
    name: 'XPend',
    desc: 'AI finance app — smart expense tracking and behavioural budgeting nudges',
    tags: ['Fintech', 'AI', 'Product Management'],
  },
  {
    slug: 'storesmart',
    name: 'StoreSmart',
    desc: 'IoT and ML cold storage optimisation to reduce post-harvest food loss — Indian Patent',
    tags: ['AgTech', 'IoT', 'ML'],
  },
  {
    slug: 'aid-ally',
    name: 'Aid Ally',
    desc: 'AR-guided crisis recovery and humanitarian aid — 48% faster deployment',
    tags: ['Crisis Tech', 'AR', 'UI/UX'],
  },
]

export default function Projects() {
  return (
    <PageWrap>
      <section>
        <h2 className="section-label">Selected Projects</h2>
        <div>
          {projects.map(p => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="project-item block group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[0.875rem] font-medium transition-colors duration-150 group-hover:text-acc">
                    {p.name}
                  </div>
                  <div className="text-[0.78rem] text-muted mt-[0.1rem] leading-[1.55]">{p.desc}</div>
                  <div className="flex flex-wrap gap-[0.3rem] mt-[0.4rem]">
                    {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                </div>
                <span className="text-[0.78rem] text-muted flex-shrink-0 mt-[0.1rem] transition-colors duration-150 group-hover:text-acc">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageWrap>
  )
}
