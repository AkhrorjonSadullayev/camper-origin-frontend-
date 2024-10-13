import React from 'react'
import { UsedCar } from '../mock/usedcardetails'
import { VmenuMenuTun, VmenuTuning } from '../styles/usedcar';
import { Link } from 'react-router-dom';
import ministar from '../../assets/bx_bxs-star.svg'

const UsedVmenus = () => {
    const data = UsedCar.MainDataUsedcar
    console.log(data);
  return (
    <VmenuTuning>
        {data.map((value,index)=>{
          return(
            <div key={index}>
              <Link to={`/Used-car/${value.id}`} style={{textDecoration:'none',
            color:'black'}}>
              <VmenuMenuTun>
                <div>
                <img  className='car-img' src={value.car.Image} alt="car-img" />
                </div>
               <div className='right-side'>
                <div className='name-of-car'>
                <h3>{value.car.Name}</h3>
                <h2 style={{color:'#006DAB'}}>{value.car.Cost}</h2>
                </div>
                <h5>{value.car.Brand} <div><img src={ministar} alt="mini-star" />{value.car.Rate}</div></h5>
                <div className='gap'>
                <button className='order-but'>Order</button>
                <button className='order-but'>Compare</button>
              </div>
               </div>
                
              </VmenuMenuTun>
              </Link>
            </div>
          )
        })}
    </VmenuTuning>
  )
}

export default UsedVmenus