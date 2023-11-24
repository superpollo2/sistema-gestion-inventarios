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
    <Box >
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120, height: 50 }} className='bg-white rounded-lg'>
        <InputLabel id="demo-simple-select-filled-label">Tipo </InputLabel>
        <Select
          labelId="matrial-select-label"
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