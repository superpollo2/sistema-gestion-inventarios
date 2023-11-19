import { useGetRoles } from "@/hooks/useGetRoles";
import React from "react";
import { User } from "@prisma/client";

interface TableProps {
  users: User[];
}

const TableUsers = ({ users }: TableProps) => {
  const { roles } = useGetRoles();
  return (
    <table className=" text-center border-separate border-spacing-1 table-auto">
      <thead className=" ">
        <tr>
          <th >Identificador</th>
          <th >E-mail</th>
          <th >Rol</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{roles?.find((r) => r.id === user.roleId)?.name ?? ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TableUsers };
