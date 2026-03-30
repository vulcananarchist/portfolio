import Header from './Header'
import Footer from './Footer'

export default function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Wide header */}
      <div className="max-w-[1100px] mx-auto px-6">
        <Header />
      </div>
      {/* Centred content */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-[560px]">
          <main className="pb-16">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
