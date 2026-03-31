import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Unretirement - VK' }

export default function Unretirement() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Unretirement</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Data Visualisation · User Research · Harvard · 2023
      </p>
      <Tags items={['Mixed Methods','User Research','Journey Mapping','Data Visualisation','Opportunity Sizing']} />

      <ImgFull path="e504ecb5-109a-4fbf-aef2-99235712f0fb/1.png" />

      <Blk label="The problem">
        <p>
          Between 2020 and 2023, the number of Americans returning to work after retirement
          grew significantly - driven by meaning and identity as much as economic pressure.
          Yet every major employment platform treats them identically to a 28-year-old first
          job-seeker. The friction is designed in.
        </p>
      </Blk>

      <Stats items={[
        ["3","distinct user archetypes identified"],
        ["Mixed","quantitative and qualitative methods"],
        ["JTBD","framework applied at each re-entry stage"],
        ["Harvard","graduate research project"],
      ]} />

      <Insight text="Retirees returning to work aren't a niche edge case. They're a signal that employment products have failed to design for the full arc of a working life." />

      <Blk label="My approach">
        <p>
          The research combined labour market data analysis with qualitative interviews across
          three distinct returning-worker archetypes: the financially-driven, the identity-driven,
          and the opportunity-driven. Each had entirely different jobs-to-be-done at each stage
          of re-entry, and none of them were being served by existing platforms.
        </p>
        <p>
          The output was not a research report. It was a <strong>product opportunity framework</strong>:
          three defined segments, their unmet needs mapped against re-entry stages, and
          prioritised intervention points where a product could reduce friction. The data
          visualisation below was built to communicate those findings in a form that a product
          team could act on directly.
        </p>
      </Blk>

      <div className="my-[1.4rem] rounded-sm overflow-hidden border border-white/[0.08]" style={{ aspectRatio: '16/9' }}>
        <iframe
          src="https://drive.google.com/file/d/1LnxRa1cdo5TqC0LijDwenyzYGHbpFUO0/preview"
          className="w-full h-full"
          allow="autoplay"
          style={{ border: 'none' }}
        />
      </div>

      <ProjNav prev="Dermat-AI" prevHref="/projects/dermat-ai" next="XPend" nextHref="/projects/xpend" />
    </div>
  )
}
