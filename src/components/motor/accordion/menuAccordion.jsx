import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import AccordionLeft from './accordionleft.jsx';

export default function TajribaComponent() {
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' && anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
  <div><AccordionLeft /> </div>
      </List>
    </Box>
  );
// {anchor}
  return (
    <div >  

      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon  sx={{color:"black",
              fontSize: 40, fontWeight: 'bold',
              display:'none','@media (max-width: 630px)': {
                display:"flex",marginRight:'-130px'
              },
            }}/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button 
          onClick={toggleDrawer(anchor, true)}>
            <MenuIcon  sx={{color:"black",
            fontSize: 40, fontWeight: 'bold',
            display:'none','@media (max-width: 1200px)': {
              display:"flex",'@media (max-width: 630px)': {
                display:"none",
              }
            },
            }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

    </div>
  );
}



{/* <MenuOutlinedIcon sx={{textDecoration:'none',color:'black',fontSize: 40, fontWeight: 'bold',
marginRight:'-20px',display:'none','@media (max-width: 1200px)': {
    display:"flex",
  },'@media (max-width: 600px)': {
    marginLeft:'-50px',
  },}}/> */}