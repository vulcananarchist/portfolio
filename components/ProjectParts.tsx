import Link from 'next/link'

const SQ = 'https://images.squarespace-cdn.com/content/v1/65f9079916d9d162d074166e'

export function ImgFull({ path }: { path: string }) {
  return <img className="img-full" src={`${SQ}/${path}`} alt="" loading="lazy" />
}

export function Img2({ a, b }: { a: string; b: string }) {
  return (
    <div className="img-2">
      <img src={`${SQ}/${a}`} alt="" loading="lazy" />
      <img src={`${SQ}/${b}`} alt="" loading="lazy" />
    </div>
  )
}

export function Blk({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="blk">
      {label && <div className="blk-label">{label}</div>}
      {children}
    </div>
  )
}

export function Insight({ text }: { text: string }) {
  return (
    <div className="insight-block">
      <div className="text-[0.58rem] font-medium uppercase tracking-[0.12em] text-acc opacity-65 mb-[0.35rem]">
        The insight
      </div>
      <div className="text-[0.9rem] text-tx leading-[1.6] italic">{text}</div>
    </div>
  )
}

export function Stats({ items }: { items: [string, string][] }) {
  return (
    <div className="grid grid-cols-4 gap-2 my-[1.4rem]">
      {items.map(([n, l]) => (
        <div key={l} className="stat-card">
          <div className="text-[1.1rem] font-medium text-tx leading-none mb-[0.2rem]">{n}</div>
          <div className="text-[0.65rem] text-muted leading-[1.4]">{l}</div>
        </div>
      ))}
    </div>
  )
}

export function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-[0.35rem] mb-[1.8rem]">
      {items.map(t => <span key={t} className="proj-tag">{t}</span>)}
    </div>
  )
}

export function ProjNav({
  prev, prevHref, next, nextHref,
}: {
  prev?: string; prevHref?: string; next?: string; nextHref?: string;
}) {
  return (
    <div className="flex justify-between items-center pt-5 border-t border-white/[0.08] mt-10">
      {prev && prevHref
        ? <Link href={prevHref} className="proj-nav-link before:content-['←_']">{prev}</Link>
        : <span />}
      {next && nextHref
        ? <Link href={nextHref} className="proj-nav-link after:content-['_→']">{next}</Link>
        : <span />}
    </div>
  )
}
