import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from "../ui/Buttons/Button";
import { SelecMenu } from "../general/SelectMenu";
import { TextField } from "../general/TextField";
import { useAddInventory } from "@/hooks/inventoryMovement";


interface deliverablesDialogProps {
    open: boolean
    setDialogOpen: Dispatch<SetStateAction<boolean>>
    material: string
    materialID: string
}

const AddMovement = ({ open, setDialogOpen, material, materialID }: deliverablesDialogProps) => {

    const { addInventory } = useAddInventory();

    const [numberValue, setNumberValue] = useState<number>(0);

    const handleNumberChange = (value: number) => {
        setNumberValue(value);
    };

    const handleGuardarClick = async () => {
        const materialId = "01" 
        const userId = "clp1xnbnb0000upr8axxxg0yw" 
        const quantity = "5"
        const movementType = "SALIDA"
    
        // Realizar la llamada a la función addInventory
        try {
          const result = await addInventory(materialId, userId, parseInt(quantity), movementType);
          // Manejar el resultado según sea necesario
          console.log("Resultado de addInventory:", result);
        } catch (error) {
          // Manejar errores si es necesario
          console.error("Error al llamar a addInventory:", error);
        }
    
        // Cerrar el diálogo
        setDialogOpen(false);
      };


    return (
        <Dialog open={open}>
            <div className='flex flex-col px-4 py-2 items-center bg-[#03071E] '>

                <DialogTitle className='font-bold'>
                    {material}
                </DialogTitle>
                
                <DialogContent>
                    <SelecMenu />
                </DialogContent>

                <DialogContent className="  flex flex-col items-center">
                    <div className="text-slate-200 pb-3 font-light text-md">
                    <h1>Cantidad del material</h1>
                    </div>
                    
                    <TextField value={numberValue} onChange={handleNumberChange} />
                </DialogContent>

                <div className="flex flex-row gap-4 mb-5">
                    <Button text="Guardar" type="secondary" handleClick={
                        handleGuardarClick} />
                    <Button text="Cancelar" type="secondary" handleClick={
                        () => { setDialogOpen(false) }
                    } />
                </div>
            </div>
        </Dialog>
    );
};

export { AddMovement };