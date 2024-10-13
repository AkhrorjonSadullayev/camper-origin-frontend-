import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import secondmini from '../../assets/second-mini.png'
import thirdmini from '../../assets/third-mini.png'
import firstmini from '../../assets/first-mini.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionCon } from './Vatann';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawert() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
    sx={{ width: 300, padding: 2 }} 
    role="presentation"
  >
    <AccordionCon>
      
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
  
  </AccordionCon>
  </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuOutlinedIcon
           sx={{color:"black",
           fontSize: 40, fontWeight: 'bold',
           display:'none','@media (max-width: 640px)': {
             display:"flex",
           },
         }}
        />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)} 
        anchor="left" 
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
