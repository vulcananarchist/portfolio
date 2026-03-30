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
      <section>
        <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted mb-[1.2rem]">Writing</h2>
        <div className="mb-[1.8rem] pb-[1.8rem] border-b border-white/[0.08]">
          <p className="body-p">
            <strong>Healthtech, actually</strong> cuts through the noise in health tech —
            what's working, what's not, and what actually matters for people building at
            the intersection of AI and healthcare.
          </p>
          <a
            href="https://substack.com/@healthtechactually?utm_source=user-menu"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.8rem] bg-tx text-bg no-underline px-[1.1rem] py-[0.5rem] rounded-sm font-medium mt-4 hover:opacity-85 transition-opacity"
          >
            Healthtech, actually ↗
          </a>
        </div>

        <div>
          {posts.map(p => {
            const url = p.canonical_url ?? `https://healthtechactually.substack.com/p/${p.slug ?? ''}`
            const date = p.post_date
              ? new Date(p.post_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
              : ''
            return (
              <a
                key={p.canonical_url ?? p.title}
                href={url}
                target="_blank" rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 py-[0.9rem] border-t border-white/[0.08] last:border-b no-underline text-tx group"
              >
                <div>
                  <div className="text-[0.855rem] font-medium leading-[1.4] group-hover:text-acc transition-colors">{p.title}</div>
                  {date && <div className="text-[0.75rem] text-muted mt-[0.2rem]">{date}</div>}
                </div>
                <span className="text-[0.78rem] text-muted flex-shrink-0 mt-[0.1rem] group-hover:text-acc transition-colors">↗</span>
              </a>
            )
          })}
        </div>
      </section>
    </PageWrap>
  )
}
