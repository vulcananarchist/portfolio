import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Aid Ally VK' }

export default function AidAlly() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Aid Ally</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Crisis Tech · AR · Product Strategy · Harvard x Field Ready
      </p>
      <Tags items={['AR / Unity','Inclusive Design','Offline-first','3D Printing','Humanitarian UX']} />

      <ImgFull path="9209937f-f0b0-43b6-b5a8-579359c12c50/Intro+%281%29.jpg" />

      <Blk label="The problem">
        <p>
          After a disaster, medical supply chains collapse. The orthopaedic devices stroke and
          trauma survivors need become unavailable for weeks. Aid Ally makes the device
          manufacturable on-site and the assembly instructions usable without literacy,
          internet, or medical training.
        </p>
      </Blk>

      <Stats items={[
        ["48%","faster deployment"],
        ["75%","cost reduction"],
        ["Offline","AR, no connectivity needed"],
        ["Team of 4","Design, Biomed, Product, AR"],
      ]} />

      <Insight text="In a disaster zone, the best interface is one that works when the person using it is scared, exhausted, and offline." />

      <Blk label="Design constraints">
        <p>
          Three non-negotiables: <strong>no assumed literacy, no assumed connectivity,
          no assumed prior training.</strong> AR overlay used spatial anchoring rather than
          text labels. Assembly steps were sequenced to be reversible. The crutch design
          was modular so partial assemblies were still usable.
        </p>
      </Blk>

      <ProjNav prev="StoreSmart" prevHref="/projects/storesmart" />
    </div>
  )
}
