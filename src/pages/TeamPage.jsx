import { useState } from "react";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import { TEAM_MEMBERS } from "../data/team";
import ConfettiBurst from "../components/Confetti";

export default function TeamPage() {
  const [confettiActive, setConfettiActive] = useState(false);

  const shouldCelebrate = (role) => {
    return role === "Web Lead" || role === "President";
  };

  const handleCardClick = (member) => {
    if (shouldCelebrate(member.role)) {
      setConfettiActive(true);
    }
  };
  return (
    <div>
      <h1 style={{ margin: 0 }}>Our Team</h1>
      <p className="muted">
        Meet the incredible team that works to make Know-I thrive.
      </p>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {TEAM_MEMBERS.map((m, idx) => (
          <div
            key={`${m.name}-${idx}`}
            className="team-card polaroid"
            onClick={() => handleCardClick(m)}
            style={{ cursor: shouldCelebrate(m.role) ? "pointer" : undefined }}
            aria-label={`Open ${m.name} card`}
          >
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
      <ConfettiBurst
        active={confettiActive}
        duration={2500}
        numberOfPieces={280}
        onComplete={() => setConfettiActive(false)}
      />
    </div>
  );
}
