import React, { useState } from "react"

interface MenuIconProps {
    isSideNavOpen: boolean;
    onClick: () => void;

}

const MobileMenuIcon = ({ isSideNavOpen, onClick }: MenuIconProps) => {
    return (
        <button
            title="Side navigation"
            type="button"
            className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-black opacity-100 lg:hidden ${isSideNavOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
                }`}
            aria-haspopup="menu"
            aria-label="Side navigation"
            aria-expanded={isSideNavOpen ? "true" : "false"}
            aria-controls="nav-menu-4"
            onClick={onClick}
        >
            {/* Menu icon use in mobile */}
        </button>
    );
};

export { MobileMenuIcon }