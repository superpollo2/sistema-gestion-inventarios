import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from "../ui/Buttons/Button";
import { SelecMenu } from "../general/SelectMenu";
import { TextField } from "../general/TextField";
import { useInvetoryMovement } from "@/hooks/useInventoryMovenentPost"
import { API_ROUTES } from "@/services/apiConfig";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useSession } from "next-auth/react";

import { DialogBase } from "./DialogBase";


interface deliverablesDialogProps {
    open: boolean
    setDialogOpen: Dispatch<SetStateAction<boolean>>
    material: string
    materialId: string
}

const AddMovement = ({ open, setDialogOpen, material, materialId }: deliverablesDialogProps) => {

    const [numberValue, setNumberValue] = useState<number>(0);
    const { data } = useSession();
    const [tipoMovement, setTipoMovement] = useState<string>('');
    const [loading, setLoading] = useState(false);

    //Campturar el valor de la cantidad del movimiento, que se hace en el componente selecttMenu
    const handleNumberChange = (value: number) => {
        setNumberValue(value);
    };


    //Capturar el valor del tipoMovement
    const handleTipoMovementChange = (value: string) => {
        setTipoMovement(value);
    };

    //Petición al back para realizar el POST con los datos del movimiento
    const handleConfirmAddMovement = async () => {
        setLoading(true);
        const confirmation = toast.loading("Please wait...");

        
        const userId = data?.user?.id 

        try {
            const { success, errorMessage } = await useInvetoryMovement(tipoMovement, materialId, numberValue, userId);

            if (success) {
                // Actualización exitosa
                await mutate(API_ROUTES.inventory);
                toast.update(confirmation, { render: "Movimiento añadido", type: "success", isLoading: false, autoClose: 1000 });
            } else {
                // Actualización fallida
                console.error('Error Añadiendo el movimiento:', errorMessage);
                toast.update(confirmation, { render: errorMessage, type: "error", isLoading: false, autoClose: 1000 });
            }
        } finally {
            setLoading(false);
            setDialogOpen(false);
        }
    }

    return (
        <DialogBase open={open} title={material}>
            <div className="space-y-4 flex flex-col">

                <div className="text-slate-200 font-light text-md flex flex-col justify-center items-center space-y-2">
                    <label>Selecciona un movimiento</label>
                    <SelecMenu onTipoMovementChange={handleTipoMovementChange} />
                </div>
                <div className="text-slate-200 pb-3 font-light text-md flex flex-col justify-center items-center space-y-2">
                    <label>Cantidad del material</label>
                    <TextField value={numberValue} onChange={handleNumberChange} />
                </div>
                <div className="flex flex-row gap-4 mb-5 justify-center">
                <Button text="Guardar" type="secondary" handleClick={handleConfirmAddMovement} />

                    <Button text="Cancelar" type="secondary" handleClick={
                        () => { setDialogOpen(false) }
                    } />
                </div>
            </div>
        </DialogBase>




    );
};

export { AddMovement };