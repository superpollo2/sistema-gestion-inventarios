import { useGetRoles } from "@/hooks/useGetRoles";
import React from "react";
import { User } from "@prisma/client";
import { HiOutlinePencil } from "react-icons/hi";
interface TableProps {
    users: User[];
}

const TableUsers = ({ users }: TableProps) => {
    const { roles } = useGetRoles();
    return (
        <table className="bg-white  border-collapse rounded-xl border text-center border-slate-500 table-auto ">
            <thead className="bg-zinc-100 ">
                <tr>
                    <th >identificador</th>
                    <th >Email</th>
                    <th >Role</th>
                    <th >Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{roles?.find((r) => r.id === user.roleId)?.name ?? ""}</td>
                        <td><HiOutlinePencil className="text-sky-600"/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export { TableUsers };
