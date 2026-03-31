import { Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Ola! — VK' }

export default function Ola() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Ola!</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Voice AI · Women's Health · Cognitive Screening · MIT AI Hackathon Winner
      </p>
      <Tags items={['Voice Biomarkers','Acoustic AI',"Women's Health",'Longitudinal Tracking','Mobile UX']} />

      <img
        src="/ola-1.jpg"
        alt="Ola! — voice AI app for early dementia detection"
        className="img-full"
        loading="lazy"
      />

      <Blk label="The problem">
        <p>
          70% of Alzheimer's patients are women, yet cognitive screening is almost universally
          designed for elderly patients in clinical settings. Symptoms in middle-aged women are
          dismissed as stress or menopause. Formal diagnosis comes 10 to 15 years after the
          first signs appear. There is no product designed for the decade before the diagnosis.
        </p>
      </Blk>

      <Stats items={[
        ["70%","of Alzheimer's patients are women"],
        ["10-15yr","before formal diagnosis"],
        ["1st place","MIT AI Hackathon, 1,000+ teams"],
        ["Passive","no clinic, no wearable needed"],
      ]} />

      <Insight text="The best health screening tool is one that doesn't feel like a health screening tool. It just works in the background of a life that's already full." />

      <Blk label="My approach">
        <p>
          The core product decision was to make detection entirely passive. Ola! runs in the
          background of normal phone calls, extracting six speech biomarkers correlated with
          early cognitive change: speech rate, pitch variation, pause frequency, filler word
          density, vocabulary richness, and tonal consistency.
        </p>
        <p>
          The critical design constraint was that this user is not a patient yet. She is a
          capable, busy professional who is worried but not alarmed. Every interface decision
          reinforced agency rather than anxiety. Scores are framed as{' '}
          <strong>trends, not diagnoses.</strong> The weekly report appears and disappears.
          The product deliberately does not encourage daily engagement — that would create
          exactly the anxiety spiral we were designing against.
        </p>
        <p>
          Onboarding was reduced to one permission screen. The app explains what it listens
          for, then disappears. The value is in the periodic report, not the app itself.
        </p>
      </Blk>

      <img
        src="/ola-6.jpg"
        alt="Ola! app — cognitive health summary screen"
        className="img-full"
        loading="lazy"
      />

      <ProjNav next="CerebroCare" nextHref="/projects/cerebrocare" />
    </div>
  )
}
