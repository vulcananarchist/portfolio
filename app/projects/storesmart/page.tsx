import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'StoreSmart - VK' }

export default function StoreSmart() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">StoreSmart</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        AgTech · Predictive ML · IoT · India · Indian Patent · 2022
      </p>
      <Tags items={['IoT Systems','Predictive ML','Appropriate Tech','Field Research','Patented IP']} />

      <ImgFull path="53301ede-6249-40a7-9740-34d29100d3cb/AdobeStock_647868657.jpeg" />

      <Blk label="The problem">
        <p>
          India loses 30 to 40% of its produce to post-harvest storage failures every year.
          The cold storage infrastructure exists. What doesn't exist is intelligence: farmers
          and cooperative managers have no early warning before spoilage begins, and by the
          time it's visible it is already too late.
        </p>
      </Blk>

      <Stats items={[
        ["30-40%","of Indian produce lost post-harvest"],
        ["24-48hr","spoilage prediction window"],
        ["Indian Patent","Docket No. 2216901-NS"],
        ["1st place","Rajasthan Hackathon, 15,000+ teams"],
      ]} />

      <Insight text="The most impactful technology in agriculture isn't what replaces existing infrastructure. It's what makes existing infrastructure finally work." />

      <Blk label="My approach">
        <p>
          The product was designed entirely around the conditions of rural Karnataka: intermittent
          connectivity, limited smartphone literacy, cooperative managers responsible for dozens
          of farmers simultaneously. Every technical decision had to survive that context.
        </p>
        <p>
          The alert system was <strong>SMS-first</strong> - not because it was easier to build,
          but because it was the only channel guaranteed to reach the user. The dashboard was
          built for weekly review cycles, not hourly monitoring. Sensor hardware was designed
          for installation by non-technical staff in under 20 minutes, because a system that
          requires an engineer to set up will never scale in this market.
        </p>
        <p>
          The 24 to 48 hour prediction window was the core product bet: early enough to act,
          specific enough to be useful. A vaguer warning further out would be ignored.
        </p>
      </Blk>

      <ImgFull path="60f44a1b-9ab0-48b9-8b75-1c70ee0d0e5d/Assets.png" />

      <ProjNav prev="XPend" prevHref="/projects/xpend" next="Aid Ally" nextHref="/projects/aid-ally" />
    </div>
  )
}
