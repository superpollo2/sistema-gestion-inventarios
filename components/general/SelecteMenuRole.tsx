import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/material';
import { useGetRoles } from '@/hooks/useGetRoles';


type SelectedOneProps = {
  formData: { roleId: string | null },
  setFormData: React.Dispatch<React.SetStateAction<{ roleId: string | null }>>,
}


const SelectOne = ({formData,setFormData}: SelectedOneProps) => {
  const {roles} = useGetRoles();

  
  const handleChange = (event: SelectChangeEvent) => {
    const newFormData = { ...formData, roleId: event.target.value };
   
    setFormData(newFormData);
  };


 
  return (
    
    <Box >
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120, height: 50 }} className='bg-white rounded-lg'>
        <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={formData.roleId ?? ''}
          onChange={handleChange}
        >
          
          {roles.map( role=>(
            <MenuItem value={role.id} key={role.id}>{role.name}</MenuItem>
          ) 
          
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

export { SelectOne }