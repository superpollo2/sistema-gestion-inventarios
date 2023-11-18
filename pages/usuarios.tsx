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
          <h1 className="text-3xl font-bold">Users Page</h1>
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
