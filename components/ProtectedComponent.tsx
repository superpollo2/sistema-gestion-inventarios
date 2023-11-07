import { Enum_RoleName } from '@prisma/client';
import { useSession } from 'next-auth/react';

interface ProtectedComponentProps {
  children: React.ReactNode;
  roleName: Enum_RoleName;
}

const ProtectedComponent = ({ children, roleName }: ProtectedComponentProps) => {
  const { data } = useSession();

  if (data?.user.role?.name === roleName) return <>{children}</>;

  return <h1>No tiene permisos</h1>;
};

export { ProtectedComponent };