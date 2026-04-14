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
        Built with AI
      </p>
      <Tags items={['Agentic AI','SDOH','Uber Health','HIPAA Architecture','Claude API']} />

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

      <Blk label="How it works">
        <p>
          The data model is built around real SDOH signal types: booking lead time trend,
          cancellation frequency, reschedule patterns, and no-show history. A Claude-powered
          cascade simulator quantifies the downstream cost of inaction - missed dialysis
          sessions convert directly to hospitalisations, which convert directly to cost.
        </p>
        <p>
          All AI interventions are constrained to what Uber Health can actually do:{' '}
          <strong>ride pre-booking, fare waivers, SMS nudges, recurring schedules.</strong>{' '}
          Every AI-generated recommendation requires human confirmation before execution.
          A live audit trail surfaces who acted on what, and when.
        </p>
      </Blk>

      <Blk label="Three views">
        <p>
          <strong>Patient Journey Map</strong> - individual-level AI arrival probability,
          cascade simulation showing downstream clinical and cost impact, and intervention
          recommendations within Uber Health toolkit.
        </p>
        <p>
          <strong>Care Desert Intelligence</strong> - geographic population-level failure
          pattern analysis identifying where transportation barriers are systematically
          driving care continuity failure.
        </p>
        <p>
          <strong>Health Passport API Explorer</strong> - demonstrates the SDOH data product
          and how transportation behavioural signals can be structured for clinical consumption.
          No real PHI anywhere in the system.
        </p>
      </Blk>

      <div className="pt-5 border-t border-white/[0.08] mt-10">
        <Link href="/projects" className="text-[0.8rem] text-muted no-underline hover:text-acc transition-colors">
          Back to projects
        </Link>
      </div>
    </div>
  )
}
