import React, { useEffect, useState } from 'react';
import { AiFillAlert } from "react-icons/ai";
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

interface ConfirmationDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm: () => void;
    onCancel: () => void;
    title: string;
    message: string;
    
}
const ConfirmationDialog = ({ open, setOpen, onConfirm, onCancel, title, message }: ConfirmationDialogProps) => {

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  const handleCancel = () => {
    onCancel();
    setOpen(false);
  };

  return (
    <Dialog open={open} >
      <DialogTitle className='flex justify-center items-center space-x-4'><AiFillAlert className="text-yellow-500 text-2xl"/><span>{title}</span></DialogTitle>
      <DialogContent>{message}</DialogContent>
      <div className="flex justify-end p-2">
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleConfirm}>Confirmar</Button>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;