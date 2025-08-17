import { NavLink } from "react-router-dom";
import { EVENTS } from "../data/events";

export default function EventsPage() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Past Events</h1>
      <p className="muted">
        A look back at the milestones and memories we’ve created together.
      </p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {EVENTS.filter((e) => e.type === "completed").map((e) => (
          <div key={e.title} className="event-card">
            <div className="thumb">
              <img src={e.thumb} alt={e.title} />
            </div>
            <h4>{e.title}</h4>
            <p className="muted">{e.date}</p>
            <p style={{ marginTop: 8 }}>{e.shortDesc}</p>
            <NavLink
              to={`/events/${e.slug}`}
              className="btn"
            >
              Learn more
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
