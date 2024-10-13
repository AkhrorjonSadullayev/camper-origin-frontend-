import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QAmain, RightSideCon } from './accordionleft';
import FullWidthTextField from '../../input/input';
import EmailInput from '../../input/emailinput';
import MultilineTextFields from '../../input/questionInput';
import DisableElevation from '../../input/sendButton';
import { EmailComponent } from '../../../mail';

export default function AccordionUsage() {
  return (
    <QAmain>

    <div className='acc'> 
      <Accordion defaultExpanded style={{boxShadow:'none',width:'100%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>name</p>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion   style={{boxShadow:'none',width:'700px',maxWidth:'100vw'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <p>name</p>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion  style={{boxShadow:'none',width:'100%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <p>name</p>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion style={{boxShadow:'none',width:'100%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <p>name</p>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion  style={{boxShadow:'none',width:'100%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p>name</p>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>

      <Accordion style={{boxShadow:'none',width:'100%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <p>name</p>
        </AccordionSummary>
        <hr style={{border:'0.5px solid grey'}}/>
        <AccordionDetails style={{marginTop:'5px'}}>
        Question Lorem ipsum dolor sit amet ?
        </AccordionDetails>
      </Accordion>
    </div>

    {/* Middle */}

    <RightSideCon>
        <div className='container'>
            <div className='question'>
                <h1>Send a question</h1>
            </div>
            <EmailComponent />

        </div>
    </RightSideCon>

    </QAmain>
  );
}
