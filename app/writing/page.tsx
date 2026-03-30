'use client'
import { useEffect, useState } from 'react'
import PageWrap from '@/components/PageWrap'

interface Post { title: string; post_date?: string; canonical_url?: string; slug?: string }

export default function Writing() {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://healthtechactually.substack.com/api/v1/posts?limit=20&offset=0')
      .then(r => r.json())
      .then(data => setPosts(data?.posts ?? data ?? []))
      .catch(() => setError(true))
  }, [])

  return (
    <PageWrap>
      <section>
        <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted mb-[1.2rem]">Writing</h2>
        <div className="mb-[1.8rem] pb-[1.8rem] border-b border-white/[0.08]">
          <p className="body-p">
            <strong>Healthtech, actually</strong> cuts through the noise in health tech — what's
            working, what's not, and what actually matters for people building at the intersection
            of AI and healthcare.
          </p>
          <a
            href="https://healthtechactually.substack.com/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.8rem] bg-tx text-bg no-underline px-[1.1rem] py-[0.5rem] rounded-sm font-medium mt-4 hover:opacity-85 transition-opacity"
          >
            Subscribe on Substack ↗
          </a>
        </div>

        <div>
          {error && (
            <p className="text-[0.8rem] text-muted py-2">
              Could not load posts.{' '}
              <a href="https://healthtechactually.substack.com/" target="_blank" rel="noopener noreferrer" className="text-acc">
                Read on Substack
              </a>.
            </p>
          )}
          {!error && posts === null && (
            <p className="text-[0.8rem] text-muted py-2">Loading posts...</p>
          )}
          {!error && posts?.length === 0 && (
            <p className="text-[0.8rem] text-muted py-2">No posts yet — check back soon.</p>
          )}
          {posts?.map(p => {
            const url = p.canonical_url ?? `https://healthtechactually.substack.com/p/${p.slug ?? ''}`
            const date = p.post_date
              ? new Date(p.post_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
              : ''
            return (
              <a
                key={p.slug ?? p.title}
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
