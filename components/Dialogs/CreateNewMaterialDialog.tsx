import { useSession } from "next-auth/react";
import React, { Dispatch, SetStateAction, useState } from 'react';
import { PrimaryActionButton } from "../ui/Buttons/PrimaryActionButton";
import { TextField } from "@/components/general/TextField";
import { toast } from "react-toastify";
import ConfirmationDialog from "./ConfirmationDialog";
import { useForm } from "react-hook-form";
import { DialogBase } from "./DialogBase";
import { mutate } from 'swr';
import { usePostMaterial } from "@/hooks/usePostMaterial";
import { API_ROUTES } from "@/services/apiConfig";
interface ChangeRoleUserProps {
    open: boolean
    setDialogOpen: Dispatch<SetStateAction<boolean>>

}

const CreateNewMaterialDialog = ({ open, setDialogOpen }: ChangeRoleUserProps) => {


    const [showChangeConfirmation, setShowChangeConfirmation] = useState(false);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
    const [materialName, setMaterialName] = useState('');
    const [loading, setLoading] = useState(false);
    const [numberValue, setNumberValue] = useState<number>(0);

    const { data } = useSession();


    const handleNumberChange = (value: number) => {
        setNumberValue(value);
    };



    const handleConfirmCreateMaterial = async () => {


        setLoading(true);
        const confirmation = toast.loading("Por favor espere...");

        try {
            const postData = {
                name: materialName,
                quantity: numberValue,
                userId: data?.user.id,
            };

            const { success, errorMessage } = await usePostMaterial(postData);

            if (success) {
                await mutate(API_ROUTES.materials);
                toast.update(confirmation, { render: "Material Creado", type: "success", isLoading: false, autoClose: 1000 });
            } else {
                console.error('Errorcreando usuario:', errorMessage);
                toast.update(confirmation, { render: errorMessage, type: "error", isLoading: false, autoClose: 1000 });
            }


        } finally {
            setLoading(false);
            setShowChangeConfirmation(false);
            setDialogOpen(false);

        }
    }

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
    };


    return (
        <>
            <DialogBase open={open} title="Nuevo Material">


                <div className="space-y-4 flex flex-col">

                    <div className="text-slate-200  font-light text-md w-full flex flex-col justify-center items-center space-y-2">
                        <label >Nombre del material</label>
                        <input
                            type="text"
                            id="nombreMaterial"
                            className="border border-gray-400 p-2 font-semibold text-slate-600 text-center bg-slate-100 rounded-md"
                            placeholder="Ladrillos"
                            autoComplete="off"
                            value={materialName}  
                            onChange={(e) => setMaterialName(e.target.value)}

                        />
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

            </DialogBase>


            <ConfirmationDialog
                open={showChangeConfirmation}
                setOpen={setShowChangeConfirmation}
                onConfirm={handleConfirmCreateMaterial}
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