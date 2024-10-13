import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EmailInput() {
  return (
    <Box sx={{ width: 500, maxWidth: '100%',
    backgroundColor:'rgb(226, 221, 221)',borderRadius:'10px',
    border:'none',marginTop:'10px' }}>
      <TextField type={'email'} fullWidth label="user-mail" id="fullWidth" placeholder='Your email'
       name='user_mail'/>
    </Box>
  );
}