import React, { ReactNode } from "react";
import Link from "next/link";

interface LinkItemProps {
    link: string;
    text: string;
    children: ReactNode;
}
const LinkItem = ({ link, text, children }: LinkItemProps) => {
    return (
        <li>
            <Link
                href={link}
                className="flex gap-3 rounded-md p-3 pl-6 w-60 text-slate-700 bg-[#E85D04] transition-colors
                 focus:bg-[#FFBA08]
                  aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 shadow-lg hover:shadow-none hover:scale-105 hover:bg-[#FFBA08] hover:text-[#22223b]"
            >
                <div className="flex text-2xl text-slate-200">
                    {children}
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center itemsgap-0 overflow-hidden truncate text-sm text-slate-200">
                    {text}
                </div>
            </Link>
        </li>
    );
};


export { LinkItem };