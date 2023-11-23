import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelecMenu = () => {
  const [material, setMaterial] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMaterial(event.target.value as string);
  };

  return (
    <Box >
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120, height: 50 }} className='bg-white rounded-lg'>
        <InputLabel id="demo-simple-select-filled-label">Tipo </InputLabel>
        <Select
          labelId="matrial-select-label"
          id="material"
          value={material}
          onChange={handleChange}
        >
          <MenuItem value={1}>Entrada</MenuItem>
          <MenuItem value={2}>Salida</MenuItem>
        </Select>
      </FormControl>
    </Box>
   
  );
}

export { SelecMenu }