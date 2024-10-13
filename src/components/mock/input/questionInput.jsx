import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <Box 
      component="form"
      sx={{ '& .MuiTextField-root': {  m: 1, 
        width: '49ch',maxWidth:'100%'
      ,backgroundColor:'rgb(226, 221, 221)',
      borderRadius:'10px', 
      marginLeft:'-2px' ,'@media (max-width: 440px)': {
        width: '42ch',
      },'@media (max-width: 410px)': {
        width: '37ch',
      },'@media (max-width: 396px)': {
        width: '35ch',
      },'@media (max-width: 380px)': {
        width: '33ch',
      },'@media (max-width: 360px)': {
        width: '30ch',
      },} }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="message"
          name='message'
          multiline
          rows={4}
          placeholder='Your question'
        />
      </div>
    </Box>
  );
}
