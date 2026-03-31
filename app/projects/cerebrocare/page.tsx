import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'CerebroCare - VK' }

export default function CerebroCare() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">CerebroCare</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Healthcare · IoT Wearable · ML · Co-Founder
      </p>
      <Tags items={['Product Strategy','Wearable UX','ML','Stakeholder Research','0 to 1']} />

      <ImgFull path="7df6dbeb-8278-420b-bec4-6fc15ba87144/MEntire+system++%281%29.jpg" />

      <Blk label="The problem">
        <p>
          80% of stroke survivors receive inadequate post-acute rehabilitation. Not because care
          doesn't exist, but because the system has no visibility once patients leave hospital.
          Clinicians cannot monitor what they cannot see. Patients cannot improve without feedback.
          CerebroCare closes that loop.
        </p>
      </Blk>

      <Stats items={[
        ["80%","of survivors get inadequate rehab"],
        ["30+","stakeholder interviews"],
        ["ML","models to flag recovery drop-off"],
        ["Co-founded","0 to 1"],
      ]} />

      <Insight text="The biggest barrier to stroke recovery isn't medical knowledge. It's the absence of a feedback loop between patient and clinician once the patient goes home." />

      <Blk label="My approach">
        <p>
          I led all product and strategy work from day one. The first six weeks were entirely
          research: 30+ interviews with neurologists, physiotherapists, and stroke survivors
          across two hospitals. The consistent finding was that drop-off happens in the first
          two weeks at home, and no one sees it coming.
        </p>
        <p>
          The MVP was scoped tightly around adherence tracking and remote monitoring - not
          therapy delivery, which was a common trap. We built ML models to flag patients
          whose recovery was plateauing before it became visible to clinicians.
        </p>
        <p>
          The wearable form factor was a deliberate product decision, not a technical one.
          A device worn daily becomes a physical reminder to do exercises. We chose{' '}
          <strong>psychological continuity over pure data collection.</strong> Every alert
          was low-frequency by design - alert fatigue kills adherence faster than no alerts at all.
          All UX was validated with patients who had limited smartphone familiarity.
        </p>
      </Blk>

      <ImgFull path="a72816ea-e3b5-4a3f-b526-b77f17acb4af/V_+Problem.jpg" />

      <ProjNav prev="Ola!" prevHref="/projects/ola" next="Dermat-AI" nextHref="/projects/dermat-ai" />
    </div>
  )
}
