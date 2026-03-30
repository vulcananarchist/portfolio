import PageWrap from '@/components/PageWrap'
import { ImgFull, Img2, Insight, Stats, Tags, ProjNav, Blk } from '@/components/ProjectParts'

export const metadata = { title: 'XPend — VK' }

export default function Xpend() {
  return (
    <PageWrap>
      <h1 className="text-[1.3rem] font-medium leading-[1.25] mb-[0.3rem]">XPend</h1>
      <p className="text-[0.7rem] text-acc uppercase tracking-[0.1em] mb-[1.2rem] opacity-75">
        Fintech · AI · Product Management · Harvard
      </p>
      <Tags items={['Behavioural Design','Conversational AI','Mobile UX','Consumer Psychology','A/B Testing']} />

      {/* Leading with the emotional insight slide — the strongest image in the deck */}
      <ImgFull path="8d4553ab-79a3-4785-b25c-9105d99c1116/These+unfulfiling+purchases+are+followed+by+feelings+of+guilt%2C+shame+and+regret.png" />

      <Blk label="The problem">
        <p>
          Most personal finance apps assume people overspend because they lack information.
          They don't. Impulsive spending is emotional — triggered by stress, boredom, and
          social cues — and happens in moments when no one is consulting a budget dashboard.
        </p>
      </Blk>

      <Stats items={[
        ["Emotional","trigger, not info gap"],
        ["Conversational","AI, non-judgmental"],
        ["Harvard","product studio"],
        ["Behavioural","point-of-spend nudge"],
      ]} />

      <Insight text="A finance app that shows you where your money went is a diary. One that changes how you spend it in the moment is a product." />

      <Img2
        a="9ed2225d-27a7-4be3-84ea-afc2626405b4/Copy+of+studio-presentation.pdf+%282%29.png"
        b="e58ed45d-a76e-4123-b7e3-6ba1edada8a0/Copy+of+studio-presentation.pdf+%283%29.png"
      />

      <Blk label="Design decisions">
        <p>
          No charts on the home screen. The primary surface is a conversational input — because
          people engage with finances more honestly in dialogue than in front of graphs. The
          entire interface was designed for the emotional state users are actually in when they
          overspend.
        </p>
      </Blk>

      <ImgFull path="bb7afe85-1f6e-4d35-b009-55b90a839247/X+%281%29.png" />

      <ProjNav prev="Unretirement" prevHref="/projects/unretirement" next="StoreSmart" nextHref="/projects/storesmart" />
    </PageWrap>
  )
}
