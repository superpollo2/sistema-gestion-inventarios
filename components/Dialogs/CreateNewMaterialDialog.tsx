import { useSession } from "next-auth/react";
import React, { Dispatch, SetStateAction, useState } from 'react';
import { PrimaryActionButton } from "../ui/Buttons/PrimaryActionButton";
import { TextField } from "@/components/general/TextField";
import { toast } from "react-toastify";
import ConfirmationDialog from "./ConfirmationDialog";
import { useForm } from "react-hook-form";
import { DialogBase } from "./DialogBase";
import axios from "axios";
interface ChangeRoleUserProps {
    open: boolean
    setDialogOpen: Dispatch<SetStateAction<boolean>>

}

const CreateNewMaterialDialog = ({ open, setDialogOpen }: ChangeRoleUserProps) => {

    const { data } = useSession();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [showChangeConfirmation, setShowChangeConfirmation] = useState(false);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

    const [numberValue, setNumberValue] = useState<number>(0);

    const handleNumberChange = (value: number) => {
        setNumberValue(value);
    };

    console.log('valor numerico', numberValue)
    const onSubmit = handleSubmit(async (dataForm) => {
        try {
            const postData = {
                name: dataForm.name,
                quantity: numberValue,
                userId: data?.user.id ,
            };

           const response = await axios.post('api/materials', postData);

            console.log(response.data);
            toast.success('🐹 Mascota registrada!')
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('💀 Error submitting form');
        } finally {
            setShowChangeConfirmation(false);
            setDialogOpen(false);
        }

    });


    
  

    const handleCancel = () => {
        setShowCancelConfirmation((prev) => !prev);
    };

    const handleConfirmCancel = () => {
        setDialogOpen((prev) => !prev);
        setShowCancelConfirmation((prev) => !prev);
    };

    const handleChangeRole = () => {
        setShowChangeConfirmation((prev) => !prev);
    };

    const handleDesertCancel = () => {
        setShowCancelConfirmation(false);
        // Puedes agregar lógica adicional si es necesario
    };


    return (
        <>
            <DialogBase open={open} title="Nuevo Material">

                <form onSubmit={onSubmit}>
                    <div className="space-y-4 flex flex-col">

                        <div className="text-slate-200  font-light text-md w-full flex flex-col justify-center items-center space-y-2">
                            <label >Nombre del material</label>
                            <input
                                type="text"
                                className="border border-gray-400 p-2 font-semibold text-slate-600 text-center bg-slate-100 rounded-md "
                                placeholder="Ladrillos"
                                autoComplete="off"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "El nombre es requerido",
                                    },
                                })}
                            />
                            {errors.name && errors.name.message ? (
                                <span className="block text-red-400 text-xs">
                                    {String(errors.name.message)}
                                </span>
                            ) : null}
                        </div>

                        <div className="text-slate-200 pb-3 font-light text-md flex flex-col justify-center items-center space-y-2">
                            <label>Cantidad</label>
                            <TextField
                                value={numberValue}
                                onChange={handleNumberChange} />
                        </div>


                    </div>

                    <div className="flex flex-row justify-center gap-4 mb-5">
                        <PrimaryActionButton
                            text='Crear'
                            type='submit'
                            onClick={handleChangeRole} loading={false} />
                        <PrimaryActionButton
                            text='Cancelar'
                            type='button'
                            onClick={handleCancel} loading={false} />
                    </div>

                </form>
            </DialogBase>


            <ConfirmationDialog
                open={showChangeConfirmation}
                setOpen={setShowChangeConfirmation}
                onConfirm={handleConfirmCancel}
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
    )
};

export { CreateNewMaterialDialog };