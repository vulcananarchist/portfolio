import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Aid Ally - VK' }

export default function AidAlly() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Aid Ally</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Crisis Tech · AR · Humanitarian Design · Harvard x Field Ready
      </p>
      <Tags items={['AR / Unity','Inclusive Design','Offline-first','3D Printing','Humanitarian UX']} />

      <ImgFull path="9209937f-f0b0-43b6-b5a8-579359c12c50/Intro+%281%29.jpg" />

      <Blk label="The problem">
        <p>
          After a disaster, medical supply chains collapse within hours. Orthopaedic devices -
          crutches, splints, mobility aids - become unavailable for weeks, exactly when trauma
          survivors need them most. The manufacturing problem is solvable with 3D printing.
          The harder problem is that the people assembling the devices have no training,
          no internet access, and may not be literate.
        </p>
      </Blk>

      <Stats items={[
        ["48%","faster deployment vs traditional aid"],
        ["75%","cost reduction via local manufacturing"],
        ["Offline","AR app, zero connectivity required"],
        ["Field Ready","NGO partner, global deployments"],
      ]} />

      <Insight text="In a disaster zone, the best interface is one that works when the person using it is scared, exhausted, and offline." />

      <Blk label="My approach">
        <p>
          The design had three non-negotiables before any feature discussion: no assumed literacy,
          no assumed connectivity, no assumed prior training. Every decision that followed
          was tested against all three.
        </p>
        <p>
          The AR overlay used spatial anchoring rather than text labels - a component highlights
          when it is the active step, not when a label describes it. Assembly steps were
          sequenced to be <strong>reversible</strong>: a wrong move could be undone without
          starting over, because in a field context, restarting from scratch is often not possible.
          The crutch design itself was modular, so a partially assembled device was still
          functional - partial help in a disaster is categorically better than no help.
        </p>
      </Blk>

      <ProjNav prev="StoreSmart" prevHref="/projects/storesmart" />
    </div>
  )
}
