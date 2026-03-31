import PageWrap from '@/components/PageWrap'

export const metadata = { title: 'Contact - VK' }

export default function Contact() {
  return (
    <PageWrap>
      <h1 className="text-[1.3rem] font-medium mb-[0.4rem]">Get in touch</h1>
      <p className="text-[0.855rem] text-[rgba(240,240,240,0.62)] leading-[1.8] mb-[2rem]">
        I'm always open to interesting conversations - whether that's a role, a project,
        or just something worth talking about.
      </p>

      <div className="flex flex-col gap-3">
        <a
          href="mailto:vkmurthy007@gmail.com"
          className="flex items-center justify-between gap-4 px-5 py-4 border border-white/[0.08] rounded-sm no-underline text-tx hover:border-acc hover:text-acc transition-colors group"
        >
          <div>
            <div className="text-[0.82rem] font-medium mb-[0.15rem]">Email</div>
            <div className="text-[0.75rem] text-muted group-hover:text-acc transition-colors">
              vkmurthy007@gmail.com
            </div>
          </div>
          <span className="text-muted group-hover:text-acc transition-colors text-[0.85rem]">↗</span>
        </a>

        <a
          href="https://linkedin.com/in/vaishnavi-krishnamurthy-102533112/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 px-5 py-4 border border-white/[0.08] rounded-sm no-underline text-tx hover:border-acc hover:text-acc transition-colors group"
        >
          <div>
            <div className="text-[0.82rem] font-medium mb-[0.15rem]">LinkedIn</div>
            <div className="text-[0.75rem] text-muted group-hover:text-acc transition-colors">
              vaishnavi-krishnamurthy
            </div>
          </div>
          <span className="text-muted group-hover:text-acc transition-colors text-[0.85rem]">↗</span>
        </a>
      </div>
    </PageWrap>
  )
}
