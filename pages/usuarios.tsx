import React, { useEffect, useState } from "react";
import { PrivateRoute  } from "@/components/PrivateRoute";
import { ProtectedComponent } from "@/components/ProtectedComponent";
import Table from "@/components/Table";

const users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, [])
  return (
    <PrivateRoute >
      <ProtectedComponent roleName="ADMIN">
        <div>
      <h1 className="text-3xl font-bold">Users Page</h1>
      <Table data={users}  columns={[
          {
            accessor: "id",
            header: "Identificador",
            hidden: false
          },
          {
            accessor: "name",
            header: "Nombre",
            hidden: false
          },
          {
            accessor: "email",
            header: "Email",
            hidden: false
          },
          {
            accessor: "emailVerified",
            header: "Verificado",
            hidden: true
          },
          {
            accessor: "image",
            header: "Imagen",
            hidden: true
          },
          {
            accessor: "roleId",
            header: "Rol",
            hidden: false
          }
          ]
        }/>
        </div>
      </ProtectedComponent>
    </PrivateRoute >

  );
};

export default users;
