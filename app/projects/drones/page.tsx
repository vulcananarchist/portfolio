import { ImgFull, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'Autonomous Drones — VK' }

export default function Drones() {
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">Autonomous Drones</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        ML · Embedded Systems · Autonomous Navigation · DRDO
      </p>
      <Tags items={['Computer Vision','Sensor Fusion','Embedded ML','Real-time Inference','Defence Research']} />

      <ImgFull path="f61e6308-91eb-4b7a-a59b-fb3d5633c2f6/Northwestern-EDI+%281%29.png" />

      <Blk label="The problem">
        <p>
          GPS fails in tunnels, dense urban environments, and electronic warfare zones — exactly
          where autonomous navigation matters most. India's defence systems needed drones that
          could operate without any external positioning signal, in real time, on embedded hardware
          with strict power constraints.
        </p>
      </Blk>

      <Stats items={[
        ["98.2%","navigation accuracy, GPS-denied"],
        ["87%","improvement in production reliability"],
        ["On-device","all inference, no cloud dependency"],
        ["DRDO","India's premier defence research lab"],
      ]} />

      <Insight text="Designing for constraint is designing for trust. A system that degrades gracefully under the hardest conditions is worth more than one that performs perfectly in ideal ones." />

      <Blk label="My approach">
        <p>
          The system combined computer vision, inertial sensing, and on-device ML inference to
          build a live environment map and plan paths in real time. The architectural principle
          was <strong>graceful degradation</strong>: every subsystem was designed with a defined
          failure mode that left the drone in a safer state rather than an unpredictable one.
        </p>
        <p>
          Every design decision was governed by the embedded constraint. Model architecture choices
          were made based on inference latency and power draw, not just accuracy benchmarks.
          A model that is 2% more accurate but misses its latency window is a worse system.
          The 98.2% figure was achieved within those real-world constraints, not in a controlled lab.
        </p>
      </Blk>

      <ImgFull path="8989375c-0e95-4834-82d2-9e1dedd764c4/15.png" />

      <ProjNav prev="Dermat-AI" prevHref="/projects/dermat-ai" next="Unretirement" nextHref="/projects/unretirement" />
    </div>
  )
}
