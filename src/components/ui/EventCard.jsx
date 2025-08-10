import Button from './Button'

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h4>{event.title}</h4>
      <p className="muted">{event.date}</p>
      <p style={{ marginTop: 8 }}>{event.desc}</p>
      <Button 
        href="#rsvp" 
        style={{ marginTop: 12, display: 'inline-block' }}
      >
        RSVP
      </Button>
    </div>
  )
}

export default EventCard
