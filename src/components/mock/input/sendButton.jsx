import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  return (
    <Button type={'submit'}   variant="contained" disableElevation style={{width:'100%'}}>
      Send question
    </Button>
  );
}