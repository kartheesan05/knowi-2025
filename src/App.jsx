import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import ari from './assets/team/ari.svg'
import jordan from './assets/team/jordan.svg'
import samira from './assets/team/samira.svg'
import diego from './assets/team/diego.svg'
import nora from './assets/team/nora.svg'
import you from './assets/team/you.svg'
import './index.css'

// Reusable nav config
const PRIMARY_NAV_ITEMS = [
  { type: 'link', to: '/', label: 'Home', icon: '🏠', end: true },
  { type: 'link', to: '/team', label: 'Team', icon: '👥' },
  { type: 'link', to: '/events', label: 'Events', icon: '📅' },
]
const SECONDARY_NAV_ITEMS = [
  { type: 'a', href: '#resources', label: 'Resources', icon: '📚' },
]

function BrandBubble() {
  return (
    <a className="brand-bubble" href="/" aria-label="KNOW-I home">
      <img src="/logo-kowi.png" alt="KNOW-I logo" />
    </a>
  )
}

function LeftNav() {
  const location = useLocation()
  const containerRef = useRef(null)
  const itemRefs = useRef([])
  const [hoverTop, setHoverTop] = useState(null)
  const [hoverHeight, setHoverHeight] = useState(0)

  const primaryItems = PRIMARY_NAV_ITEMS
  const secondaryItems = SECONDARY_NAV_ITEMS

  const updateHighlightToActive = () => {
    const activeIndex = primaryItems.findIndex((item) => {
      if (item.to === '/') return location.pathname === '/'
      return location.pathname.startsWith(item.to)
    })
    if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
      const el = itemRefs.current[activeIndex]
      setHoverTop(el.offsetTop)
      setHoverHeight(el.offsetHeight)
    } else {
      setHoverTop(null)
    }
  }

  useEffect(() => {
    updateHighlightToActive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const handleEnter = (index) => () => {
    const el = itemRefs.current[index]
    if (!el) return
    setHoverTop(el.offsetTop)
    setHoverHeight(el.offsetHeight)
  }
  const handleLeave = () => {
    updateHighlightToActive()
  }

  return (
    <nav ref={containerRef} className="floating-nav collapsed-hover" onMouseLeave={handleLeave}>
      <div className="nav-inner">
        <div className="nav-highlight" style={{
          opacity: hoverTop == null ? 0 : 1,
          transform: hoverTop == null ? 'translateY(0)' : `translateY(${hoverTop}px)`,
          height: hoverHeight || 0,
        }} />
        <div className="nav-group primary">
          {primaryItems.map((item, i) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              ref={(el) => (itemRefs.current[i] = el)}
              onMouseEnter={handleEnter(i)}
            >
              <span className="icon" aria-hidden>{item.icon}</span>
              <span className="label">{item.label}</span>
            </NavLink>
          ))}
        </div>
        <div className="nav-group secondary">
          {secondaryItems.map((item) => (
            <a key={item.label} className="nav-item" href={item.href}>
              <span className="icon" aria-hidden>{item.icon}</span>
              <span className="label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function MobileNav() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Auto-close on route change
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((v) => !v)

  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      {isOpen && <div className="mobile-nav-overlay" onClick={close} />}

      <div className="mobile-nav-tray" role="menu" aria-label="Mobile navigation">
        <div className="emoji-row">
          {PRIMARY_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `emoji-item ${isActive ? 'active' : ''}`}
              role="menuitem"
              onClick={close}
            >
              <span aria-hidden>{item.icon}</span>
            </NavLink>
          ))}
          {SECONDARY_NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="emoji-item"
              role="menuitem"
              onClick={close}
            >
              <span aria-hidden>{item.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`mobile-menu-fab ${isOpen ? 'open' : ''}`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={toggle}
      >
        <span className="burger" aria-hidden>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </button>
    </div>
  )
}

function Shell() {
  return (
    <div className="page-shell">
      <div className="left-rail">
        <BrandBubble />
        <div className="nav-slot">
          <LeftNav />
        </div>
      </div>
      <div className="content-wrap">
        <Outlet />
      </div>
      {/* Mobile bottom nav */}
      <MobileNav />
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
  const leadership = [
    { name: 'Ari Mehta', role: 'President · Research Lead', img: ari },
    { name: 'Jordan Lee', role: 'Projects Lead', img: jordan },
    { name: 'Samira Gupta', role: 'Community & Ops', img: samira },
    { name: 'Diego Santos', role: 'Infra & MLE', img: diego },
    { name: 'Nora Park', role: 'Design & Content', img: nora },
    { name: 'You?', role: 'Core Team · Apply', img: you },
  ]
  const avatarCycle = [ari, jordan, samira, diego, nora, you]
  const fillers = Array.from({ length: 29 }, (_, i) => ({
    name: `Member ${String(i + 1).padStart(2, '0')}`,
    role: 'Member',
    img: avatarCycle[i % avatarCycle.length],
  }))
  const members = [...leadership, ...fillers]
  return (
    <div>
      <h1 style={{ margin: 0 }}>Team</h1>
      <p className="muted">The crew behind KNOW‑I.</p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {members.map((m, idx) => (
          <div key={`${m.name}-${idx}`} className="team-card polaroid">
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
