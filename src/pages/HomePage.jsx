import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

function HomePage() {
  return (
    <div>
      <section className="hero">
        <div>
          <h1>KNOW-I: Machine Learning for Builders</h1>
          <p>
            A Gen‑Z ML club hosting hands‑on sessions, hack nights, and talks by real
            practitioners. Ship projects, learn fast, and vibe with people who build.
          </p>
          <div className="cta-row">
            <Button href="#join" className="primary">Join the waitlist</Button>
            <Button href="#discord">Discord</Button>
          </div>
        </div>
        <div>
          <div className="k-cards">
            <Card>
              <h3>Workshops</h3>
              <p>Weekly deep-dives: vision, LLMs, agents, evals, infra.</p>
            </Card>
            <Card>
              <h3>Projects</h3>
              <p>Team up and ship showcases. Less theory, more demos.</p>
            </Card>
            <Card>
              <h3>Community</h3>
              <p>Find cofounders, research buddies, and late‑night builders.</p>
            </Card>
          </div>
        </div>
      </section>

      <div className="section-title">What we do</div>
      <div className="grid-3">
        <Card>
          <h3>Speaker Series</h3>
          <p>Hear from folks shipping SOTA into production.</p>
        </Card>
        <Card>
          <h3>Rapid Demos</h3>
          <p>5‑minute lightning demos. No slides, only builds.</p>
        </Card>
        <Card>
          <h3>Open Source</h3>
          <p>Contribute to club repos and get mentored code reviews.</p>
        </Card>
      </div>
    </div>
  )
}

export default HomePage
