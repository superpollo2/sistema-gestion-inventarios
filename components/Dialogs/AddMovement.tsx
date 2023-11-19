import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from "../ui/Buttons/Button";
import { SelecMenu } from "../general/SelectMenu";
import { TextField } from "../general/TextField";

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

    return (
        <Dialog open={open}>
            <div className='flex flex-col px-4 py-2 items-center'>
                <DialogTitle className='font-bold'>
                    {material}
                </DialogTitle>
                <DialogContent>
                    <SelecMenu />
                </DialogContent>

                <DialogContent className="flex flex-col items-center font-bold">
                    <h1>Cantidad del material</h1>
                    <TextField value={numberValue} onChange={handleNumberChange} />
                </DialogContent>

                <div>
                    <Button text="Guardar" type="secondary" handleClick={
                        () => { setDialogOpen(false) }
                    } />
                    <Button text="Cancelar" type="secondary" handleClick={
                        () => { setDialogOpen(false) }
                    } />
                </div>
            </div>
        </Dialog>
    );
};

export { AddMovement };