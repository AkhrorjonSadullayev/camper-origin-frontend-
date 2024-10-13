import React from 'react'
import { CartCon, CartConWraper } from './motorCart';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { Campcar } from '../mock/motor';

 
const MotorCartComponent = () => { 
const { id } = useParams();
const datail_cons = Campcar.maindata

const datail_names = datail_cons.filter((value) => value.id === parseInt(id));
console.log(datail_names);
    const detail = Campcar.maindata

    console.log(detail);
    var settingse = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }

  return (
    <>
    
    <CartConWraper> 

                <div>
                   <div className='catrimg'><h2>Cart</h2></div>
                   <div className="slider-containerie">
                    <Slider {...settingse} className='slider_wraps'>
                        {detail.map((value, index ) => {return( <div key={index}>

                               <div className='btu_wrap'>
                                 <img className='Car001' src={value.car.Image} alt="car1"  /></div>
                                 <div className="but_Wr"><button>Purchase price {value.car.Cost}</button></div>
                               </div>
                        
                        )})}
                    </Slider>
                   </div>
                </div>
        
                <div className='CartCon_wrape'>
                <CartCon className='CartCon'>

                    <div className="scrolWrap">
                        <div className='cost_wrap'>
                             <h2>Car Name</h2>
                           <h3>15.000$</h3>
                        </div>
                        <h4>Description</h4>
                        <h5 className='brNone'>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Feugiat viverra amet, <br /> tortor <br />
                            tristique odio scelerisque aenean <br /> sodales. <br />
                            Nunc risus dolor amet porttitor tellus
                        </h5>
                       <div className='BtnWrap'> <button>Continue to payment</button></div>
                    </div>

                    <div className="inputwrap2">
                        <h1>Enter Account Details</h1>
                       <div className="inputwrap"> 
                         <label>First name</label>
                         <input type="text"  placeholder='First name'/>
                       </div>
                       <div className="inputwrap"> 
                         <label>Last name</label>
                         <input type="text"  placeholder='Last name'/>
                       </div>
                       <div className="inputwrap"> 
                         <label>Email</label>
                         <input type="text"  placeholder='Your email'/>
                       </div>
                       <div className="inputwrap"> 
                         <label>Mobile Phone Number</label>
                         <input type="text"  placeholder='Mobile Phone Number'/>
                       </div>
                    </div>
                    <div className="inputwrap2">
                        <h1>Card</h1>
                        <div className="inputwrap"> 
                             <label>Name on card</label>
                            <input type="text"  placeholder='Name on card'/>
                        </div>
                        <div className="inputwrap"> 
                             <label>Card Number</label>
                            <input type="text"  placeholder='Card Number'/>
                        </div>
                        <div className="inputwrap"> 
                             <label>Expiration Month</label>
                            <input type="text"  placeholder='01'/>
                        </div>
                        <div className="inputwrap"> 
                             <label>Expiration Year</label>
                            <input type="text"  placeholder='2022'/>
                        </div>
                        <div className="inputwrap"> 
                             <label>CVV</label>
                            <input type="text"  placeholder='CVV'/>
                        </div>
                        <div className="inputwrap"> 
                             <label>Billing Zip Cod</label>
                            <input type="text"  placeholder='Billing Zip Cod'/>
                        </div>
                    </div>
                    <div className='BtnWraps'><button>Place Order</button></div>
                </CartCon>
                </div>

    </CartConWraper>
    </>
  )
}

export default MotorCartComponent