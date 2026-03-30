import PageWrap from '@/components/PageWrap'

export const metadata = { title: 'Experience VK' }

export default function Experience() {
  return (
    <PageWrap>
      <section className="mb-[2.8rem]">
        <h2 className="section-label">Experience</h2>
        <div>
          <div className="tl-item">
            <div>
              <div className="tl-org">Stealth Healthcare Startup</div>
              <div className="tl-role">Advisor</div>
              <div className="tl-desc">Advising on product strategy and AI integration for an early-stage healthcare company.</div>
            </div>
            <span className="tl-tag">Advisory</span>
          </div>
          <div className="tl-item">
            <div>
              <div className="tl-org">Harvard Business School Foundry · Boston, MA</div>
              <div className="tl-role">AI Product Manager</div>
              <div className="tl-desc">
                Shipped 3 agentic AI co-creators, cutting Pitch Simulator drop-off from 77% to 10%
                through transcript analysis, prompt iteration, and UX redesign.
              </div>
            </div>
            <span className="tl-tag">Full-time</span>
          </div>
          <div className="tl-item">
            <div>
              <div className="tl-org">Raved Technologies · Bangalore, India</div>
              <div className="tl-role">Founder &amp; Product Lead</div>
              <div className="tl-desc">
                Founded and led a dermatology AI startup from zero to acquisition by Oliva Clinics,
                building an 81%-accurate CV model and shipping MVP in 4 months.
              </div>
            </div>
            <span className="tl-tag">Founder</span>
          </div>
          <div className="tl-item">
            <div>
              <div className="tl-org">DRDO · Bangalore, India</div>
              <div className="tl-role">AI Research Engineer</div>
              <div className="tl-desc">
                Built autonomous drone perception systems achieving 98.2% navigation accuracy
                in GPS-denied environments for India's defence research agency.
              </div>
            </div>
            <span className="tl-tag">Research</span>
          </div>
        </div>
      </section>

      <section className="mb-[2.8rem]">
        <h2 className="section-label">Education</h2>
        <div>
          <div className="tl-item">
            <div>
              <div className="tl-org">Harvard University · Boston, MA</div>
              <div className="tl-role">Master's in Design Engineering GPA 3.9/4</div>
              <div className="tl-desc">
                Joint degree: SEAS + GSD. Focus on HCI, Natural Language Systems, User-Centered AI Design.
                Tech Panel Lead, HarvardxDesign Conference.
              </div>
            </div>
          </div>
          <div className="tl-item">
            <div>
              <div className="tl-org">M.S. Ramaiah Institute of Technology · India</div>
              <div className="tl-role">B.E. Electronics &amp; Instrumentation GPA 8.28/10</div>
              <div className="tl-desc">Focus: Robotics &amp; AI. Best Capstone Project Award.</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-label">Recognition</h2>
        <div>
          <div className="award-item">
            <span className="text-acc flex-shrink-0 mt-[0.15rem]">◆</span>
            <span>Winner, MIT AI Hackathon AI Dementia Detection tool (1,000+ teams)</span>
          </div>
          <div className="award-item">
            <span className="text-acc flex-shrink-0 mt-[0.15rem]">◆</span>
            <span>Inventor &amp; Applicant Indian Patent: Machine Learning-Based Produce Preservation System (Docket No. 2216901-NS)</span>
          </div>
          <div className="award-item">
            <span className="text-acc flex-shrink-0 mt-[0.15rem]">◆</span>
            <span>Winner, Rajasthan Hackathon Computer Vision Pest Detection in Stored Grains (15,000+ teams)</span>
          </div>
        </div>
      </section>
    </PageWrap>
  )
}
