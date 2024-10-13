import React from 'react'
import { Caravanmenu, GridCaravan } from '../../styles/caravan'
import { Link } from 'react-router-dom'
import ministar from '../../../assets/bx_bxs-star.svg'
import { CaravanCar } from '../../mock/caravan'

const CarHmenu = () => {
  const data = CaravanCar.MainDataCaravan
  console.log(data);
  return (
       <GridCaravan>
     {data.map((value,index )=>{
      return(
        <div key={index}>
          <Caravanmenu>
          <Link to={`/caravan/${value.id}`} style={{textDecoration:'none',
            color:'black'}}>
        <img  style={{width:'202px',height:'137px'}} src={value.car.Image} alt='car-img'/>
        <h3>{value.car.Name}</h3>
        <h5>{value.car.Brand}<div><img src={ministar} alt="mini-star" />{value.car.Rate}</div> </h5>
        <h2 style={{color:'#006DAB'}}>{value.car.Cost}</h2>
        <div className='gap'>
                <button className='order-but'>Order</button>
                <button className='order-but'>Compare</button>
              </div>
              </Link>
        </Caravanmenu>
        </div>
        
        
      )
     })
     }
      
    </GridCaravan> 
  )
}

export default CarHmenu