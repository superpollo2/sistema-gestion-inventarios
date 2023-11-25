import React, { useState } from "react";
import { UserProfile } from "./UserProfile";
import { SidebarNavigation } from "./SidebarNav";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { SideFooter } from "./SideFooter";


const SideNavigationUserProfile = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div className="w-1/5 bg-slate-50">
      {/*  <!-- Mobile trigger --> */}
      <MobileMenuIcon
        isSideNavOpen={isSideNavOpen}
        onClick={() => setIsSideNavOpen((prev) => !prev)}
      />
      <aside
        id="nav-menu-4"
        aria-label="Side navigation"
        className={`top-0 bottom-0 left-0 z-40 flex h-screen flex-col grow border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${isSideNavOpen ? "translate-x-0" : " -translate-x-full"}`}
      >
        
        <UserProfile />
        <SidebarNavigation />
        <SideFooter />
        
      </aside>

      <button
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-200/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"
          }`}
        onClick={() => setIsSideNavOpen((prev) => !prev)}
      ></button>
      {/*  <!-- End Side navigation menu with user profile and alert message --> */}
    </div>
  );
};

export { SideNavigationUserProfile };
