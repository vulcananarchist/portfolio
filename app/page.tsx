import PageWrap from '@/components/PageWrap'

const SQ = 'https://images.squarespace-cdn.com/content/v1/65f9079916d9d162d074166e'

const chips = [
  'Prompt Engineering','Conversational AI','Model Evaluation','LLM Experimentation',
  'A/B Testing','NLP','Python','TensorFlow','PyTorch','User Research',
  'Roadmapping','Figma','SQL','Agile','REST APIs',
]

export default function Home() {
  return (
    <PageWrap>
      <img
        src={`${SQ}/3384fa3e-8d6a-461e-9fa3-6aefc00c2ce8/IMG_4385.jpg`}
        alt="Vaishnavi Krishnamurthy"
        className="w-[72px] h-[72px] rounded-full object-cover object-top border border-white/[0.14] block mb-[1.4rem]"
      />
      <div className="flex items-center gap-2 text-[0.78rem] text-muted mb-[1.4rem]">
        <span className="w-[5px] h-[5px] rounded-full bg-tx inline-block flex-shrink-0 animate-pulse" />
        Boston, MA · Open to relocation
      </div>
      <div className="text-[1rem] font-medium mb-[0.2rem]">Vaishnavi Krishnamurthy</div>
      <div className="text-[0.82rem] text-acc mb-[1.6rem]">AI Product Manager &amp; Engineer</div>

      <div className="space-y-[0.9rem] mb-[1.3rem]">
        <p className="body-p">
          Deeply technical AI product builder specializing in{' '}
          <strong>conversational AI and prompt engineering</strong>, with 4+ years shipping
          0-to-1 consumer products. I work at the intersection of engineering depth and
          human-centred design fluent in both model evaluation frameworks and user research.
        </p>
        <p className="body-p">
          Harvard Design Engineer (SEAS + GSD). I've founded a company that got acquired,
          shipped AI products used by real founders, and built healthcare tools that work
          for the people who need them most.
        </p>
        <p className="body-p">
          Right now I'm focused on AI in healthcare where the stakes are high, the problems
          are real, and good product thinking genuinely matters.
        </p>
      </div>

      <div className="flex flex-wrap gap-[0.4rem] mb-8">
        {chips.map(c => <span key={c} className="chip">{c}</span>)}
      </div>

      <div className="flex gap-4 flex-wrap">
        <a href="mailto:vkmurthy007@gmail.com" className="connect-btn">
          <EmailIcon /> Email
        </a>
        <a
          href="https://linkedin.com/in/vaishnavi-krishnamurthy-102533112/"
          target="_blank" rel="noopener noreferrer"
          className="connect-btn"
        >
          <LinkedInIcon /> LinkedIn
        </a>
        <a
          href="https://healthtechactually.substack.com/"
          target="_blank" rel="noopener noreferrer"
          className="connect-btn"
        >
          <SubstackIcon /> Newsletter
        </a>
      </div>
    </PageWrap>
  )
}

function EmailIcon() {
  return (
    <svg className="w-[13px] h-[13px] fill-current flex-shrink-0" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg className="w-[13px] h-[13px] fill-current flex-shrink-0" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
function SubstackIcon() {
  return (
    <svg className="w-[13px] h-[13px] fill-current flex-shrink-0" viewBox="0 0 24 24">
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
  )
}
