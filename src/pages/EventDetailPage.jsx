import { useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { EVENTS } from "../data/events";

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = EVENTS.find((e) => e.slug === slug);
  const trackRef = useRef(null);

  const scrollByItem = (dir) => () => {
    const el = trackRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild;
    const delta = firstChild ? firstChild.getBoundingClientRect().width + 12 : el.clientWidth;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  if (!event) {
    return (
      <div>
        <h1 style={{ margin: 0 }}>Event not found</h1>
        <p className="muted">We couldn't find that event.</p>
        <div className="cta-row" style={{ marginTop: 12 }}>
          <NavLink to="/events" className="btn">
            Back to events
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ margin: 0 }}>{event.title}</h1>
      <p className="muted">{event.date}</p>
      <p style={{ marginTop: 8 }}>{event.desc}</p>
      <div className="section-title" style={{ marginTop: 24 }}>Gallery</div>
      <div className="carousel">
        <div className="carousel-track" ref={trackRef} aria-label={`${event.title} gallery`}>
          {event.gallery.map((src, idx) => (
            <div className="carousel-item" key={`${event.slug}-img-${idx}`}>
              <img src={src} alt={`${event.title} photo ${idx + 1}`} />
            </div>
          ))}
        </div>
        <button type="button" className="carousel-arrow left" aria-label="Previous" onClick={scrollByItem(-1)}>
          ←
        </button>
        <button type="button" className="carousel-arrow right" aria-label="Next" onClick={scrollByItem(1)}>
          →
        </button>
      </div>

      <div className="cta-row" style={{ marginTop: 16 }}>
        <a className="btn primary" href={event.reportUrl}>
          View report
        </a>
      </div>
    </div>
  );
}


