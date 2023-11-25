import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import { ProtectedComponent } from "@/components/ProtectedComponent";
import { TableUsers } from "@/components/ui/Table/TableUsers";
import { useGetUsers } from '@/hooks/useGetUsers';
import { Load } from "@/components/general/Load";



const Users = () => {

  const { users, isLoading } = useGetUsers();

  return (
    <PrivateRoute >
      <ProtectedComponent roleName="ADMIN">
        <div>
          {isLoading ? (
            <Load />
          ) : (
            <>
              <div className="mb-5 pl-0">
                <h1 className="titulo pl-1 "> Usuarios registrados</h1>
              </div>
              <TableUsers users={users} />
            </>
          )
          }
        </div>
      </ProtectedComponent>
    </PrivateRoute >

  );
};

export default Users;
