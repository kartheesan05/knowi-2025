function TeamCard({ member, index }) {
  return (
    <div key={`${member.name}-${index}`} className="team-card polaroid">
      <div className="photo">
        <img src={member.img} alt={member.name} />
      </div>
      <div className="caption">
        <h4>{member.name}</h4>
        <p className="sub">{member.role}</p>
      </div>
    </div>
  )
}

export default TeamCard
