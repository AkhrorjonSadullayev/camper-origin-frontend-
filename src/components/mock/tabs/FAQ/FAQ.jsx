import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FullWidthTextField from '../../input/input';
import EmailInput from '../../input/emailinput';
import MultilineTextFields from '../../input/questionInput';
import DisableElevation from '../../input/sendButton';
import { FAQ, FAQRightSideCon, FaqAccordion } from './FAQ';
import { Accordion } from '@mui/material';
import { EmailComponent } from '../../../mail';

export default function FAQAccordionComponent() {
  return (
    <FAQ>

    <div className='acc'> 
      <Accordion defaultExpanded style={{width:'100%',marginTop:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Frequently asked questions </h3>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion   style={{width:'700px',maxWidth:'100vw',marginTop:'10px'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <h3>Frequently asked questions </h3>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion  style={{width:'100%',marginTop:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h3>Frequently asked questions </h3>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion style={{width:'100%',marginTop:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h3>Frequently asked questions </h3>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion  style={{width:'100%',marginTop:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <h3>Frequently asked questions </h3>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion style={{width:'100%',marginTop:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h3>Frequently asked questions </h3>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>
    </div>

    {/* Middle */}

    <FAQRightSideCon>
        <div className='container'>
            <div className='question'>
                <h1>Have you got a question</h1>
            </div>
            <EmailComponent />

        </div>
    </FAQRightSideCon>

    </FAQ>
  );
}
