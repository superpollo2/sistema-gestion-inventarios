import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

const UserProfile = () => {
  const { data, status } = useSession();
  return (
    <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
      <div className="relative">
        <img
          src="https://i.pravatar.cc/40?img=7"
          alt="user name"
          title="user name"
          width="48"
          height="48"
          className="max-w-full rounded-full"
        />
        <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
          <span className="sr-only"> online </span>
        </span>
      </div>
      <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
        <h4 className="w-full truncate text-base text-slate-700">
          Luke Skywalker
        </h4>
        <p className="w-full truncate text-sm text-slate-500">Jedi warrior</p>
      </div>

      {status === "authenticated" && (
        <>
          <div className="relative">
            <Image
              src={data?.user.image ?? ""}
              alt="imagen usuario"
              title="user name"
              width={40}
              height={40}
            />
            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
              <span className="sr-only"> online </span>
            </span>
          </div>
          <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
            <h4 className="w-full truncate text-base text-slate-700">
              {data?.user.name}
            </h4>
            <p className="w-full truncate text-sm text-slate-500 lowercase">
              {data?.user.role?.name}{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export { UserProfile };