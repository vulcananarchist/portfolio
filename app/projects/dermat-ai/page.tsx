import PageWrap from '@/components/PageWrap'
import { ImgFull, Img2, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Dermat-AI — VK' }

export default function DermatAI() {
  return (
    <PageWrap>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Dermat-AI</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Healthcare · ML · Product Strategy · MIT / Harvard
      </p>
      <Tags items={['Diagnostic AI','Algorithmic Bias','Clinical UX','Computer Vision','Health Equity']} />

      <ImgFull path="c780cf3c-a1ab-4d39-9196-60abb6ec2e3a/Copy+of+Copy+of+Purple+Gradient+Entertainment+Application+Presentation.png" />

      <Blk label="The problem">
        <p>
          Dermatology AI models trained predominantly on lighter skin tones perform significantly
          worse on darker ones, with real clinical consequences. Dermat-AI is a diagnostic copilot
          that directly addresses this gap, built on the CV model from Raved Technologies
          (acquired by Oliva Clinics).
        </p>
      </Blk>

      <Stats items={[
        ["81%","CV accuracy, 4% above benchmark"],
        ["Acquired","by Oliva Clinics"],
        ["Longitudinal","tracking vs snapshots"],
        ["MIT/Harvard","research collaboration"],
      ]} />

      <Insight text="The most dangerous AI in healthcare isn't the one that's wrong — it's the one that's confidently wrong for patients who look different from the training data." />

      <Img2
        a="51353ec4-b427-4383-9e40-9bfaf8b0567a/4.png"
        b="0d58e41c-95e0-493f-9463-02eb3f4684a6/5.png"
      />

      <Blk label="Design approach">
        <p>
          <strong>Dermatologists are time-starved.</strong> The copilot surfaces the delta — what
          changed since last visit and how significantly — before anything else. Every secondary
          feature was cut if it added more than one additional glance.
        </p>
      </Blk>

      <ImgFull path="6f86a71d-fee4-4cb9-b15d-c09fca212476/12.png" />

      <ProjNav prev="CerebroCare" prevHref="/projects/cerebrocare" next="Autonomous Drones" nextHref="/projects/drones" />
    </PageWrap>
  )
}
