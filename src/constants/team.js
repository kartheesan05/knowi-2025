import ari from '../assets/team/ari.svg'
import jordan from '../assets/team/jordan.svg'
import samira from '../assets/team/samira.svg'
import diego from '../assets/team/diego.svg'
import nora from '../assets/team/nora.svg'
import you from '../assets/team/you.svg'

export const TEAM_LEADERSHIP = [
  { name: 'Ari Mehta', role: 'President · Research Lead', img: ari },
  { name: 'Jordan Lee', role: 'Projects Lead', img: jordan },
  { name: 'Samira Gupta', role: 'Community & Ops', img: samira },
  { name: 'Diego Santos', role: 'Infra & MLE', img: diego },
  { name: 'Nora Park', role: 'Design & Content', img: nora },
  { name: 'You?', role: 'Core Team · Apply', img: you },
]

export const AVATAR_CYCLE = [ari, jordan, samira, diego, nora, you]

// Generate team members using avatar cycle
export const generateTeamMembers = () => {
  const fillers = Array.from({ length: 29 }, (_, i) => ({
    name: `Member ${String(i + 1).padStart(2, '0')}`,
    role: 'Member',
    img: AVATAR_CYCLE[i % AVATAR_CYCLE.length],
  }))
  return [...TEAM_LEADERSHIP, ...fillers]
}
