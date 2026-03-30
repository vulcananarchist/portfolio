import { ImgFull, Img2, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Dermat-AI — VK' }

const SQ = 'https://images.squarespace-cdn.com/content/v1/65f9079916d9d162d074166e'

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
          Skin cancer is one of the most detectable cancers in the world — and one of the most
          unequally detected. AI dermatology tools trained predominantly on lighter skin tones
          miss conditions on darker skin at significantly higher rates. Patients who already face
          the greatest barriers to specialist access are the ones most likely to be failed by
          the technology meant to help them.
        </p>
        <p>
          Dermat-AI is a diagnostic AI copilot built to close that gap — combining a
          <strong> proprietary computer vision model</strong> with longitudinal tracking
          to catch what single-visit snapshots miss.
        </p>
      </Blk>

      <Stats items={[
        ["81%","CV model accuracy"],
        ["4%","above industry benchmark"],
        ["Longitudinal","tracks change over time"],
        ["MIT/Harvard","research collaboration"],
      ]} />

      <Insight text="The most dangerous AI in healthcare isn't the one that's wrong — it's the one that's confidently wrong for patients who look different from the training data." />

      <ImgFull path="afec82ab-4a36-4114-9b27-c43474b94d94/2.png" />

      <Blk label="What it does">
        <p>
          Rather than flagging conditions in isolation, Dermat-AI tracks longitudinal change —
          how a lesion or condition evolves across visits. This matters because early-stage
          skin cancers are often dismissed on first presentation. The model surfaces
          the <strong>delta</strong>: what changed, how much, and how fast.
        </p>
      </Blk>

      <Img2
        a="73aa4d48-ffc6-4798-b395-f34c4aa0d211/3.png"
        b="51353ec4-b427-4383-9e40-9bfaf8b0567a/4.png"
      />

      <Blk label="Design approach">
        <p>
          <strong>Dermatologists see 40+ patients a day.</strong> The interface was designed
          around one constraint: surface the most important signal in under 5 seconds.
          The copilot leads with what changed since last visit before showing anything else.
          Every secondary feature was cut if it required more than one additional glance.
        </p>
        <p>
          Bias mitigation was built into the product layer, not just the model — the system
          flags when confidence is lower for a given skin tone and recommends human review,
          rather than presenting uncertain predictions with false confidence.
        </p>
      </Blk>

      <Img2
        a="0d58e41c-95e0-493f-9463-02eb3f4684a6/5.png"
        b="41798f3b-8cc4-4a99-a9f1-f681a6780d88/6.png"
      />

      <ImgFull path="6f86a71d-fee4-4cb9-b15d-c09fca212476/12.png" />

      <ProjNav prev="CerebroCare" prevHref="/projects/cerebrocare" next="Autonomous Drones" nextHref="/projects/drones" />
    </div>
  )
}
