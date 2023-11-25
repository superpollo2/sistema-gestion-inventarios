
import React, { Dispatch, SetStateAction} from 'react';
import { Dialog, DialogContent, DialogTitle } from "@mui/material"

interface DialogBaseProps {
    title: string,
    open: boolean,
    setDialogOpen?: Dispatch<SetStateAction<boolean>>,
    children: React.ReactNode,
}
const DialogBase = ({ title, open, children }: DialogBaseProps) => {
    return (
        <Dialog
            open={open}>
            <div className='flex flex-col px-4 py-2 items-center bg-[#03071E] '>

                <DialogTitle className='font-bold text-white'>
                    <span>{title}</span>
                </DialogTitle>

                <DialogContent className="  flex flex-col items-center  space-y-6 ">
                    {children}
                </DialogContent>


            </div>
        </Dialog>
    );

};

export { DialogBase }