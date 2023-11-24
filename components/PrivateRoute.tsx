import { useSession } from "next-auth/react";
import { SingIn } from "./ui/SingIn/SingIng";


interface SingInProps {
  children: React.ReactNode;
}
const PrivateRoute = ({ children }: SingInProps) => {
  const { status } = useSession();

  return (
    <div className=" w-full ">
      {status === "authenticated" ? (
        <div className="flex items-center justify-center w-full h-full  bg-slate-50">
            {children}      
        </div>
      ) : (
        <>
          <SingIn />
        </>
      )}
    </div>
  );
};

export { PrivateRoute }