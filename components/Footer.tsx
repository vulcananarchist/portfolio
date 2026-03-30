'use client'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const t = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
      }).format(d)
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York', timeZoneName: 'short',
      }).formatToParts(d)
      const tz = parts.find(p => p.type === 'timeZoneName')?.value ?? 'ET'
      setTime(`(${tz})  ${t}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-white/[0.08] pt-5 pb-8 flex items-center justify-between gap-4 flex-wrap mt-16">
      <span className="text-[0.76rem] text-muted tabular-nums">{time}</span>
      <span className="text-[0.76rem] text-muted">Boston, MA.</span>
    </footer>
  )
}
