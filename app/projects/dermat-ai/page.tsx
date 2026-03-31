import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Dermat-AI - VK' }

export default function DermatAI() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Dermat-AI</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Healthcare · Computer Vision · Product Strategy · MIT / Harvard
      </p>
      <Tags items={['Diagnostic AI','Algorithmic Bias','Clinical UX','Computer Vision','Health Equity']} />

      <ImgFull path="c780cf3c-a1ab-4d39-9196-60abb6ec2e3a/Copy+of+Copy+of+Purple+Gradient+Entertainment+Application+Presentation.png" />

      <Blk label="The problem">
        <p>
          Skin cancer is one of the most detectable cancers in the world, and one of the most
          unequally detected. AI dermatology models trained predominantly on lighter skin tones
          perform significantly worse on darker ones. The patients who face the greatest barriers
          to specialist access are the same ones most likely to be failed by the AI meant to help them.
        </p>
      </Blk>

      <Stats items={[
        ["81%","CV model accuracy"],
        ["4%","above industry benchmark"],
        ["Longitudinal","change tracking, not snapshots"],
        ["MIT/Harvard","research collaboration"],
      ]} />

      <Insight text="The most dangerous AI in healthcare isn't the one that's wrong. It's the one that's confidently wrong for patients who look different from the training data." />

      <Blk label="My approach">
        <p>
          The core product decision was longitudinal tracking rather than single-visit diagnosis.
          Early-stage skin conditions are frequently dismissed on first presentation. By tracking
          how a lesion changes across visits, the model surfaces the delta: what changed, how much,
          how fast. That signal is far harder to dismiss.
        </p>
        <p>
          Dermatologists see 40+ patients a day. The interface was designed around one constraint:
          the most important signal in under 5 seconds. The copilot leads with what changed
          since last visit before showing anything else. Every secondary feature was cut if it
          required more than one additional glance.
        </p>
        <p>
          Bias mitigation was treated as a <strong>product problem, not just a model problem.</strong>{' '}
          The system flags when confidence is lower for a given skin tone and surfaces a recommendation
          for human review, rather than presenting uncertain predictions with false confidence.
          That decision came directly from user research with dermatologists who had seen AI tools
          miss exactly this.
        </p>
      </Blk>

      <ImgFull path="51353ec4-b427-4383-9e40-9bfaf8b0567a/4.png" />

      <ProjNav prev="CerebroCare" prevHref="/projects/cerebrocare" next="Autonomous Drones" nextHref="/projects/drones" />
    </div>
  )
}
