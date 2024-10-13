import React from 'react'
import ministar from '../../../assets/bx_bxs-star.svg'
import { UsedCarGrid, UsedCarMenu } from '../../styles/usedcar'
import { Link } from 'react-router-dom'
import { UsedCar } from '../../mock/usedcardetails'

const UsedHmenu = () => {
    const data = UsedCar.MainDataUsedcar
    console.log(data);
  return (
       <UsedCarGrid>
      {data.map((value,index)=>{
        return (
          <div key={index}>
                 <UsedCarMenu>
            <Link to={`/Used-car/${value.id}`} style={{textDecoration:'none',
            color:'black'}}>
               <img style={{width:'202px',height:'137px' ,borderRadius:'20px'}} src={value.car.Image} alt='car-img'/>
               <h3>{value.car.Name}</h3>
               <div className='h5'>{value.car.Brand}<div><img src={ministar} alt="mini-star" />{value.car.Rate}</div> </div>
               <h2 style={{color:'#006DAB'}}>{value.car.Cost}</h2>
               <div className='gap'>
                <button className='order-but'>Order</button>
                <button className='order-but'>Compare</button>
              </div>
            </Link>
          </UsedCarMenu>
          </div>
        )
      })}
    </UsedCarGrid> 
  )
}

export default UsedHmenu