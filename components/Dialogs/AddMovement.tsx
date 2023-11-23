import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from "../ui/Buttons/Button";
import { SelecMenu } from "../general/SelectMenu";
import { TextField } from "../general/TextField";
import { DialogBase } from "./DialogBase";

interface deliverablesDialogProps {
    open: boolean
    setDialogOpen: Dispatch<SetStateAction<boolean>>
    material: string
}

const AddMovement = ({ open, setDialogOpen, material }: deliverablesDialogProps) => {

    const [numberValue, setNumberValue] = useState<number>(0);

    const handleNumberChange = (value: number) => {
        setNumberValue(value);
    };

    console.log(material)
    return (
        <DialogBase open={open} title={material}>
            <div className="space-y-4 flex flex-col">

                <div className="text-slate-200 font-light text-md flex flex-col justify-center items-center space-y-2">
                    <label>Selecciona un movimiento</label>
                    <SelecMenu />
                </div>
                <div className="text-slate-200 pb-3 font-light text-md flex flex-col justify-center items-center space-y-2">
                    <label>Cantidad del material</label>
                    <TextField value={numberValue} onChange={handleNumberChange} />
                </div>
                <div className="flex flex-row gap-4 mb-5 justify-center">
                    <Button text="Guardar" type="secondary" handleClick={
                        () => { setDialogOpen(false) }
                    } />
                    <Button text="Cancelar" type="secondary" handleClick={
                        () => { setDialogOpen(false) }
                    } />
                </div>
            </div>
        </DialogBase>




    );
};

export { AddMovement };