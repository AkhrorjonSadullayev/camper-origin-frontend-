import React, { useState } from 'react';
import { Box, Drawer, Button, List,  Divider } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import './menuicon'
import { Firstpart } from './menuicon';
import { Link } from 'react-router-dom';
import profile from '../../../assets/profile.svg'
import cart from '../../../assets/cart.svg'
import SelectVariants from '../../context/ENDOWN';

export default function RightSideDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setIsOpen(open);
  };



  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Firstpart>
          <Link to={'/motor'} style={{textDecoration:'none',color:'black'}}>
          <div className='motor-con'>
          <h4>Motor</h4>
       <ArrowRightOutlinedIcon />
          </div>
          </Link>
          <Link to={'/caravan'} style={{textDecoration:'none',color:'black'}}>
          <div className='motor-con'>
          <h4>Caravan</h4>
       <ArrowRightOutlinedIcon />
          </div>
          </Link>
          <Link to={'/tuning'} style={{textDecoration:'none',color:'black'}}>
          <div className='motor-con'>
          <h4>Tuning</h4>
       <ArrowRightOutlinedIcon />
          </div>
          </Link>
          <Link to={'/Used-car'} style={{textDecoration:'none',color:'black'}}>
          <div className='motor-con'>
          <h4>Used Car</h4>
       <ArrowRightOutlinedIcon />
          </div>
          </Link>
          <Link to={'/Camping-place'} style={{textDecoration:'none',color:'black'}}>
          <div className='motor-con'>
          <h4>Camping Place</h4>
       <ArrowRightOutlinedIcon />
          </div>
          </Link>
          <Link to={'/sign-in'} style={{textDecoration:'none',color:'black'}}>
          <div className='motor-con'>
          <img src={profile} alt="profile-icon" />
          </div>
          </Link>
          <Link to={'/notFound'} style={{textDecoration:'none',color:'black'}}>
          <div className='motor-con'>
          <img src={cart} alt="profile-icon" />
          </div>
          </Link>
         <SelectVariants />
         
       </Firstpart>
      </List>
      <Divider />
      <List>

      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuOutlinedIcon sx={{ color:'black', fontSize: 40, fontWeight: 'bold',display:'none'  ,'@media (max-width: 900px)': {
        display:'flex',
      },'@media (max-width: 400px)': {
       display:'flex',
       flexDirection:'column-reverse'
      },}} />
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </>
  );
}
