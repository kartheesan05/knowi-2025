import { EVENTS_DATA } from '../constants/events'
import EventCard from '../components/ui/EventCard'

function EventsPage() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Events</h1>
      <p className="muted">Upcoming sessions and nights.</p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {EVENTS_DATA.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </div>
  )
}

export default EventsPage
