import { Outlet } from "react-router-dom";
import BrandBubble from "../BrandBubble";
import LeftNav from "../navigation/LeftNav";
import MobileNav from "../navigation/MobileNav";
import Footer from "./Footer";

export default function Shell() {
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
        <Footer />
      </div>
      <MobileNav />
    </div>
  );
}


