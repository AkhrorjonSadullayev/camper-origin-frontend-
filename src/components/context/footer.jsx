import React from 'react'
import { Footercon } from '../styles/style'
import youtube from '../../assets/cib_youtube.svg'
import instagram from '../../assets/Vector.svg'
import naver from '../../assets/simple-icons_naver.svg'

const Footer = () => {
  return (
    <Footercon>
        <div className='footer-con'>

            <div className='footer-container'> 
            <h1 style={{fontSize:'40px',marginTop:'50px'}}>Camper</h1>
            <div style={{marginTop:'60px'}}>
                <h3>Services</h3>
                <div className='gap-p'>
                    <p>Camping</p>
                    <p>Lodging</p>
                    <p>Harbor</p>
                    <p>Day Use</p>
                </div>
            </div>

            <div style={{marginTop:'60px'}}>
                <h3>Menu</h3>
                <div className='gap-p'>
                    <p>About</p>
                    <p>Services</p>
                    <p>Booking</p>
                    <p>Blog</p>
                </div>
            </div>

            <div style={{marginTop:'60px'}}>
                <h3>Contact</h3>
                <div className='gap-p'>
                    <div>
                        <img style={{width:'25px',marginLeft:'5px'}} src={youtube} alt="youtube-icon-img" />
                        <img style={{width:'25px',marginLeft:'5px'}} src={instagram} alt="instagram-icon-img" />
                        <img style={{width:'25px', marginLeft:'5px'}} src={naver} alt="naver-icon-img" />
                    </div>
                    <p>021 Korea Seul, LA</p>
                    <p>camper@example.com</p>
                    <p>(021) 345-6789-99</p>
                </div>
            </div>
            </div>

            <div className='center-logo'>
                <h1 style={{fontSize:'40px'}}>Logo</h1>
                <div>
                        <img style={{width:'25px',marginLeft:'5px'}} src={youtube} alt="youtube-icon-img" />
                        <img style={{width:'25px',marginLeft:'5px'}} src={instagram} alt="instagram-icon-img" />
                        <img style={{width:'25px', marginLeft:'5px'}} src={naver} alt="naver-icon-img" />
                </div>
            </div>
        </div>
    </Footercon>
  )
}

export default Footer