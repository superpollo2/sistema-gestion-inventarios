import { useGetRoles } from "@/hooks/useGetRoles";
import React, { useState } from "react";
import { User } from "@prisma/client";
import { HiOutlinePencil } from "react-icons/hi";
import { ChangeRoleUserDialog } from "@/components/Dialogs/ChangeRoleUserDialog";
import { ToastContainer } from "react-toastify";
interface TableProps {
    users: User[];
}

const TableUsers = ({ users }: TableProps) => {


    const [editRolOpen, setEditRolOpen] = useState(false);
    const { roles } = useGetRoles();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleOpenEditRol = (user: User) => {
        setSelectedUser(user);
        setEditRolOpen((prev) => !prev);
    };

    return (
        <table className="text-center border-separate border-spacing-1 table-auto">
            <thead className="">
                <tr>
                    <th>Identificador</th>
                    <th>E-mail</th>
                    <th>Rol</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{roles?.find((r) => r.id === user.roleId)?.name ?? ""}</td>
                        <td>
                            <HiOutlinePencil
                                className="text-sky-600"
                                onClick={() => handleOpenEditRol(user)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>

            {selectedUser && (


                <ChangeRoleUserDialog
                    open={editRolOpen}
                    setDialogOpen={setEditRolOpen}
                    user={selectedUser}
                />


            )}
        </table>
    );
};


export { TableUsers };
