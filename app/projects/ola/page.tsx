import PageWrap from '@/components/PageWrap'
import { Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Ola! VK' }

export default function Ola() {
  return (
    <PageWrap>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Ola!</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Voice AI · Women's Health · Cognitive Screening · MIT AI Hackathon Winner
      </p>
      <Tags items={['Voice Biomarkers','Acoustic AI',"Women's Health",'Longitudinal Tracking','Mobile UX']} />

      <Blk label="The problem">
        <p>
          70% of Alzheimer's patients are women, yet cognitive screening is almost universally
          designed for elderly patients in clinical settings. Symptoms in middle-aged women are
          dismissed as stress or menopause. Formal diagnosis comes 10 to 15 years after the first
          signs appear.
        </p>
      </Blk>

      <Stats items={[
        ["70%","of Alzheimer's patients are women"],
        ["10-15yr","before formal diagnosis"],
        ["1st place","MIT AI Hackathon, 1,000+ teams"],
        ["Passive","no clinic, no wearable"],
      ]} />

      <Insight text="The best health screening tool is one that doesn't feel like a health screening tool it just works in the background of a life that's already full." />

      <Blk label="The solution">
        <p>
          Ola! passively analyzes speech biomarkers during everyday phone calls pitch, tempo,
          pauses, filler words, hesitations, vocal tone to detect early cognitive drift. No
          active test. Just a call you were already going to make.
        </p>
        <p>
          Results surface as a weekly Cognitive Health Score with plain-language insights. Scores
          are framed as <strong>trends, not diagnoses</strong>, reinforcing agency rather than anxiety.
        </p>
      </Blk>

      <Blk label="The user">
        <p>
          Fiona, 45. Sharp, busy, juggling client meetings and school pickups. Forgetting names
          mid-conversation, losing track of thoughts. Too busy to see a doctor, unsure if it's
          worth worrying about. She wants <strong>clarity, not a clinic visit</strong>.
        </p>
      </Blk>

      <Blk label="Business model">
        <p>
          Freemium B2C at $9.99/mo. B2B licensing to memory clinics ($5K to $15K/year), employer
          wellness ($50 to $100/employee), SDK/API for digital health platforms ($25K/year + usage).
          The B2B channel is the strategic priority employers already have distribution to exactly
          this demographic.
        </p>
      </Blk>

      <ProjNav next="CerebroCare" nextHref="/projects/cerebrocare" />
    </PageWrap>
  )
}
