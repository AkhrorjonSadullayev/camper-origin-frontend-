import React from 'react'
import { VmenuCaravan, VmenuMenuCaravan } from '../../styles/caravan'
import { Link } from 'react-router-dom'
import { CaravanCar } from '../../mock/caravan'
import ministar from '../../../assets/bx_bxs-star.svg'

const CarVmenu = () => {
  const datas = CaravanCar.MainDataCaravan
  console.log(datas);
  return (
    <VmenuCaravan>
    {datas.map((value,index)=>{
      return(
        <div key={index}>
          <Link to={`/caravan/${value.id}`} style={{textDecoration:'none',
        color:'black'}}>
          <VmenuMenuCaravan>
          <div>
                <img  className='caravan-img' src={value.car.Image} alt="car-img" />
                </div>
               <div className='right-side-caravan'>
                <div className='name-of-car-caravan'>
                <h3>{value.car.Name}</h3>
                <h2 style={{color:'#006DAB'}}>{value.car.Cost}</h2>
                </div>
                <h5>{value.car.Brand} <div><img src={ministar} alt="mini-star" />{value.car.Rate}</div></h5>
                <div className='gap'>
                <button className='order-but-caravan'>Order</button>
                <button className='order-but-caravan'>Compare</button>
              </div>
               </div>
            
          </VmenuMenuCaravan>
          </Link>
        </div>
      )
    })}
</VmenuCaravan>
  )
}

export default CarVmenu