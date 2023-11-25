import { useSession } from "next-auth/react";
import { SingIn } from "./ui/SingIn/SingIng";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";


interface SingInProps {
  children: React.ReactNode;
}
const PrivateRoute = ({ children }: SingInProps) => {
  const { status } = useSession();
  const [isWarningDisplayed, setWarningDisplayed] = useState(false);

  useEffect(() => {
    if (status !== 'authenticated' && !isWarningDisplayed) {
      toast.warning('Necesitas estar autenticado');
      setWarningDisplayed(false);
    }
  }, [status, isWarningDisplayed]);

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