import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useGetUsers } from "@/hooks/useGetUsers";
import { InventoryMovement, Material } from "@prisma/client";
import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface TableProps {
  inventaries: InventoryMovement[];
  material: Material | null
}

const TableInventory = ({ inventaries, material }: TableProps) => {
  const { users } = useGetUsers();
  

  

  return (
    <table className="text-center border-separate border-spacing-1 table-auto">
      <thead className="px-4 ">
        <tr>
          <th>Identificador</th>
          <th>Movimiento</th>
          <th>Saldo</th>
          <th>Responsable</th>
        </tr>
      </thead>
      <tbody>
        {inventaries?.map((inventory) => (
          <tr key={inventory.id}>
            <td>{inventory.id}</td>
            <td className="flex items-center justify-center space-x-4">
              <span>{inventory.quantity}</span>
              {inventory.movementType === "ENTRADA" ? (
                <AiFillCaretUp className="text-green-500 text-2xl" />
              ) : inventory.movementType === "SALIDA" ? (
                <AiFillCaretDown className="text-red-500 text-2xl" />
              ) : null /* <- Aquí estaba el error de sintaxis, se agregó el cierre de paréntesis correctamente */}
            </td>
            <td>Acá la cantidad en el material</td>
            <td>{users?.find((r) => r.id === inventory.userId)?.name ?? ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TableInventory };
