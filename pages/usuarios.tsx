import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import { ProtectedComponent } from "@/components/ProtectedComponent";
import { TableUsers } from "@/components/ui/Table/TableUsers";
import { useGetUsers } from '@/hooks/useGetUsers';
import { Load } from "@/components/general/Load";



const users = () => {

  const { users, isLoading } = useGetUsers();
  
  return (
    <PrivateRoute >
      <ProtectedComponent roleName="ADMIN">
        <div>
          <div className="p-8 pl-0">
          <h1 className="titulo pl-1 "> Usuarios registrados</h1>
          </div>
          

          {isLoading ? (
            <Load />
          ) : (
            <TableUsers  users={users}/>
          )
          }
        </div>
      </ProtectedComponent>
    </PrivateRoute >

  );
};

export default users;
