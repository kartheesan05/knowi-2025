import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from "../../data/nav";

export default function MobileNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      {isOpen && <div className="mobile-nav-overlay" onClick={close} />}

      <div className="mobile-nav-tray" role="menu" aria-label="Mobile navigation">
        <div className="emoji-row">
          {PRIMARY_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `emoji-item ${isActive ? "active" : ""}`}
              role="menuitem"
              onClick={close}
            >
              <span aria-hidden>{item.icon}</span>
            </NavLink>
          ))}
          {SECONDARY_NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="emoji-item"
              role="menuitem"
              onClick={close}
            >
              <span aria-hidden>{item.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`mobile-menu-fab ${isOpen ? "open" : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggle}
      >
        <span className="burger" aria-hidden>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </button>
    </div>
  );
}


