import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SelectSmall from '../../context/dropdown';
import dropdown from '../../../assets/dropdownimg.png'
import ikkinchi from '../../../assets/ikkinchi.png'
import uchinchi from '../../../assets/uchinchi.png'
import tortinchi from '../../../assets/tortinchi.png'
import beshinchi from '../../../assets/beshinchi.png'
import sixth from '../../../assets/uchinchi.png'
import {  BlueTitle, CarInfoFifth, CarInfoFourth, CarInfoSixth, CarInfofirst, CarInfosecond, CarInfothird, ContactComponent, ContactRightSideCon, DropDown } from './tabs';
import AccordionUsage from './accordion/accordionleft.jsx';
import FAQAccordionComponent from './FAQ/FAQ.jsx';
import map from '../../../assets/tashkentMap.png'
import { EmailComponent } from '../../mail/index.jsx';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', }} >
      <BlueTitle style={{overflowX:'scroll'}}>
        <Tabs className='tabs' value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Item reviews" {...a11yProps(0)} style={{width:'150px','@media (max-width: 410px)': {
        width: '20px',
      },}}  />
          <Tab style={{width:'20px'}} label="Q&A" {...a11yProps(1)} />
          <Tab style={{width:'20px'}}  label="FAQ" {...a11yProps(2)} />
          <Tab  style={{width:'20px'}} label="Contact" {...a11yProps(2)} />
        </Tabs>
      </BlueTitle>

      {/* First Tab Start */}

      <CustomTabPanel value={value} index={0}>

       <DropDown >
        <div style={{display:'flex',gap:'5px'}}><h3>Premium Review </h3><h3 style={{color:'#006DAB'}}>35</h3></div>
        <SelectSmall></SelectSmall>
       </DropDown>
       <CarInfofirst>
        <div className='left-con'>
        <img className='car-img-style' src={dropdown} alt="" />
        <div>
            <p style={{fontSize:'18px'}}>Car name</p>
            <p style={{color:'rgba(55, 55, 55, 0.80)',fontSize:'16px'}}>brand</p>
            <p style={{fontSize:'16px;',marginTop:'16px'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </div>
        </div>
        <div  className='grid-container'>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>ID:</p>
                <p style={{fontSize:'14px'}}>254</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Date:</p>
                <p style={{fontSize:'14px'}}>22.02.2022</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Viewed:</p>
                <p style={{fontSize:'14px'}}>135</p>
            </div>
        </div>
       </CarInfofirst>
       <hr style={{border:'1px solid grey',marginTop:'30px',width:'100%' }}/>

       {/* Birinchi Container Tugadi */}

       <CarInfosecond>
        <div className='left-con'>
        <img className='car-img-style' src={ikkinchi} alt="" />
        <div>
            <p style={{fontSize:'18px'}}>Car name</p>
            <p style={{color:'rgba(55, 55, 55, 0.80)',fontSize:'16px'}}>brand</p>
            <p style={{fontSize:'16px;',marginTop:'16px'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </div>
        </div>
        <div  className='grid-container'>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>ID:</p>
                <p style={{fontSize:'14px'}}>254</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Date:</p>
                <p style={{fontSize:'14px'}}>22.02.2022</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Viewed:</p>
                <p style={{fontSize:'14px'}}>135</p>
            </div>
        </div>
       </CarInfosecond>
       <hr style={{border:'1px solid grey',marginTop:'30px',width:'100%' }}/>

         {/* Ikkinchi Container Tugadi */}

         <CarInfothird>
        <div className='left-con'>
        <img className='car-img-style' src={uchinchi} alt="" />
        <div>
            <p style={{fontSize:'18px'}}>Car name</p>
            <p style={{color:'rgba(55, 55, 55, 0.80)',fontSize:'16px'}}>brand</p>
            <p style={{fontSize:'16px;',marginTop:'16px'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </div>
        </div>
        <div  className='grid-container'>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>ID:</p>
                <p style={{fontSize:'14px'}}>254</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Date:</p>
                <p style={{fontSize:'14px'}}>22.02.2022</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Viewed:</p>
                <p style={{fontSize:'14px'}}>135</p>
            </div>
        </div>
       </CarInfothird>
       <hr style={{border:'1px solid grey',marginTop:'30px',width:'100%' }}/>

        {/* Uchinchi Container Tugadi */}

        <CarInfoFourth>
        <div className='left-con'>
        <img className='car-img-style' src={tortinchi} alt="" />
        <div>
            <p style={{fontSize:'18px'}}>Car name</p>
            <p style={{color:'rgba(55, 55, 55, 0.80)',fontSize:'16px'}}>brand</p>
            <p style={{fontSize:'16px;',marginTop:'16px'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </div>
        </div>
        <div  className='grid-container'>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>ID:</p>
                <p style={{fontSize:'14px'}}>254</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Date:</p>
                <p style={{fontSize:'14px'}}>22.02.2022</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Viewed:</p>
                <p style={{fontSize:'14px'}}>135</p>
            </div>
        </div>
       </CarInfoFourth>
       <hr style={{border:'1px solid grey',marginTop:'30px',width:'100%' }}/>

        {/* To'rtinchi Container Tugadi */}

        <CarInfoFifth>
        <div className='left-con'>
        <img className='car-img-style' src={beshinchi} alt="" />
        <div>
            <p style={{fontSize:'18px'}}>Car name</p>
            <p style={{color:'rgba(55, 55, 55, 0.80)',fontSize:'16px'}}>brand</p>
            <p style={{fontSize:'16px;',marginTop:'16px'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </div>
        </div>
        <div className='grid-container'>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>ID:</p>
                <p style={{fontSize:'14px'}}>254</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Date:</p>
                <p style={{fontSize:'14px'}}>22.02.2022</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Viewed:</p>
                <p style={{fontSize:'14px'}}>135</p>
            </div>
        </div>
       </CarInfoFifth>
       <hr style={{border:'1px solid grey',marginTop:'30px',width:'100%' }}/>

          {/* Beshinchi Container Tugadi */}

          <CarInfoSixth>
        <div className='left-con'>
        <img className='car-img-style' src={sixth} alt="" />
        <div>
            <p style={{fontSize:'18px'}}>Car name</p>
            <p style={{color:'rgba(55, 55, 55, 0.80)',fontSize:'16px'}}>brand</p>
            <p style={{fontSize:'16px;',marginTop:'16px'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </div>
        </div>
        <div className='grid-container'>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>ID:</p>
                <p style={{fontSize:'14px'}}>254</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Date:</p>
                <p style={{fontSize:'14px'}}>22.02.2022</p>
            </div>
            <div className='id-con'>
                <p style={{color:'rgba(55, 55, 55, 0.70)',fontSize:'14px'}}>Viewed:</p>
                <p style={{fontSize:'14px'}}>135</p>
            </div>
        </div>
       </CarInfoSixth>
       <hr style={{border:'1px solid grey',marginTop:'30px',width:'100%' }}/>          

      </CustomTabPanel>

        {/* First Tab End */}

         {/* Second Tab Start */}

      <CustomTabPanel value={value} index={1}>
        <AccordionUsage>
        </AccordionUsage>
      </CustomTabPanel>

       {/* Second Tab End */}

        {/* Third Tab Start */}

      <CustomTabPanel value={value} index={2}>
        <FAQAccordionComponent />
      </CustomTabPanel>

      {/* Third Tab End */}

      {/* Fourth Tab Start */}
    
      <CustomTabPanel value={value} index={3}>
        <ContactComponent>
            <div className='main-left-con'>
                <div>
                    <img src={map} alt="map-img" style={{width:'100%'}}  />
                </div>
                <div className='Map-Down-Con'>
                    <div className='Number-con'>
                        <p>Phone number:</p>
                        <h5>+7 237 181 181 </h5>
                        <h5>+7 210 181 191</h5>
                    </div>
                    <div className='Email-con'>
                        <p>E-mail:</p>
                        <h5>logo.uz</h5>
                    </div>
                </div>
            </div>
            <ContactRightSideCon>
        <div className='container'>
            <div className='question'>
                <h1>Have you got a question</h1>
            </div>
            <EmailComponent />
        </div>
    </ContactRightSideCon>
        </ContactComponent>
      </CustomTabPanel>

      {/* Fourth Tab End */}

    </Box>
  );
}
