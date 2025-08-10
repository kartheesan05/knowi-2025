import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from '../../constants/navigation'

function LeftNav() {
  const location = useLocation()
  const containerRef = useRef(null)
  const itemRefs = useRef([])
  const [hoverTop, setHoverTop] = useState(null)
  const [hoverHeight, setHoverHeight] = useState(0)

  const primaryItems = PRIMARY_NAV_ITEMS
  const secondaryItems = SECONDARY_NAV_ITEMS

  const updateHighlightToActive = () => {
    const activeIndex = primaryItems.findIndex((item) => {
      if (item.to === '/') return location.pathname === '/'
      return location.pathname.startsWith(item.to)
    })
    if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
      const el = itemRefs.current[activeIndex]
      setHoverTop(el.offsetTop)
      setHoverHeight(el.offsetHeight)
    } else {
      setHoverTop(null)
    }
  }

  useEffect(() => {
    updateHighlightToActive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const handleEnter = (index) => () => {
    const el = itemRefs.current[index]
    if (!el) return
    setHoverTop(el.offsetTop)
    setHoverHeight(el.offsetHeight)
  }
  
  const handleLeave = () => {
    updateHighlightToActive()
  }

  return (
    <nav ref={containerRef} className="floating-nav collapsed-hover" onMouseLeave={handleLeave}>
      <div className="nav-inner">
        <div className="nav-highlight" style={{
          opacity: hoverTop == null ? 0 : 1,
          transform: hoverTop == null ? 'translateY(0)' : `translateY(${hoverTop}px)`,
          height: hoverHeight || 0,
        }} />
        <div className="nav-group primary">
          {primaryItems.map((item, i) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              ref={(el) => (itemRefs.current[i] = el)}
              onMouseEnter={handleEnter(i)}
            >
              <span className="icon" aria-hidden>{item.icon}</span>
              <span className="label">{item.label}</span>
            </NavLink>
          ))}
        </div>
        <div className="nav-group secondary">
          {secondaryItems.map((item) => (
            <a key={item.label} className="nav-item" href={item.href}>
              <span className="icon" aria-hidden>{item.icon}</span>
              <span className="label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default LeftNav
