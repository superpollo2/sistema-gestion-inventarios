import { Enum_RoleName } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface ProtectedComponentProps {
  children: React.ReactNode;
  roleName: Enum_RoleName;
}

const ProtectedComponent = ({ children, roleName }: ProtectedComponentProps) => {
  const { data } = useSession();
  const [isWarningDisplayed, setWarningDisplayed] = useState(false);

  useEffect(() => {
    if (data?.user.role?.name !== roleName && !isWarningDisplayed) {
      toast.warning('😪 No tienes permisos');
      setWarningDisplayed(false);

    }
  }, [data?.user.role?.name, isWarningDisplayed, roleName]);

  if (data?.user.role?.name === roleName) return <>{children}</>;

  return <h1>no esta autorizado</h1>;


};

export { ProtectedComponent };