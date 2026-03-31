import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'XPend — VK' }

export default function Xpend() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">XPend</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Fintech · Behavioural AI · Product Design · Harvard
      </p>
      <Tags items={['Behavioural Design','Conversational AI','Mobile UX','Consumer Psychology','Point-of-spend']} />

      <ImgFull path="8d4553ab-79a3-4785-b25c-9105d99c1116/These+unfulfiling+purchases+are+followed+by+feelings+of+guilt%2C+shame+and+regret.png" />

      <Blk label="The problem">
        <p>
          Most personal finance apps assume people overspend because they lack information.
          The research consistently shows otherwise. Impulsive spending is emotional — triggered
          by stress, boredom, social comparison — and happens in moments when no one is
          opening a budgeting app. Showing someone where their money went, after the fact,
          does not change the decision that was already made.
        </p>
      </Blk>

      <Stats items={[
        ["Emotional","the actual trigger, not information gaps"],
        ["Point-of-spend","intervention, not retrospective"],
        ["Conversational","primary interface, not dashboards"],
        ["Harvard","product management studio"],
      ]} />

      <Insight text="A finance app that shows you where your money went is a diary. One that changes how you spend it in the moment is a product." />

      <Blk label="My approach">
        <p>
          The product decision that defined everything: <strong>no charts on the home screen.</strong>{' '}
          Every other finance app leads with a graph of past behaviour. XPend leads with a
          conversational input, because people engage with their money more honestly in dialogue
          than in front of data.
        </p>
        <p>
          The design was built backwards from the emotional state users are actually in when
          they overspend — not the state they're in when they open a budgeting app with good
          intentions. That meant the interface had to be frictionless, non-judgmental, and
          capable of a single useful interaction in under 30 seconds. Every feature that
          required more than that was cut.
        </p>
      </Blk>

      <ImgFull path="bb7afe85-1f6e-4d35-b009-55b90a839247/X+%281%29.png" />

      <ProjNav prev="Unretirement" prevHref="/projects/unretirement" next="StoreSmart" nextHref="/projects/storesmart" />
    </div>
  )
}
