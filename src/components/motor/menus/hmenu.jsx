import React from 'react'
import { Gridmenu, Gridmenumain } from '../../styles/motor'
import ministart from '../../../assets/bx_bxs-star.svg'
import { Link } from 'react-router-dom'
import { Campcar } from '../../mock/motor'

const Hmenu = () => {
    const data = Campcar.maindata
    console.log(data);
  return (
      <Gridmenumain>

      {data.map((value,index)=> {
        return(
          <div key={index}>
            <Link  to={`/motor/${value.id}`} style={{textDecoration:'none',
            color:'black'}}>
            <Gridmenu className='Gridmenu'>
              <img  style={{width:'202px',height:'137px'}} src={value.car.Image} alt="car-img" />
              <h3>{value.car.name}</h3>
              <div className='h5'>{value.car.Brand} <div><img src={ministart} alt="mini-star" />{value.car.Rate}</div></div>
              <h2 style={{color:'#006DAB'}}>{value.car.Cost}</h2>
              <div className='gap'>
                <button className='order-but'>Order</button>
                <button className='order-but'>Compare</button>
              </div>
            </Gridmenu>
            </Link>
          </div>
        )
      })}
    </Gridmenumain> 
  )
}

export default Hmenu