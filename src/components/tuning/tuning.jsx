import React, { useState } from 'react'
import { Background,  Leftside, MainMotorCon, Padding, Rightside} from '../styles/tuning'
import downimg from '../../assets/down-icon.svg'
import blackmenu from '../../assets/black-menu.svg'
import greymenu from '../../assets/grey-menu.svg'
import { TuningCar } from '../mock/tuning'
import TunHmenu from './menus/tunHmenu'
import TunVmenu from './menus/tunVmenu'
import AccordionLeft from '../motor/accordion/accordionleft.jsx'
import TemporaryDrawer from '../404/Vatan.jsx'
import TemporaryDrawert from '../404/Vatanikki.jsx'

const TuningComponent = () => {
  const data = TuningCar.MainDataTuning
  console.log(data);
  const [active,setactive] = useState(true)

  function HandleHmenu() {
    setactive(false)
  }
  function HandleVmenu() {
    setactive(true)
  }
  return (
    <>
    <Padding>
      
    </Padding>

   <Background className='tuning-background'>
    <h6>Home / Motors</h6>
    <h3>Our ranges</h3>
    <h1>Tuning</h1>
   </Background>
   <MainMotorCon className='main-motor-con'>
  <AccordionLeft />
   <Rightside>
    <div className='mini-nav'>
      <div className='mini-nav-left'>
      <TemporaryDrawer />
        <h3>Item </h3>
        <h3 style={{color:'#006DAB'}}>25.156</h3>
      </div>
      <div className='mini-nav-right'>
      <div className='sort-con'>
        <p>Sort by</p>
        <div className='input-con'>
        <input className='select-input' type="text" placeholder='Select'/>
        <img className='down-con' src={downimg} alt="down-icon" />
        </div>
      </div>
      <div className='num-con'>
        <input className='num-input' type="text" />
        <img className='down-con2' src={downimg} alt="down-img" />
      </div>
      <div style={{display:'flex'}}>
       <div onClick={HandleHmenu}>
       <img className='menu-con' src={blackmenu} alt="black-menu-img" />
       </div>
        <div onClick={HandleVmenu}>
        <img className='menu-con2' src={greymenu} alt="grey-menu-img" />
        </div>
      </div>
      </div>
    </div>

          {/* mini nav grid ajralishi */}
          <div className='mini-nav2'>
      <div className='mini-nav-left'>
      <TemporaryDrawert />
        <h3>Item </h3>
        <h3 style={{color:'#006DAB'}}>25.156</h3>
      </div>
      <div style={{display:'flex'}}>
       <div onClick={HandleHmenu}>
       <img className='menu-con' src={blackmenu} alt="black-menu-img" />
       </div>
        <div onClick={HandleVmenu}>
        <img className='menu-con2' src={greymenu} alt="grey-menu-img" />
        </div>
      </div>
      <div className='sort-con'>
        <p>Sort by</p>
        <div className='input-con'>
        <input className='select-input' type="text" placeholder='Select'/>
        <img className='down-con' src={downimg} alt="down-icon" />
        </div>
      </div>
      <div className='num-con'>
        <input className='num-input' type="text" />
        <img className='down-con2' src={downimg} alt="down-img" />
      </div>
     
    </div>
    <hr style={{marginTop:'3px'}}/>
    {active ? <TunVmenu/> : <TunHmenu/>}
  

   </Rightside>
   </MainMotorCon>
   </>
  )
}

export default TuningComponent