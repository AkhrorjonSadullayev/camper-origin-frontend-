import React from 'react'
import { Container, Iconwrapper, Logowrapper,  Menuwrapper, Navlink, Proflink } from '../styles/style'
import campericon from '../../assets/Camper.svg'
import downicon from '../../assets/down-icon.svg'
import carticon from '../../assets/cart.svg'
import proficon from '../../assets/profile.svg'
import menuicon from '../../assets/menu-icons.svg'
import RightSideDrawer from '../motor/iconmenu/menuicon.jsx'
import SelectVariants from './ENDOWN.jsx'


const Navbar = () => {
  return (
    <Container>
        <div className='left-con'>
            <RightSideDrawer   src={menuicon}/>
            <Navlink to={'/'}>
        <Logowrapper src={campericon}/>
        </Navlink>
        </div>
        <Menuwrapper>
            <Navlink to={'/motor'} >
            <div className='menu-con'>
                <p>Motor</p>
                <img src={downicon} alt="down-icon" />
            </div>
            </Navlink>
           <Navlink to={'/caravan'}>
           <div className='menu-con'>
                <p>Caravan</p>
                <img src={downicon} alt="down-icon" />
            </div>
           </Navlink>
            <Navlink to={'/tuning'}>
            <div className='menu-con'>
                <p>Tuning</p>
                <img src={downicon} alt="down-icon" />
            </div>
            </Navlink>
            <Navlink to={'/Used-car'}>
            <div className='menu-con'>
                <p>Used Car</p>
                <img src={downicon} alt="down-icon" />
            </div>
            </Navlink>
            <Navlink to={'/Camping-place '}>
            <div>
            <p>Camping Place</p>
            </div>
            </Navlink>
            
        </Menuwrapper>
        <Iconwrapper>
            <img src={carticon} alt="cart-icon-img" />
            <Proflink to={'/sign-in/'}>
            <img className='portfolio-con' src={proficon} alt="profile-icon-img" />
            </Proflink>
            <SelectVariants />
        </Iconwrapper>
    </Container>
  )
}

export default Navbar