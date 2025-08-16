import { NavLink } from "react-router-dom";
import { EVENTS } from "../data/events";

export default function EventsPage() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Events</h1>
      <p className="muted">Upcoming sessions and nights.</p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {EVENTS.map((e) => (
          <div key={e.title} className="event-card">
            <div className="thumb">
              <img src={e.thumb} alt={e.title} />
            </div>
            <h4>{e.title}</h4>
            <p className="muted">{e.date}</p>
            <p style={{ marginTop: 8 }}>{e.desc}</p>
            <NavLink to={`/events/${e.slug}`} className="btn" style={{ marginTop: 12, display: "inline-block" }}>
              Learn more
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}


