import React, { useState } from "react";
import { User } from "@prisma/client";
import { HiOutlinePencil } from "react-icons/hi";
import { ChangeRoleUserDialog } from "@/components/Dialogs/ChangeRoleUserDialog";
import { RoleColor } from "@/components/general/RoleColor";
interface TableProps {
    users: User[];
}

const TableUsers = ({ users }: TableProps) => {


    const [editRolOpen, setEditRolOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);


    const handleOpenEditRol = (user: User) => {
        setSelectedUser(user);
        setEditRolOpen((prev) => !prev);
    };

    return (
        <table className="text-center border-separate  border-spacing-1 table-auto">
            <thead className="">
                <tr>
                    <th >Identificador</th>
                    <th>Rol</th>
                    <th>E-mail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {users.map((user) => (
                    <tr key={user.id} >
                        <td>{user.id}</td>
                        <td ><RoleColor user={user}/></td>
                        <td>{user.email}</td>
                        <td >
                            <HiOutlinePencil
                                className="text-sky-600 hover:text-sky-400 active:text-sky-800  "
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
