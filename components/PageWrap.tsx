import Header from './Header'
import Footer from './Footer'

export default function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[560px] mx-auto px-6">
      <Header />
      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  )
}
