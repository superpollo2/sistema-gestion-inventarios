import { useGetUsers } from "@/hooks/useGetUsers";
import { InventoryMovement } from "@prisma/client";
import React from "react";

interface TableProps {
  inventaries: InventoryMovement[];
}

const TableInventory = ({ inventaries }: TableProps) => {
  const { users } = useGetUsers();
  return (
    <table className="bg-white  border-collapse rounded-xl border text-center border-slate-500 table-auto ">
      <thead className="bg-zinc-100 ">
        <tr>
          <th>Identificador</th>
          <th>Entrada</th>
          <th>Salida</th>
          <th>Responsable</th>
        </tr>
      </thead>
      <tbody>
        {inventaries?.map((inventory) => (
          <tr key={inventory.id}>
            <td>{inventory.id}</td>
            <td>
              {inventory.movementType === "ENTRADA" ? inventory.quantity : ""}
            </td>
            <td>
              {inventory.movementType === "SALIDA" ? inventory.quantity : ""}
            </td>
            <td>{users?.find((r) => r.id === inventory.userId)?.name ?? ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TableInventory };
