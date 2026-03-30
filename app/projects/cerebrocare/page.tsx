import PageWrap from '@/components/PageWrap'
import { ImgFull, Img2, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'CerebroCare VK' }

export default function CerebroCare() {
  return (
    <PageWrap>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">CerebroCare</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Healthcare · IoT Wearable · ML · Co-Founder
      </p>
      <Tags items={['Product Strategy','ML Integration','Wearable UX','Market Analysis','0 to 1']} />

      <ImgFull path="7df6dbeb-8278-420b-bec4-6fc15ba87144/MEntire+system++%281%29.jpg" />

      <Blk label="The problem">
        <p>
          80% of stroke survivors receive inadequate post-acute rehabilitation. Not because care
          doesn't exist, but because the system loses visibility the moment patients go home.
          CerebroCare adds the missing feedback loop.
        </p>
      </Blk>

      <Stats items={[
        ["80%","of survivors get inadequate rehab"],
        ["2-person","founding team"],
        ["ML","risk models for drop-off"],
        ["Pilot-ready","post competitions"],
      ]} />

      <Insight text="The biggest barrier to stroke recovery isn't medical knowledge it's the absence of a feedback loop between patient and clinician once the patient goes home." />

      <Img2
        a="e4850d64-6e3c-453c-ba24-81ab6a017ed1/Team.jpg"
        b="a72816ea-e3b5-4a3f-b526-b77f17acb4af/V_+Problem.jpg"
      />

      <Blk label="What I built">
        <p>
          Led all product and strategy: 30+ stakeholder interviews with neurologists, therapists,
          and patients; MVP around adherence tracking and remote monitoring; ML models to flag
          recovery plateaus; UX designed for older, lower-literacy users.
        </p>
        <p>
          The wearable form factor was chosen for <strong>psychological continuity</strong> daily
          wear reinforces daily exercise. Alerts were deliberately low-frequency to avoid fatigue.
        </p>
      </Blk>

      <Img2
        a="b112f47c-9627-4a06-bf81-ea953ae02502/M_++Market+size.jpg"
        b="eb9bbf6f-e083-475e-9253-8caaf0308ce9/V_+Business+model.jpg"
      />

      <ProjNav prev="Ola!" prevHref="/projects/ola" next="Dermat-AI" nextHref="/projects/dermat-ai" />
    </PageWrap>
  )
}
