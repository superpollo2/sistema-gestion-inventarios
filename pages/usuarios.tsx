import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import { ProtectedComponent } from "@/components/ProtectedComponent";
import { Table } from "@/components/ui/Table";
import { getHeadersUsers } from "@/services/getheaders";
import { useGetUsers } from '@/hooks/useGetUsers';
import { Load } from "@/components/general/Load";


const users = () => {

  const { users, isLoading, error } = useGetUsers();

  const getHeaders = getHeadersUsers();


  return (
    <PrivateRoute >
      <ProtectedComponent roleName="ADMIN">
        <div>
          <h1 className="text-3xl font-bold">Users Page</h1>
          {isLoading ? (
            <Load />
          ) : (
                <Table columns={getHeaders} data={users} /> 
          )
          }
        </div>
      </ProtectedComponent>
    </PrivateRoute >

  );
};

export default users;
