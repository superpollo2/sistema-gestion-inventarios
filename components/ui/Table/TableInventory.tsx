
import { useGetUsers } from "@/hooks/useGetUsers";
import { InventoryMovement } from "@prisma/client";
import React from "react";
interface TableColumn {
    inventaryAttribute: string;
    header: string;
}
interface TableProps {
    columns: TableColumn[];
    inventary: InventoryMovement[];
}

const TableInventory = ({ columns, inventary }: TableProps) => {
    const { users } = useGetUsers();
    return (
        <table className="bg-white  border-collapse rounded-xl border text-center border-slate-500 table-auto ">
            <thead className="bg-zinc-100 ">
                <tr >
                    {columns?.map((colum, index) => (
                        <th key={index} className="border  border-slate-600 p-2">{colum.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {inventary?.map((row) => (
                    <tr key={row.id}>
                        {columns.map((column, index) => (
                            <td key={index} className="border border-slate-600 py-1 px-4">
                                {column.inventaryAttribute === 'entrada' && row.movementType === 'ENTRADA' ? (
                                    row.quantity
                                ) : column.inventaryAttribute === 'salida' && row.movementType === 'SALIDA' ? (
                                    // Si la columna no es 'quantity', renderizar normalmente
                                    row.quantity
                                ) : column.inventaryAttribute === 'userId' ? (
                                    users?.find((r) => r.id === row.userId)?.name ?? ''
                                ) : (
                                    row[column.inventaryAttribute]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export { TableInventory }
