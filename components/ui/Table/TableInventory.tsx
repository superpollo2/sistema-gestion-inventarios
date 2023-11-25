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
    <table className="bg-white  border-collapse rounded-xl border text-center border-slate-500 table-auto ">
      <thead className="bg-zinc-100 ">
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
              <div className="w-[80%]">{inventory.quantity}</div>
              <div className="w-[10%] flex items-center justify-cener">
              {inventory.movementType === "ENTRADA" ? (
                <AiFillCaretUp className="text-green-500 text-2xl" />
              ) : inventory.movementType === "SALIDA" ? (
                <AiFillCaretDown className="text-red-500 text-2xl" />
              ) : null}

              </div>
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
