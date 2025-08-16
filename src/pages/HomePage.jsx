import { NavLink } from "react-router-dom";
import ari from "../assets/team/ari.svg";
import jordan from "../assets/team/jordan.svg";
import samira from "../assets/team/samira.svg";
import diego from "../assets/team/diego.svg";
import nora from "../assets/team/nora.svg";
import you from "../assets/team/you.svg";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div>
          <h1>
            <span className="brand-gradient">KNOW-I:</span> Machine Learning for Builders
          </h1>
          <p>
            A Gen‑Z ML club hosting hands‑on sessions, hack nights, and talks by real practitioners. Ship projects, learn fast, and vibe with people who build.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#join">Join the waitlist</a>
            <a className="btn" href="#discord">Discord</a>
          </div>
        </div>
        <div>
          <div className="k-cards">
            <div className="k-card">
              <h3>Workshops</h3>
              <p>Weekly deep-dives: vision, LLMs, agents, evals, infra.</p>
            </div>
            <div className="k-card">
              <h3>Projects</h3>
              <p>Team up and ship showcases. Less theory, more demos.</p>
            </div>
            <div className="k-card">
              <h3>Community</h3>
              <p>Find cofounders, research buddies, and late‑night builders.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-title">What we do</div>
      <div className="grid-3">
        <div className="k-card">
          <h3>Speaker Series</h3>
          <p>Hear from folks shipping SOTA into production.</p>
        </div>
        <div className="k-card">
          <h3>Rapid Demos</h3>
          <p>5‑minute lightning demos. No slides, only builds.</p>
        </div>
        <div className="k-card">
          <h3>Open Source</h3>
          <p>Contribute to club repos and get mentored code reviews.</p>
        </div>
      </div>

      <div className="section-title">Upcoming events</div>
      <div className="grid-2">
        <div className="event-card">
          <div className="thumb">
            <img src="/2.png" alt="Kickoff: Build an Agent in 90 Minutes" />
          </div>
          <h4>Kickoff: Build an Agent in 90 Minutes</h4>
          <p className="muted">Sep 14, 7pm</p>
          <p style={{ marginTop: 8 }}>Hands‑on session. Bring a laptop. We ship together.</p>
          <NavLink to="/events/kickoff-build-an-agent-in-90-minutes" className="btn" style={{ marginTop: 12, display: "inline-block" }}>Learn more</NavLink>
        </div>
        <div className="event-card">
          <div className="thumb">
            <img src="/logo-kowi.png" alt="Vision Night: Diffusion to Video" />
          </div>
          <h4>Vision Night: Diffusion to Video</h4>
          <p className="muted">Sep 28, 6pm</p>
          <p style={{ marginTop: 8 }}>Short talks + demo hour. Submit your demo!</p>
          <NavLink to="/events/vision-night-diffusion-to-video" className="btn" style={{ marginTop: 12, display: "inline-block" }}>Learn more</NavLink>
        </div>
      </div>
      <div className="cta-row" style={{ marginTop: 12 }}>
        <NavLink to="/events" className="btn">See all events</NavLink>
      </div>

      <div className="section-title">Team</div>
      <div className="team-scroller" aria-label="Leadership team">
        {[
          { name: "Ari Mehta", role: "President · Research Lead", img: ari },
          { name: "Jordan Lee", role: "Projects Lead", img: jordan },
          { name: "Samira Gupta", role: "Community & Ops", img: samira },
          { name: "Diego Santos", role: "Infra & MLE", img: diego },
          { name: "Nora Park", role: "Design & Content", img: nora },
          { name: "You?", role: "Core Team · Apply", img: you },
        ].map((m, idx) => (
          <div key={`${m.name}-${idx}`} className="home-team-card polaroid">
            <div className="photo">
              <img src={m.img} alt={m.name} />
            </div>
            <div className="caption">
              <h4>{m.name}</h4>
              <p className="sub">{m.role}</p>
            </div>
          </div>
        ))}

        <NavLink to="/team" className="see-all-card polaroid" aria-label="See all team members">
          <div>
            <div className="title">See all →</div>
            <div className="sub">Meet the full crew!</div>
          </div>
        </NavLink>
      </div>
      <div className="team-scroll-indicator" aria-hidden>
        <span className="arrow">→</span>
        <span className="arrow">→</span>
        <span className="arrow">→</span>
      </div>
    </div>
  );
}


