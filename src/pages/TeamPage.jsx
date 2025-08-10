import { generateTeamMembers } from '../constants/team'
import TeamCard from '../components/ui/TeamCard'

function TeamPage() {
  const members = generateTeamMembers()
  
  return (
    <div>
      <h1 style={{ margin: 0 }}>Team</h1>
      <p className="muted">The crew behind KNOW‑I.</p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {members.map((member, idx) => (
          <TeamCard key={`${member.name}-${idx}`} member={member} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default TeamPage
