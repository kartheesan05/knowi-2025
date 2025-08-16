import ari from "../assets/team/ari.svg";
import jordan from "../assets/team/jordan.svg";
import samira from "../assets/team/samira.svg";
import diego from "../assets/team/diego.svg";
import nora from "../assets/team/nora.svg";
import you from "../assets/team/you.svg";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";

export default function TeamPage() {
  const leadership = [
    {
      name: "Ari Mehta",
      role: "President · Research Lead",
      img: ari,
      linkedin:
        "https://www.linkedin.com/in/ari-mehta-00000000000000000000000000000000/",
      github: "https://github.com/ari-mehta",
    },
    {
      name: "Jordan Lee",
      role: "Projects Lead",
      img: jordan,
      linkedin:
        "https://www.linkedin.com/in/jordan-lee-00000000000000000000000000000000/",
    },
    { name: "Samira Gupta", role: "Community & Ops", img: samira },
    { name: "Diego Santos", role: "Infra & MLE", img: diego },
    { name: "Nora Park", role: "Design & Content", img: nora },
    { name: "You?", role: "Core Team · Apply", img: you },
  ];
  const avatarCycle = [ari, jordan, samira, diego, nora, you];
  const fillers = Array.from({ length: 29 }, (_, i) => ({
    name: `Member ${String(i + 1).padStart(2, "0")}`,
    role: "Member",
    img: avatarCycle[i % avatarCycle.length],
  }));
  const members = [...leadership, ...fillers];
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
            {(m.linkedin || m.github) && (
              <div className="social-icons" aria-label={`${m.name} social links`}>
                {m.linkedin && (
                  <a
                    className="icon-btn"
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} LinkedIn`}
                    title="LinkedIn"
                  >
                    <LinkedInIcon size={22} />
                  </a>
                )}
                {m.github && (
                  <a
                    className="icon-btn"
                    href={m.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} GitHub`}
                    title="GitHub"
                  >
                    <GithubIcon size={22} />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


