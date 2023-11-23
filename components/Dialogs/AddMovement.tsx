import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from "../ui/Buttons/Button";
import { SelecMenu } from "../general/SelectMenu";
import { TextField } from "../general/TextField";
import { useInvetoryMovement } from "@/hooks/useInventoryMovenentPost"
import { API_ROUTES } from "@/services/apiConfig";
import { toast } from "react-toastify";
import { mutate } from "swr";
import inventory from "@/pages/inventarios";
import { useSession } from "next-auth/react";

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


    const handleNumberChange = (value: number) => {
        setNumberValue(value);
    };

    //Capturar el valor del tipoMovement
    const handleTipoMovementChange = (value: string) => {
        setTipoMovement(value);
    };

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
            // setLoading(false);
            //setShowChangeConfirmation(false);
            setDialogOpen(false);
        }
    }

    return (
        <Dialog open={open}>
            <div className='flex flex-col px-4 py-2 items-center bg-[#03071E] '>

                <DialogTitle className='font-bold text-white'>
                    {material}
                </DialogTitle>

                <DialogContent>
                    <SelecMenu onTipoMovementChange={handleTipoMovementChange} />
                </DialogContent>

                <DialogContent className="  flex flex-col items-center">
                    <div className="text-slate-200 pb-3 font-light text-md">
                        <h1>Cantidad del material</h1>
                    </div>

                    <TextField value={numberValue} onChange={handleNumberChange} />
                </DialogContent>

                <div className="flex flex-row gap-4 mb-5">
                    <Button text="Guardar" type="secondary" handleClick={handleConfirmAddMovement} />
                    <Button text="Cancelar" type="secondary" handleClick={
                        () => { setDialogOpen(false) }
                    } />
                </div>
            </div>
        </Dialog>
    );
};

export { AddMovement };