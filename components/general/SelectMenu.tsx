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
    <Box sx={{ minWidth: 200}}  className='bg-slate-100 rounded-md'>
      <FormControl fullWidth >
        
        <InputLabel id="material-select" className='font-semibold text-slate-600'>Tipo de Movimiento</InputLabel>
        <Select
          labelId="material-select"
          id="material"
          value={material}
          label="Material"
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