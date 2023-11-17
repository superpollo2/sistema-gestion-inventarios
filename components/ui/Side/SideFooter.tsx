import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { signOut } from "next-auth/react";
import React from "react";

const SideFooter = () => {
  return (
    <footer>
      <button
        className="w-full flex items-center gap-3 rounded p-3 text-slate-700 transition-colors 
                hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
        onClick={() => signOut()}
      >
        <div className="flex w-full  flex-row space-x-6 items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium ">
          <span>Logout</span>
          <HiOutlineArrowCircleRight className="text-2xl" />
        </div>
      </button>
    </footer>
  );
};

export { SideFooter };
