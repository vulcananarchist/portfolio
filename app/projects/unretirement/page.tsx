import PageWrap from '@/components/PageWrap'
import { ImgFull, Img2, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Unretirement VK' }

export default function Unretirement() {
  return (
    <PageWrap>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Unretirement</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Data Analysis · User Research · Product Design · Harvard
      </p>
      <Tags items={['Mixed Methods','User Interviews','Journey Mapping','Opportunity Sizing','Data Analysis']} />

      <ImgFull path="e504ecb5-109a-4fbf-aef2-99235712f0fb/1.png" />

      <Blk label="The problem">
        <p>
          Existing employment platforms treat all job-seekers as equivalent, creating friction
          specifically for people with non-linear careers and multi-decade gaps. This research
          investigated the unretirement trend to surface the product opportunity.
        </p>
      </Blk>

      <Stats items={[
        ["3","user archetypes identified"],
        ["Mixed","quant + qual methods"],
        ["Harvard","graduate research"],
        ["Framework","actionable for a product team"],
      ]} />

      <Insight text="Retirees returning to work aren't a niche edge case they're a signal that employment products have failed to design for the full arc of a working life." />

      <Img2
        a="468f9ac9-3bbb-4984-ba4e-28906e2adb27/6.png"
        b="369e766e-9f3c-4242-bba0-e6c6feb0ac2f/7.png"
      />

      <Blk label="Research to product">
        <p>
          The output was a <strong>product opportunity framework</strong>: three defined segments,
          their unmet needs, jobs-to-be-done at each re-entry stage, and prioritised intervention
          points. Designed to be actionable for a product team, not just a research report.
        </p>
      </Blk>

      <ImgFull path="6172cd17-8a72-48a6-a5e2-94c0bab9b654/12.png" />

      <ProjNav prev="Autonomous Drones" prevHref="/projects/drones" next="XPend" nextHref="/projects/xpend" />
    </PageWrap>
  )
}
