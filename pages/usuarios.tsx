import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import { ProtectedComponent } from "@/components/ProtectedComponent";
import { TableUsers } from "@/components/ui/Table/TableUsers";
import { getHeadersUsers } from "@/services/getheaders";
import { useGetUsers } from '@/hooks/useGetUsers';
import { Load } from "@/components/general/Load";
import { useGetRoles } from "@/hooks/useGetRoles";


const users = () => {

  const { users, isLoading } = useGetUsers();
  const getHeaders = getHeadersUsers();


  return (
    <PrivateRoute >
      <ProtectedComponent roleName="ADMIN">
        <div>
          <h1 className="text-3xl font-bold">Users Page</h1>
          {isLoading ? (
            <Load />
          ) : (
            <TableUsers columns={getHeaders} user={users}/>
          )
          }
        </div>
      </ProtectedComponent>
    </PrivateRoute >

  );
};

export default users;
