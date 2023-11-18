import { useGetUsers } from "@/hooks/useGetUsers";
import React from "react";
import { Material } from "@prisma/client";

interface TableProps {
  materials: Material[];
}

const TableMaterials = ({ materials }: TableProps) => {
  const { users } = useGetUsers();
  return (
    <table className="bg-white  border-collapse rounded-xl border text-center border-slate-500 table-auto ">
      <thead className="bg-zinc-100 ">
        <tr>
          <th>Identificador</th>
          <th>Fecha de Creación</th>
          <th>Nombre</th>
          <th>Saldo</th>
          <th>Creado por</th>
        </tr>
      </thead>
      <tbody>
        {materials.map((material) => (
          <tr key={material.id}>
            <td>{material.id}</td>
            <td>{material.createdAt.toISOString()}</td>
            <td>{material.name}</td>
            <td>{material.quantity}</td>
            <td>{users?.find((r) => r.id === material.userId)?.name ?? ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TableMaterials };
