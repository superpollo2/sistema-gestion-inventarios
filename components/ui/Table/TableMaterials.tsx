import { useGetUsers } from "@/hooks/useGetUsers";
import React from "react";
import { Material } from '@prisma/client';

interface TableColumn {
    materialAttribute: string;
    header: string;
}
interface TableProps {
    columns: TableColumn[];
    material: Material[];
}

const TableMaterials = ({ columns, material }: TableProps) => {
    const { users } = useGetUsers();
    return (
        <table className="bg-white  border-collapse rounded-xl border text-center border-slate-500 table-auto ">
            <thead className="bg-zinc-100 ">
                <tr >
                    {columns.map((colum, index) => (
                        <th key={index} className="border  border-slate-600 p-2">{colum.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {material.map((row) => (
                    <tr key={row.id}>
                        {columns.map((column, index) => (
                            <td key={index} className="border  border-slate-600 py-1 px-4">
                                {column.materialAttribute === 'userId' ? (
                                    users?.find((r) => r.id === row.userId)?.name ?? ''
                                ) : (
                                    row[column.materialAttribute]
                                )}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export { TableMaterials }