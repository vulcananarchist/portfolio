'use client'
import { useEffect, useState } from 'react'
import PageWrap from '@/components/PageWrap'

interface Post { title: string; post_date?: string; canonical_url?: string; slug?: string }

const FALLBACK_POSTS: Post[] = [
  {
    title: "Why access to patient data still doesn't mean AI can act in healthcare.",
    canonical_url: 'https://healthtechactually.substack.com/p/why-access-to-patient-data-still',
  },
]

export default function Writing() {
  const [posts, setPosts] = useState<Post[]>(FALLBACK_POSTS)

  useEffect(() => {
    fetch('https://healthtechactually.substack.com/api/v1/posts?limit=20&offset=0')
      .then(r => r.json())
      .then(data => {
        const fetched = data?.posts ?? (Array.isArray(data) ? data : [])
        if (fetched.length > 0) setPosts(fetched)
      })
      .catch(() => {})
  }, [])

  return (
    <PageWrap>
      {/* Title + newsletter identity */}
      <div className="mb-10">
        <div className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted mb-3">
          Newsletter
        </div>
        <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-3">
          Healthtech, actually.
        </h1>
        <p className="text-[0.855rem] text-[rgba(240,240,240,0.62)] leading-[1.85] mb-3">
          Most health tech discourse is either breathlessly optimistic or reflexively sceptical.
          This newsletter tries to be neither. It's about what's actually happening at the
          intersection of AI and healthcare - the decisions being made, the trade-offs being
          ignored, and what people building in this space genuinely need to know.
        </p>
        <p className="text-[0.855rem] text-[rgba(240,240,240,0.62)] leading-[1.85]">
          Written by someone who has built in this space, not just observed it.
        </p>
        <a
          href="https://substack.com/@healthtechactually?utm_source=user-menu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.78rem] text-acc no-underline border border-acc/30 px-4 py-[0.45rem] rounded-sm mt-5 hover:border-acc hover:bg-acc/5 transition-colors"
        >
          Follow on Substack ↗
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.08] mb-6" />

      {/* Posts */}
      <div>
        {posts.map((p, idx) => {
          const url = p.canonical_url ?? `https://healthtechactually.substack.com/p/${p.slug ?? ''}`
          const date = p.post_date
            ? new Date(p.post_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            : ''
          return (
            <a
              key={p.canonical_url ?? p.title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-6 py-5 border-b border-white/[0.08] no-underline text-tx group"
            >
              <div className="flex-1 min-w-0">
                <div className="text-[0.92rem] font-medium leading-[1.45] group-hover:text-acc transition-colors duration-150 mb-1">
                  {p.title}
                </div>
                {date && (
                  <div className="text-[0.72rem] text-muted">{date}</div>
                )}
              </div>
              <span className="text-[0.8rem] text-muted flex-shrink-0 mt-[0.2rem] group-hover:text-acc transition-colors duration-150">
                ↗
              </span>
            </a>
          )
        })}
      </div>
    </PageWrap>
  )
}
