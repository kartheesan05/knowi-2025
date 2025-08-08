import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import ari from './assets/team/ari.svg'
import jordan from './assets/team/jordan.svg'
import samira from './assets/team/samira.svg'
import diego from './assets/team/diego.svg'
import nora from './assets/team/nora.svg'
import you from './assets/team/you.svg'
import './index.css'

function LeftNav() {
  return (
    <nav className="floating-nav">
      <div>
        <div className="brand">KNOW-I</div>
        <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/team" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          Team
        </NavLink>
        <NavLink to="/events" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          Events
        </NavLink>
        <a className="nav-item" href="#projects">Projects</a>
        <a className="nav-item" href="#resources">Resources</a>
      </div>
      <div className="bottom">
        <div className="badge">Social</div>
        <a className="nav-item" href="https://discord.gg" target="_blank" rel="noreferrer">Discord</a>
        <a className="nav-item" href="https://x.com" target="_blank" rel="noreferrer">X/Twitter</a>
        <a className="nav-item" href="mailto:hi@knowi.club">Contact</a>
      </div>
    </nav>
  )
}

function Shell() {
  return (
    <div className="page-shell">
      <LeftNav />
      <div className="content-wrap">
        <Outlet />
      </div>
    </div>
  )
}

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
    </div>
  )
}

function TeamPage() {
  const members = [
    { name: 'Ari Mehta', role: 'President · Research Lead', img: ari },
    { name: 'Jordan Lee', role: 'Projects Lead', img: jordan },
    { name: 'Samira Gupta', role: 'Community & Ops', img: samira },
    { name: 'Diego Santos', role: 'Infra & MLE', img: diego },
    { name: 'Nora Park', role: 'Design & Content', img: nora },
    { name: 'You?', role: 'Core Team · Apply', img: you },
  ]
  return (
    <div>
      <h1 style={{ margin: 0 }}>Team</h1>
      <p className="muted">The crew behind KNOW‑I.</p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {members.map((m) => (
          <div key={m.name} className="team-card polaroid">
            <div className="photo">
              <img src={m.img} alt={m.name} />
            </div>
            <div className="caption">
              <h4>{m.name}</h4>
              <p className="sub">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EventsPage() {
  const events = [
    {
      title: 'Kickoff: Build an Agent in 90 Minutes',
      date: 'Sep 14, 7pm',
      desc: 'Hands‑on session. Bring a laptop. We ship together.',
    },
    {
      title: 'Vision Night: Diffusion to Video',
      date: 'Sep 28, 6pm',
      desc: 'Short talks + demo hour. Submit your demo! ',
    },
    {
      title: 'Infra 101: Serving, Caching, Evals',
      date: 'Oct 5, 6pm',
      desc: 'From Colab to prod. What changes and why.',
    },
  ]
  return (
    <div>
      <h1 style={{ margin: 0 }}>Events</h1>
      <p className="muted">Upcoming sessions and nights.</p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {events.map((e) => (
          <div key={e.title} className="event-card">
            <h4>{e.title}</h4>
            <p className="muted">{e.date}</p>
            <p style={{ marginTop: 8 }}>{e.desc}</p>
            <a className="btn" style={{ marginTop: 12, display: 'inline-block' }} href="#rsvp">
              RSVP
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Route>
    </Routes>
  )
}
