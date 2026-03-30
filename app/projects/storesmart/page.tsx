import PageWrap from '@/components/PageWrap'
import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'StoreSmart — VK' }

export default function StoreSmart() {
  return (
    <PageWrap>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">StoreSmart</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        AgTech · ML · IoT · Karnataka, India · Indian Patent
      </p>
      <Tags items={['IoT Systems','Predictive ML','Appropriate Tech','Field Research','Patented IP']} />

      <ImgFull path="53301ede-6249-40a7-9740-34d29100d3cb/AdobeStock_647868657.jpeg" />

      <Blk label="The problem">
        <p>
          India loses 30 to 40% of produce to post-harvest storage failures every year — not
          because cold storage doesn't exist, but because it has no intelligence. Farmers have
          no early warning before spoilage begins.
        </p>
      </Blk>

      <Stats items={[
        ["30-40%","of Indian produce lost post-harvest"],
        ["24-48hr","spoilage prediction window"],
        ["Indian Patent","Docket No. 2216901-NS"],
        ["15,000+","teams, Rajasthan Hackathon"],
      ]} />

      <Insight text="The most impactful technology in agriculture isn't what replaces existing infrastructure — it's what makes existing infrastructure work." />

      <ImgFull path="bdf0a924-35bb-4710-a214-39c301de5c59/Problem_Post+harvest+losses+in+storage+facilities.png" />

      <Blk label="Design for the real world">
        <p>
          Intermittent connectivity. Limited smartphone literacy. Cooperative managers
          juggling dozens of farmers. The alert system was <strong>SMS-first</strong>. The
          dashboard was built for weekly review, not hourly. Sensor hardware installs in
          under 20 minutes by non-technical staff.
        </p>
      </Blk>

      <ImgFull path="60f44a1b-9ab0-48b9-8b75-1c70ee0d0e5d/Assets.png" />

      <ProjNav prev="XPend" prevHref="/projects/xpend" next="Aid Ally" nextHref="/projects/aid-ally" />
    </PageWrap>
  )
}
