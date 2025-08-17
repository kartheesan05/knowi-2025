import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";

export default function TeamPage() {
  const leadership = [
    {
      name: "Arunima Muralitharan",
      role: "President",
      img: "arunima.jpeg",
      linkedin:
        "https://www.linkedin.com/in/aru04/",
      github: "https://github.com/arunimamuralitharan",
    },
    {
      name: "Jordan Lee",
      role: "Projects Lead",
      img: "jordan.svg",
      linkedin:
        "https://www.linkedin.com/in/jordan-lee-00000000000000000000000000000000/",
    },
    { name: "Samira Gupta", role: "Community & Ops", img: "samira.svg" },
    { name: "Diego Santos", role: "Infra & MLE", img: "diego.svg" },
    { name: "Nora Park", role: "Design & Content", img: "nora.svg" },
    { name: "You?", role: "Core Team · Apply", img: "you.svg" },
  ];
  const avatarCycle = ["ari.svg", "jordan.svg", "samira.svg", "diego.svg", "nora.svg", "you.svg"];
  const fillers = Array.from({ length: 29 }, (_, i) => ({
    name: `Member ${String(i + 1).padStart(2, "0")}`,
    role: "Member",
    img: avatarCycle[i % avatarCycle.length],
  }));
  const members = [...leadership, ...fillers];
  return (
    <div>
      <h1 style={{ margin: 0 }}>Our Team</h1>
      <p className="muted">
        Meet the incredible team that works to make Know-I thrive.
      </p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {members.map((m, idx) => (
          <div key={`${m.name}-${idx}`} className="team-card polaroid">
            <div className="photo">
              <img src={`/images/team/${m.img}`} alt={m.name} />
            </div>
            <div className="caption">
              <h4>{m.name}</h4>
              <p className="sub">{m.role}</p>
            </div>
            {(m.linkedin || m.github) && (
              <div
                className="social-icons"
                aria-label={`${m.name} social links`}
              >
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
