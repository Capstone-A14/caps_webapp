// import Sidebar from '@/app/(with-sidebar)/_sidebar'
import { SideMenu, Header } from "@/components/index.js";

export default function withSideMenu({ children }) {
  return (
    <div className="xsm_css_map md:css_map bg-white min-h-screen">
      <div className="xsm:xsm-menu md:sideMenu">
        <SideMenu />
      </div>

      <div className="xsm:xsm-header md:headerHere">
        <Header />
      </div>

      <div className="xsm:xsm-contents md:contentsHere bg-black rounded-none md:rounded-tl-3xl">
        {children}
      </div>
    </div>
  );
}
