import { Insight, Stats, Tags, Blk } from '@/components/ProjectParts'
import Link from 'next/link'

export const metadata = { title: 'Continuum — VK' }

export default function Continuum() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Continuum</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[0.2rem] opacity-75">
        Care Orchestration Intelligence · Uber Health · 2025
      </p>
      <p className="text-[0.7rem] text-muted mb-[1.2rem]">
        Built with AI -{' '}
        <a href="https://continuum-one-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-acc hover:opacity-75 transition-opacity">
          continuum-one-tau.vercel.app ↗
        </a>
      </p>
      <Tags items={['Agentic AI','SDOH','Uber Health','HIPAA Architecture','Claude API']} />

      <img src="/continuum-hero.jpg" alt="Continuum — patient journey map with cascade simulation" className="img-full" loading="lazy" />

      <Blk label="The problem">
        <p>
          Missed appointments in complex-care populations - dialysis, oncology, post-discharge -
          are not random. They are preceded by measurable behavioural degradation in how patients
          book, cancel, and reschedule rides. A dialysis patient whose booking lead time is
          collapsing week over week is sending a clinical signal. The healthcare system has no
          tooling to act on it before the miss happens.
        </p>
      </Blk>

      <Stats items={[
        ["SDOH","transportation as clinical signal"],
        ["3 views","Journey Map, Care Desert, Health Passport"],
        ["HIPAA","anonymised IDs, human-in-loop gates"],
        ["Live","Claude API via serverless proxy"],
      ]} />

      <Insight text="Transportation is not a logistics layer. It is a social determinant. The question was what a system looks like that closes the loop between behavioural data and care team action." />

      <img src="/continuum-cascade.jpg" alt="Continuum — Claude-powered cascade simulation showing downstream clinical risk" className="img-full" loading="lazy" />

      <Blk label="My approach">
        <p>
          The data model is built around real SDOH signal types: booking lead time trend,
          cancellation frequency, reschedule patterns, and no-show history. A Claude-powered
          cascade simulator quantifies the downstream cost of inaction - missed dialysis
          sessions convert to hospitalisations, which convert to cost. The screenshot above
          shows M.R., a dialysis patient at 82 CRITICAL risk: if she misses her Wednesday
          session, the model projects a 45% readmission risk within 14 days at 9k estimated
          system cost.
        </p>
        <p>
          All AI interventions are constrained to what Uber Health can actually do:{' '}
          <strong>ride pre-booking, fare waivers, SMS nudges, recurring schedules.</strong>{' '}
          Every recommendation requires human confirmation before execution. The audit trail
          surfaces who acted on what, and when.
        </p>
      </Blk>

      <img src="/continuum-journey.jpg" alt="Continuum — T.K. oncology patient journey with 54% arrival probability" className="img-full" loading="lazy" />

      <Blk label="Three views">
        <p>
          <strong>Patient Journey Map</strong> - individual-level AI arrival probability,
          care timeline, signal history, cascade simulation, and intervention console.
          T.K. above is an oncology patient at 54% arrival probability after two missed
          infusions in 30 days - caregiver confirmation rate collapsed from 90% to 25%.
        </p>
        <p>
          <strong>Care Desert Intelligence</strong> - geographic population-level failure
          pattern analysis identifying where transportation barriers systematically drive
          care continuity failure.
        </p>
        <p>
          <strong>Health Passport API Explorer</strong> - demonstrates the SDOH data product
          and how transportation behavioural signals can be structured for clinical consumption.
          No real PHI anywhere in the system.
        </p>
      </Blk>

      <div className="pt-5 border-t border-white/[0.08] mt-10">
        <Link href="/projects" className="text-[0.8rem] text-muted no-underline hover:text-acc transition-colors">
          ← All projects
        </Link>
      </div>
    </div>
  )
}
