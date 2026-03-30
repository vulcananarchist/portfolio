import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vaishnavi Krishnamurthy',
  description: 'AI Product Manager and Engineer. Harvard Design Engineering. Building at the intersection of AI, healthcare, and human-centred design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
