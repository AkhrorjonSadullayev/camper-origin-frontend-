import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120,marginTop:'-10px','@media (max-width: 500px)': {
        display:'none',
      },}}>
        <InputLabel id="demo-simple-select-standard-label">language</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>Uzbek</MenuItem>
          <MenuItem value={30}>Russian</MenuItem>
          <MenuItem value={40}>Korean</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

