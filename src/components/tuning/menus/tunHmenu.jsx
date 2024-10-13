import React from 'react'
import { GridTuning, TuningMenu } from '../../styles/tuning'
import { Link } from 'react-router-dom'
import { TuningCar } from '../../mock/tuning'
import ministar from '../../../assets/bx_bxs-star.svg'

const TunHmenu = () => {
    const data = TuningCar.MainDataTuning
    console.log(data);
  return (
       <GridTuning>
      {data.map((value,index)=>{
        return(
         <div key={index}>
           <TuningMenu>
            <Link to={`/tuning/${value.id}`} style={{textDecoration:'none',
            color:'black'}}>
              <img style={{width:'202px',height:'137px',borderRadius:'20px'}} src={value.car.Image} alt='car-img'/>
              <h3>{value.car.Name}</h3>
              <h5>{value.car.Brand}<div><img src={ministar} alt="mini-star" />{value.car.Rate}</div> </h5>
              <h2 style={{color:'#006DAB'}}>{value.car.Cost}</h2>
              <div className='gap'>
                <button className='order-but'>Order</button>
                <button className='order-but'>Compare</button>
              </div>
            </Link>
          </TuningMenu>
         </div>
        )
      })}
    </GridTuning> 
  )
}

export default TunHmenu