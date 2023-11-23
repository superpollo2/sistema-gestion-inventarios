import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelecMenu = ({ onTipoMovementChange }: { onTipoMovementChange: (value: string) => void }) => {
  const [tipoMovement, setTipoMovement] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTipoMovement(event.target.value as string);
    const value = event.target.value as string;
    setTipoMovement(value);
    onTipoMovementChange(value);
  };

  return (
    <Box sx={{ minWidth: 200}}  className='bg-slate-100 rounded-md '>
      <FormControl fullWidth className='flex items-center'>
        
        <InputLabel id="material-select" className='font-semibold text-slate-600'>Tipo de Movimiento</InputLabel>
        <Select
          labelId="material-select"
          id="material"
          value={tipoMovement}
          label="Material"
          onChange={handleChange}
        >
          <MenuItem value={"ENTRADA"}>Entrada</MenuItem>
          <MenuItem value={"SALIDA"}>Salida</MenuItem>
        </Select>

      </FormControl>
    </Box>
  );
}

export { SelecMenu }