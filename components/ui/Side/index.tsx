import React, { useState } from "react";
import { UserProfile } from "./UserProfile";
import { SidebarNavigation } from "./SidebarNav";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { FooterSide } from "./FooterSide";

const SideNavigationUserProfile = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div className="fixed ">
      {/*  <!-- Component: Side navigation menu with user profile and alert message --> */}
      {/*  <!-- Mobile trigger --> */}

      <MobileMenuIcon
        isSideNavOpen={isSideNavOpen}
        onClick={() => setIsSideNavOpen((prev) => !prev)}
      />
      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-4"
        aria-label="Side navigation"
        className={`top-0 bottom-0 left-0 z-40 flex h-screen flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <UserProfile />
        <SidebarNavigation />
        <FooterSide />
      </aside>

      <button
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen((prev) => !prev)}
      ></button>
      {/*  <!-- End Side navigation menu with user profile and alert message --> */}
    </div>
  );
};

export { SideNavigationUserProfile };
