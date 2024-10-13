import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box sx={{ width: 500, maxWidth: '100%',
    backgroundColor:'rgb(226, 221, 221)',borderRadius:'10px',
    border:'none',marginTop:'20px' }}>
      <TextField type={'text'} fullWidth label="Your name" id="fullWidth" placeholder='Your name' name='from_name'/>
    </Box>
  );
}
