import React from 'react'
import { Container, IconsWrapper, LogoWrapper, MenuWrapper, Menuicon, Navlink } from '../styles/style'
import Logo from '../../assets/Camper.svg'
import cart from '../../assets/cart.svg'
import profile from '../../assets/profile.svg'
import downicon from '../../assets/down-icon.svg'
import menu from '../../assets/menu-icons.svg'

const Navbar = () => {
  return (
    <Container>
      <div className='menu-con'>
      <Menuicon className='menu-left' src={menu}/>
        <LogoWrapper src={Logo}/>
      </div>
       
        <MenuWrapper>
            <Navlink to={'/motor'}>
            <div>Motor</div> 
            </Navlink>
            <Navlink to={'/caravan'}>
            <div>Caravan</div>
            </Navlink>
            <Navlink to={'/tuning'}>
            <div>Tuning</div>
            </Navlink>
            <Navlink to={'/used-car'}>
            <div>Used car</div>
            </Navlink>
            <Navlink to={'/Camping-place'}>
            <div>Camping Place</div>
            </Navlink>
        </MenuWrapper>
        <IconsWrapper>
             <img src={cart} alt="cart-svg" />
             <img className='profile-img' src={profile} alt="profile-svg" />
             <div className='en-down'>
                <p>En</p>
                <img src={downicon} alt="down-icon" />
             </div>
             <Menuicon className='menu-right' src={menu}/>
        </IconsWrapper>
    </Container>
  )
}

export default Navbar