import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label"><p style={{color:'#006DAB'}}></p></InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        onChange={handleChange}
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={10}>Best</MenuItem>
        <MenuItem value={20}>Premium</MenuItem>
        <MenuItem value={30}>Turbo</MenuItem>
      </Select>
    </FormControl>
  );
}
