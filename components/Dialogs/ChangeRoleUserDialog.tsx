import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { User } from "prisma/prisma-client";
import { SelectOne } from "@/components/general/Selected";
import { mutate } from 'swr';
import axios from "axios";
import { API_ROUTES } from '@/services/apiConfig';
import { toast } from "react-toastify";
import { PrimaryActionButton } from "@/components/ui/Buttons/PrimaryActionButton";
import ConfirmationDialog from "./ConfirmationDialog";
import { Load } from "../general/Load";
import { Spinner } from "../general/spiner";

interface ChangeRoleUserProps {
    open: boolean
    setDialogOpen: Dispatch<SetStateAction<boolean>>
    user: User
}

const ChangeRoleUserDialog = ({ open, setDialogOpen, user }: ChangeRoleUserProps) => {

    const roleUser = user.roleId;
    const [loading, setLoading] = useState(false);


    console.log('userid', user.id)


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

        try {
            // request para actualizar el usuario
            await axios.request({
                method: 'PUT',
                url: `${API_ROUTES.users}/${user?.id ?? ''}`,
                data: { roleId: formData.roleId },
            });

            // actualizacion de la tabla de usuarios
            await mutate(API_ROUTES.users);
            toast.success('Usuario actualizado correctamente');
            
        } catch (error: any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received. Request details:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error details:", error.message);
            }
            setFormData({ roleId: roleUser });
            toast.error('Error actualizando el usuario');
        } finally {
            setLoading(false);
            setShowChangeConfirmation(false);
            setDialogOpen(false);
        }


    };

    return (
        <>
            <Dialog
                open={open}
                onClose={() => setDialogOpen(false)}>
                <div className='flex flex-col px-4 py-2 items-center bg-[#03071E] '>

                    <DialogTitle className='font-bold text-white'>
                        <span>Editar role</span>
                    </DialogTitle>

                    <DialogContent className="  flex flex-col items-center space-y-5 ">
                        {loading ? (
                            <div>
                                <Spinner color={'white'}/>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-5 w-full">

                                    <div className="w-full">
                                        <input type="text" value={user.email ?? ''} className="p-3 w-full rounded-lg text-slate-200 text text-center " disabled />
                                    </div>

                                    <div className="text-slate-200 pb-3 font-light text-md flex flex-col justify-center items-center">
                                        <h1>Selecciona un role</h1>
                                        <SelectOne formData={formData ?? ''} setFormData={setFormData} />
                                    </div>
                                </div>


                                <div className="flex flex-row gap-4 mb-5">

                                    <PrimaryActionButton
                                        text='Actualizar usuario'
                                        type='submit'
                                        onClick={handleChangeRole} loading={false} />
                                    <PrimaryActionButton
                                        text='Cancelar'
                                        type='button'
                                        onClick={handleCancel} loading={false} />


                                </div>
                            </>
                        )};
                    </DialogContent>


                </div>
            </Dialog>

            <ConfirmationDialog
                open={showChangeConfirmation}
                setOpen={setShowChangeConfirmation}
                onConfirm={handleConfirmChangeRole}
                onCancel={handleDesertCancel}
                title="Confirmación de cambio de rol"
                message="¿Estás seguro de cambiar el rol del usuario?"
            />

            {/* Dialog de confirmación para cancelar */}
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