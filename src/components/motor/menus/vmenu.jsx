import React from 'react'
import { Campcar } from '../../mock/motor'
import { VmenuMenu, VmenuMotor } from '../../styles/motor';
import { Link } from 'react-router-dom';
import ministar from '../../../assets/bx_bxs-star.svg'

const Vmenu = () => {
    const data = Campcar.maindata
    console.log(data);
  return (
    <VmenuMotor>
        {data.map((value,index)=>{
          return(
            <div key={index}>
              <Link to={`/motor/${value.id}`} style={{textDecoration:'none',
            color:'black'}}>
              <VmenuMenu>
                <div>
                <img  className='car-img' src={value.car.Image} alt="car-img" />
                </div>
               <div className='right-side'>
                <div className='name-of-car'>
                <h3>{value.car.name}</h3>
                <h2 style={{color:'#006DAB'}}>{value.car.Cost}</h2>
                </div>
                <h5>{value.car.Brand} <div><img src={ministar} alt="mini-star" />{value.car.Rate}</div></h5>
                <div className='gap'>
                <button className='order-but'>Order</button>
                <button className='order-but'>Compare</button>
              </div>
               </div>
                
              </VmenuMenu>
              </Link>
            </div>
          )
        })}
    </VmenuMotor>
  )
}

export default Vmenu