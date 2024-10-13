import React from 'react'
import '../compare/compare'
import { CompareMainCon, CompareOptions, CompareOptionsFirst, CompareOptionsSecond, CompareOptionsThird } from '../compare/compare'
import { Padding } from '@mui/icons-material'
import ellipse from '../../../assets/Ellipse 10.svg'
import comparecar from '../../../assets/compare-car.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CompareComponent = () => {
  return (
    <>
   <Padding>
   </Padding>
    <CompareMainCon> 
        <div className='backgroundCompare'>
            <p>Home / Motors / Compare</p>
            <h1>Compare our models</h1>
        </div>
        <div className='title-con'>
            <h1>Compare Models</h1>
            <div className='add-con'>
                <div>
                <img style={{marginLeft:'-11px'}} src={ellipse} alt="circle-img" />
                <p className='plus'>+</p>
                </div>
                <h3 style={{fontSize:'25px',marginBottom:'-5px'}}>Add model</h3>
            </div>
        </div>

          <div className='container-wrap'> {/* 3 Container wrap */}

        {/* First Compare Car start */}
       
       <CompareOptionsFirst>
        <div className='container-one'>
            <div className='compare-car-img'>
                <img src={comparecar} alt="compare-car-img" />
            </div>
            <h1 style={{marginTop:'20px'}}>Name of car</h1>
        </div>
        <div style={{marginTop:'20px'}}>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
         <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
    </div>
    <Stack spacing={2} direction="row">
      <Button className='order-but' variant="outlined">Order</Button>
    </Stack>
       </CompareOptionsFirst>

        {/* First Compare Car End */}

        {/* Second Compare Car Start */}

       <CompareOptionsSecond>

       <div className='container-one'>
            <div className='compare-car-img'>
                <img src={comparecar} alt="compare-car-img" />
            </div>
            <h1 style={{marginTop:'20px'}}>Name of car</h1>
        </div>
        <div style={{marginTop:'20px'}}>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
         <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
    </div>
    <Stack spacing={2} direction="row">
      <Button className='order-but' variant="outlined">Order</Button>
    </Stack>

       </CompareOptionsSecond>

       {/* Second Compare Car End */}

        {/* Third Compare Car Start */}

        <CompareOptionsThird>
        <div className='container-one'>
            <div className='compare-car-img'>
                <img src={comparecar} alt="compare-car-img" />
            </div>
            <h1 style={{marginTop:'20px'}}>Name of car</h1>
        </div>
        <div style={{marginTop:'20px'}}>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
        <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <p style={{fontSize:'18px',color:'rgba(55, 55, 55, 0.80)'}}>Model</p>
        </AccordionSummary>
        <AccordionDetails>
         <p style={{color:'rgba(55, 55, 55, 0.80)'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
    </div>
    <Stack spacing={2} direction="row">
      <Button className='order-but' variant="outlined">Order</Button>
    </Stack>
        </CompareOptionsThird>

         {/* Third Compare Car End */}

         </div>
    </CompareMainCon>
    </>
  )
}

export default CompareComponent