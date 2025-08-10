import { Outlet } from 'react-router-dom'
import BrandBubble from './BrandBubble'
import LeftNav from './LeftNav'
import MobileNav from './MobileNav'

function Shell() {
  return (
    <div className="page-shell">
      <div className="left-rail">
        <BrandBubble />
        <div className="nav-slot">
          <LeftNav />
        </div>
      </div>
      <div className="content-wrap">
        <Outlet />
      </div>
      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  )
}

export default Shell
