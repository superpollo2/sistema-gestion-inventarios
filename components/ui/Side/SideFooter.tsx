import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { signOut } from "next-auth/react";

const SideFooter = () => {
  return (
    <footer>
      <div className="bg-[#03071E] flex flex-col items-center p-7">
      <button
        className="w-60 flex items-center gap-3 rounded p-3 text-slate-700 transition-colors 
                hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
        onClick={() => signOut()}
      >
        <div className="flex w-full  flex-row space-x-6 items-start justify-center text-[#E85D04] hover:text-[#FFBA08] hover:scale-110 overflow-hidden truncate text-md font-medium ">
          <span>Logout</span>
          <HiOutlineArrowCircleRight className="text-2xl" />
        </div>
      </button>

      </div>
    </footer>
  );
};

export { SideFooter };
