import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import DisableElevation from '../mock/input/sendButton.jsx';
import EmailInput from '../mock/input/emailinput.jsx';
import FullWidthTextField from '../mock/input/input.jsx';
import MultilineTextFields from '../mock/input/questionInput.jsx';
import Snackbar from '@mui/material/Snackbar';

export const EmailComponent = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_edh9nur', 'template_f8q8jo7', form.current, {
        publicKey: 'HXQh2x-TSbkcR5fhU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setOpen(true);
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          setOpen(false);
        },
      );
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <FullWidthTextField />
      <EmailInput />
      <MultilineTextFields />
      <DisableElevation />
    </form>
    <Snackbar
    open={open}
    autoHideDuration={5000}
    onClose={setOpen}
    message="This Snackbar will be dismissed in 5 seconds."/>
  </>
  );
};
