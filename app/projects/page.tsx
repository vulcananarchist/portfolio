'use client'
import { useState } from 'react'
import Link from 'next/link'

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
    desc: 'Care orchestration intelligence - Uber Health ride data as predictive clinical risk signals',
    tags: ['Agentic AI', 'SDOH', 'Uber Health', 'Claude API'],
    live: true,
  },
]

export default function Projects() {
  const [tab, setTab] = useState<'projects' | 'ai'>('projects')

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-0 mb-8 border-b border-white/[0.08]">
        <button
          onClick={() => setTab('projects')}
          className={`text-[0.78rem] pb-[0.65rem] pr-5 border-b-[1.5px] transition-colors duration-150 ${
            tab === 'projects'
              ? 'border-acc text-tx font-medium'
              : 'border-transparent text-muted hover:text-tx'
          }`}
        >
          Selected Projects
        </button>
        <button
          onClick={() => setTab('ai')}
          className={`text-[0.78rem] pb-[0.65rem] px-5 border-b-[1.5px] transition-colors duration-150 ${
            tab === 'ai'
              ? 'border-acc text-tx font-medium'
              : 'border-transparent text-muted hover:text-tx'
          }`}
        >
          Built with AI
        </button>
      </div>

      {/* Selected Projects */}
      {tab === 'projects' && (
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
      )}

      {/* Built with AI */}
      {tab === 'ai' && (
        <div>
          <p className="text-[0.78rem] text-muted mb-5 leading-[1.7]">
            Products designed and built end-to-end using AI as a collaborator.
          </p>
          {aiProjects.map(p => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="project-item block group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-[0.875rem] font-medium transition-colors duration-150 group-hover:text-acc">{p.name}</div>
                    {p.live && (
                      <span className="text-[0.6rem] font-medium uppercase tracking-[0.1em] text-acc border border-acc/30 px-[0.4rem] py-[0.1rem] rounded-sm">
                        Live
                      </span>
                    )}
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
      )}
    </div>
  )
}
