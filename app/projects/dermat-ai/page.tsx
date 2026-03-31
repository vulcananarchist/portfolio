import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Equiderm — VK' }

export default function Equiderm() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Equiderm</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[0.2rem] opacity-75">
        Harvard MDE Thesis · Clinical AI · Health Equity · 2024
      </p>
      <p className="text-[0.7rem] text-muted mb-[1.2rem]">
        Where diverse skin meets intelligent care.
      </p>
      <Tags items={['Agentic AI','Clinical Decision Support','Health Equity','SMART + FHIR','Computer Vision']} />

      <img src="/eq-hero.jpg" alt="Equiderm — AI clinical decision support for skin of colour" className="img-full" loading="lazy" />

      <Blk label="The problem">
        <p>
          Patients of colour experience an average diagnostic delay of 4.8 years compared
          to 3 years for white patients. They are 2.5x more likely to be misdiagnosed with
          common skin conditions. Half of physicians report they were not trained to spot
          cancer on Black skin. The foundation of dermatology education and its training
          data has been built on white, fair-skinned, male bodies.
        </p>
        <p>
          This is not a gap at the margins. Melanoma's 5-year mortality rate for patients
          of colour is 90%, compared to 66% for white patients. The disparity is not
          biological. It is systemic.
        </p>
      </Blk>

      <Stats items={[
        ["4.8yr","avg diagnostic delay for patients of colour"],
        ["2.5x","more likely to be misdiagnosed"],
        ["97.3%","eczema accuracy across all skin tones"],
        ["83%","melanoma accuracy, actively refining"],
      ]} />

      <Insight text="The most dangerous AI in healthcare isn't the one that's wrong. It's the one that's confidently wrong for patients who look different from the training data." />

      <img src="/eq-clinical.jpg" alt="Equiderm in clinical use — doctor and patient with app" className="img-full" loading="lazy" />

      <Blk label="My approach">
        <p>
          I began with 20 patient interviews in Lemuel Shattuck Hospital waiting rooms
          and 15 clinician interviews across Mass General Brigham and Shattuck, including
          Dr. Sotonye Imadojemu, Director of the Skin of Color Clinic at Harvard. The
          research revealed two parallel failures: patients feel unseen and dismissed,
          while clinicians lack confidence diagnosing unfamiliar presentations and are
          afraid to admit uncertainty.
        </p>
        <p>
          The product decision that followed from that research: <strong>build for the
          clinician, not the patient.</strong> Doctors do not want another platform.
          They need an embedded tool that fits their existing workflow and gives them a
          signal they can trust. Equiderm integrates via SMART and FHIR protocol directly
          into the EHR, so it requires no context switch.
        </p>
        <p>
          The CV model was trained on diverse datasets covering eczema (97.3% accuracy
          across all skin tones), psoriasis (92%), and melanoma (83%, in active refinement
          with the Stanford DDI dataset team). Critically, the system surfaces{' '}
          <strong>diagnostic confidence scores alongside predictions</strong> — rather than
          presenting uncertain outputs with false authority. When confidence is lower for
          a given skin tone, it says so. That was a deliberate product decision, not a
          technical limitation.
        </p>
      </Blk>

      <img src="/eq-solution.jpg" alt="Equiderm — Agentic AI clinical decision support tool" className="img-full" loading="lazy" />

      <Blk label="App walkthrough">
        <p>A full walkthrough of the Equiderm clinical interface.</p>
      </Blk>

      <div className="my-[1.4rem] rounded-sm overflow-hidden border border-white/[0.08]" style={{ aspectRatio: '16/9' }}>
        <iframe
          src="https://www.youtube.com/embed/0-vp8iV1_8I"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 'none' }}
        />
      </div>

      <ProjNav prev="CerebroCare" prevHref="/projects/cerebrocare" next="Unretirement" nextHref="/projects/unretirement" />
    </div>
  )
}
