import { NavLink } from "react-router-dom";

const members = [
  { name: "Arunima Muralitharan", role: "President", img: "arunima.jpeg" },
  { name: "Adithi Kalyanaraman", role: "Vice President - Planning", img: "adithi.jpg" },
  { name: "Ajay A", role: "Vice President - Research", img: "ajay.jpg" },
  { name: "Kirthana V", role: "Treasurer", img: "kirthana.jpg" },
  { name: "Clarinda Susan", role: "Secretary", img: "clarinda.jpg" },
  { name: "Cletus Rajkumar", role: "Research Lead", img: "cletus.jpg" },
  { name: "Kartheesan Senthilkumar", role: "Web Lead", img: "kartheesan.jpg" },
]

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div>
          <h1>
            <span className="brand-gradient">KNOW-I:</span> Innovating Ideas,
            Inspiring Intelligence
          </h1>
          <p>
            The AI and ML club of the Department of Computer Science and
            Engineering of SVCE fosters innovation, collaboration, and learning
            through projects, hackathons, and research.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#events">
              See Our Events
            </a>
            <a className="btn" href="/team">
              Meet The Team
            </a>
          </div>
        </div>
        <div>
          <div className="k-cards">
            <div className="k-card">
              <h3>Workshops</h3>
              <p>Deep-dives about LLMs, agents, and many more.</p>
            </div>
            <div className="k-card">
              <h3>Projects</h3>
              <p>Guiding Projects, Growing Potential</p>
            </div>
            <div className="k-card">
              <h3>Community</h3>
              <p>Find peers, research buddies, and late‑night builders.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-title">About Us</div>
      <p style={{ fontSize: "1.2rem" }}>
        Know-I is the Artificial Intelligence and Machine Learning club of the
        Department of Computer Science and Engineering at Sri Venkateswara
        College of Engineering (SVCE). We aim to foster innovation, research,
        and collaboration by engaging students in projects, competitions, and
        mentorship programs. Through hackathons, datathons, workshops, and
        conferences, we provide hands-on learning opportunities that bridge
        academics with real-world applications. Our initiatives connect students
        with experts, guiding them to explore emerging technologies and
        impactful solutions. At Know-I, we believe in empowering young minds to
        transform ideas into innovations.
      </p>

      <div className="section-title" id="events">Upcoming Events</div>
      <div className="grid-2">
        <div className="event-card">
          <div className="thumb">
            <img src="/2.png" alt="Know-I: AI and ML Club" />
          </div>
          <h4>Publish It Right</h4>
          <p className="muted">19 August 2025</p>
          <p style={{ marginTop: 8 }}>
            Connecting students with mentors to guide them through the journey
            of writing and publishing impactful research papers.
          </p>
          <NavLink
            to="/events/publish-it-right"
            className="btn"
          >
            Learn more
          </NavLink>
        </div>
        <div className="event-card">
          <div className="thumb">
            <img src="/2.png" alt="Know-I: AI and ML Club" />
          </div>
          <h4>NeuroNexus</h4>
          <p className="muted">TBD</p>
          <p style={{ marginTop: 8 }}>
            24-hour hackathon where participants tackle real-world machine
            learning problem statements, pushing the boundaries of innovation
            and practical AI solutions.
          </p>
          <NavLink
            to="/events/neuronexus"
            className="btn"
          >
            Learn more
          </NavLink>
        </div>
      </div>
      <div className="cta-row" style={{ marginTop: 12 }}>
        <NavLink to="/events" className="btn primary">
          See Past Events
        </NavLink>
      </div>

      <div className="section-title">Our Team</div>
      <div className="team-scroller" aria-label="Leadership team">
        {members.map((m, idx) => (
          <div key={`${m.name}-${idx}`} className="home-team-card polaroid">
            <div className="photo">
              <img src={`/images/team/${m.img}`} alt={m.name} />
            </div>
            <div className="caption">
              <h4>{m.name}</h4>
              <p className="sub">{m.role}</p>
            </div>
          </div>
        ))}

        <NavLink
          to="/team"
          className="see-all-card polaroid"
          aria-label="See all team members"
        >
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
