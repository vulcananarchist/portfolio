import PageWrap from '@/components/PageWrap'
import { ImgFull, Img2, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Autonomous Drones — VK' }

export default function Drones() {
  return (
    <PageWrap>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Autonomous Drones</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        ML · IoT · Autonomous Systems · DRDO
      </p>
      <Tags items={['Computer Vision','Sensor Fusion','Embedded ML','Real-time Inference','Defence Research']} />

      <ImgFull path="f61e6308-91eb-4b7a-a59b-fb3d5633c2f6/Northwestern-EDI+%281%29.png" />

      <Blk label="The problem">
        <p>
          GPS fails in tunnels, dense urban environments, and contested zones — exactly where
          autonomous navigation matters most. Built at DRDO's Center for AI and Robotics, this
          system achieves reliable navigation with no external positioning signal.
        </p>
      </Blk>

      <Stats items={[
        ["98.2%","accuracy, GPS-denied"],
        ["87%","reliability improvement"],
        ["On-device","all inference"],
        ["DRDO","India's premier defence lab"],
      ]} />

      <Insight text="Designing for constraint is designing for trust — a system that degrades gracefully in the hardest conditions is more valuable than one that performs perfectly in ideal ones." />

      <Img2
        a="42fd3014-5b93-48f5-b4c2-66c74607dc5c/12.png"
        b="ce9edb21-abdc-466a-8876-51b39efa039d/13.png"
      />

      <Blk label="What I built">
        <p>
          Combined computer vision, inertial sensing, and on-device ML inference to build a live
          environment map and plan paths in real time, all within the power and compute constraints
          of embedded hardware. Every design decision was governed by one constraint: the system
          must work when nothing else does.
        </p>
      </Blk>

      <ImgFull path="8989375c-0e95-4834-82d2-9e1dedd764c4/15.png" />

      <ProjNav prev="Dermat-AI" prevHref="/projects/dermat-ai" next="Unretirement" nextHref="/projects/unretirement" />
    </PageWrap>
  )
}
