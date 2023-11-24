import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { User } from "prisma/prisma-client";
import { SelectOne } from "@/components/general/SelecteMenuRole";
import { mutate } from 'swr';
import { API_ROUTES } from '@/services/apiConfig';
import { toast } from "react-toastify";
import { PrimaryActionButton } from "@/components/ui/Buttons/PrimaryActionButton";
import ConfirmationDialog from "./ConfirmationDialog";
import { usePutUserRole } from "@/hooks/usePutUserRole";
import { DialogBase } from "./DialogBase";

interface ChangeRoleUserProps {
    open: boolean
    setDialogOpen: Dispatch<SetStateAction<boolean>>
    user: User
}

const ChangeRoleUserDialog = ({ open, setDialogOpen, user }: ChangeRoleUserProps) => {

    const roleUser = user.roleId;
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<{ roleId: string | null }>({
        roleId: roleUser
    });

    useEffect(() => {
        // Cada vez que prevRoleId cambia, actualiza el FormData
        setFormData((prevFormData) => ({ ...prevFormData, roleId: roleUser }));
    }, [roleUser]);

    const [showChangeConfirmation, setShowChangeConfirmation] = useState(false);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

    const handleCancel = () => {
        setShowCancelConfirmation((prev) => !prev);
    };

    const handleConfirmCancel = () => {
        setDialogOpen((prev) => !prev);
        setShowCancelConfirmation((prev) => !prev);
    };

    const handleChangeRole = () => {
        if (formData.roleId !== roleUser) {
            setShowChangeConfirmation((prev) => !prev);
        } else {
            toast.info('El usuario ya tiene asignado ese rol');
        }
    };

    const handleDesertCancel = () => {
        setShowCancelConfirmation(false);
        // Puedes agregar lógica adicional si es necesario
    };

    const handleConfirmChangeRole = async () => {
        setLoading(true);
        const confirmation = toast.loading("Por favor espere...");

        try {
            const { success, errorMessage } = await usePutUserRole(user?.id, formData?.roleId ?? '');

            if (success) {
                // Actualización exitosa
                await mutate(API_ROUTES.users);
                toast.update(confirmation, { render: "Role modificado", type: "success", isLoading: false, autoClose: 1000 });
            } else {
                // Actualización fallida
                setFormData({ roleId: roleUser });
                console.error('Error actualizando usuario:', errorMessage);
                toast.update(confirmation, { render: errorMessage, type: "error", isLoading: false, autoClose: 1000 });
            }
        } finally {
            setLoading(false);
            setShowChangeConfirmation(false);
            setDialogOpen(false);
        }
    }

    return (
        <>
            <DialogBase open={open} title="Editar role">
                <>
                    <div className="space-y-5 w-full">

                        <div className="w-full">
                            <input type="text" value={user.email ?? ''} className="p-3 w-full rounded-lg text-slate-200 text text-center " disabled />
                        </div>

                        <div className="text-slate-200 pb-3 font-light text-md flex flex-col justify-center items-center">
                            <label>Selecciona un role</label>
                            <SelectOne formData={formData ?? ''} setFormData={setFormData}/>
                    </div>
                </div>

                <div className="flex flex-row gap-4 mb-5">
                    <PrimaryActionButton
                        text='Actualizar usuario'
                        type='submit'
                        onClick={handleChangeRole} loading={loading} />
                    <PrimaryActionButton
                        text='Cancelar'
                        type='button'
                        onClick={handleCancel} loading={loading} />
                </div>


            </>
        </DialogBase >


            <ConfirmationDialog
                open={showChangeConfirmation}
                setOpen={setShowChangeConfirmation}
                onConfirm={handleConfirmChangeRole}
                onCancel={handleDesertCancel}
                title="Confirmación de cambio de rol"
                message="¿Estás seguro de cambiar el rol del usuario?"
            />

    {/* Dialog de confirmación para cancelar */ }
    <ConfirmationDialog
        open={showCancelConfirmation}
        setOpen={setShowCancelConfirmation}
        onConfirm={handleConfirmCancel}
        onCancel={handleDesertCancel}
        title="Confirmación de cancelación"
        message="¿Estás seguro de cancelar? Se perderán los cambios no guardados."
    />
        </>
    );

};

export { ChangeRoleUserDialog };