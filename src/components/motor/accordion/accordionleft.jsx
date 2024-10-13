import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Leftside } from './accordionleft';
import firstmini from '../../../assets/first-mini.png'
import secondmini from '../../../assets/second-mini.png'
import thirdmini from '../../../assets/third-mini.png'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import AnchorTemporaryDrawer from '../iconmenu/menuicon.jsx';
import TemporaryDrawer from '../../404/Vatan.jsx';

export default function AccordionLeft() {
  return (
    <Leftside>
    <div>
    <Accordion defaultExpanded style={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <h3>Cost of car</h3>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
        <div className='from-to-con'>
    <div>
      <p>from</p>
      <input type="text" className='from-input' />
    </div>
    <div>
      <p>to</p>
      <input type="text" className='from-input' />
    </div>
    </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Brand</h3>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
        <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Aidal" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Knal" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="escape" />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Company</h3>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
        <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="escape" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Aidal" />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>License type</h3>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
        <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="1 year" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="2 years" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="1.5 years" />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Number of travelers</h3>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
        <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="2" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="3-4" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="5+" />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Location</h3>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
        <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Seoul" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Korea" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Pusan" />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <div className='but-con'>
      <button className='cancel-but'>Cancel</button>
      <button className='search-but'>Search</button>
    </div>
    <h3 style={{color:'#006DAB',marginTop:'50px'}}>Compare</h3>
    </div>
    <div className='mini-cars-con'>
      <div className='mini-con'> 
      <img className='mini-car' src={firstmini} alt="mini-car-img" />
      </div>
     <div className='mini-con'>
     <img className='mini-car'  src={secondmini} alt="mini-car-img" />
     </div>
     <div className='mini-con'>
     <img className='mini-car'  src={thirdmini} alt="mini-car-img" />
     </div>
    </div>
    <Link to={'/compare'}>
    <button  className='Compare-but'>Compare</button>
    </Link>
    <AnchorTemporaryDrawer>
    </AnchorTemporaryDrawer>
    <TemporaryDrawer />
    </Leftside>
    
  );
}


