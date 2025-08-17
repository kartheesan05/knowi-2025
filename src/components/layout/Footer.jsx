import { NavLink } from "react-router-dom";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo" id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" className="brand-link" aria-label="Know-I Home">
            <img src="/knowi.svg" alt="Know-I" />
          </a>
          <p className="tagline">Innovating Ideas, Inspiring Intelligence</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <div className="col">
            <div className="col-title">Explore</div>
            <NavLink to="/" className="f-link">Home</NavLink>
            <NavLink to="/events" className="f-link">Events</NavLink>
            <NavLink to="/team" className="f-link">Team</NavLink>
          </div>
          <div className="col">
            <div className="col-title">Resources</div>
            <a className="f-link" href="/reports/annual-report-24-25.pdf" target="_blank" rel="noreferrer">Annual Report</a>
            <a className="f-link" href="/reports/analytics-showdown3.0-2024-2025.pdf" target="_blank" rel="noreferrer">Analytics Showdown</a>
            <a className="f-link" href="/reports/hackml2.0-2024-2025.pdf" target="_blank" rel="noreferrer">HackML 2.0</a>
          </div>
          <div className="col">
            <div className="col-title">Connect</div>
            <a className="f-link" href="mailto:know-i@svce.ac.in">know-i@svce.ac.in</a>
            <div className="social-row">
              <a className="icon-btn" href="https://github.com/Know-IResearchClub" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon color="#fff" />
              </a>
              <a className="icon-btn" href="https://www.linkedin.com/company/know-i-club/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon color="#fff" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <span className="muted">
          © {year} Know-I, SVCE. All rights reserved.
        </span>
        <span className="muted">Made with ♡ by the Know-I Web Team</span>
      </div>
    </footer>
  );
}


