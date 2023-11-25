import { useGetUsers } from "@/hooks/useGetUsers";
import React from "react";
import { Material } from "@prisma/client";
import {formatDate} from "@/utils/formatDate";
interface TableProps {
  materials: Material[];
}

const TableMaterials = ({ materials }: TableProps) => {
  const { users } = useGetUsers();
  return (
    <table className="text-center border-separate border-spacing-1 table-auto ">
      <thead className="px-4">
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
            <td >{material.id}</td>
            <td className=" text-center">{formatDate(material.createdAt.toString())}</td>
            <td >{material.name}</td>
            <td>{material.quantity}</td>
            <td>{users?.find((r) => r.id === material.userId)?.name ?? ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TableMaterials };
