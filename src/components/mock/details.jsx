import React from 'react'
import { Container, DetailsBackground, DetailsMenu } from '../styles/motor'
import { Campcar } from './motor'
import { Link, useParams } from 'react-router-dom'
import inside from '../../assets/car-inside.png'
import insidetwo from '../../assets/car-inside-second.png'
import insidethree from '../../assets/inside-three.png'
import insidefour from '../../assets/inside-four.png'
import insidefive from '../../assets/controler.png'
import BasicTabs from './tabs/tabs.jsx'
const Details = () => {
  const { id } = useParams();
  const detail = Campcar.maindata
  const filterDetail = detail.filter((value)=>value.id === parseInt(id))
  console.log(filterDetail);

  

  return (
    <div>
      <DetailsBackground className='DetailsBackground'> 
      <h1 style={{fontSize:'100px'}}>Aidal</h1>
     <div>
      <Link to={'/add-to-cart'}>
      <button className='add-but'>ADD TO CART</button>
      </Link>
      <button className='add-but'>COMPARE</button>
     </div>
      </DetailsBackground>

      <DetailsMenu>
          {filterDetail.map((value,index)=>{
            return(
              
              <div key={index}>
                 <Link to={`/motor/${value.id}`} style={{textDecoration:'none',
              color:'black'}}>
                <div className='detailsmenu'>

                <div>
                <img src={value.car.Image} alt="car-image" className='first-car-img'/>
                </div>
                <div className='right-detail'>
                  <div className='name-cost'>
                    <h1>{value.car.name}</h1>
                    <h1 style={{color:'#006DAB'}}>{value.car.Cost}</h1>
                  </div>
                  <p style={{marginTop:'10px'}}>{value.car.Brand}</p>
                  <hr className='line-grey'/>
                  <div className='Company'>
                    <h3>Company</h3>
                    <p style={{fontSize:'16px'}}>{value.car.Company}</p>
                  </div>
                  <div className='Company'>
                  <h3>People</h3>
                    <p style={{fontSize:'16px'}}>{value.car.People}</p>
                  </div>
                  <div className='Company'>
                  <h3>License type</h3>
                  <p style={{fontSize:'16px'}}>{value.car.License}</p>
                  </div>
                </div>
          
                </div>
              </Link>
              </div>
             
            )
          })}

                 {/* first container end */}
                 <Container className='container1'>
                 <div className='left-con-inside'>
                  <h3 style={{fontSize:'35px'}}>Comfort</h3>
                  <p style={{marginTop:'25px',color:'#373737'}}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Rutrum nibh urna sagittis arcu 
                    natoque lectus cursus felis. Nec, felis risus,
                     id in proin sed proin iaculis mi. Turpis ac ut 
                     metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus 
                     vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
                      urna sagittis arcu natoque lectus cursus felis. Nec, 
                  felis risus, id in proin sed proin iaculis mi.</p>
                  </div>
                  <div >
                    <img className='image-con-in' src={inside} alt="car-inside-img" />
                  </div>
                 </Container>

                 {/* second container end */}
                 <Container className='container2'>
                 <div>
                    <img  className='image-con-in2' src={insidetwo} alt="car-inside-img" />
                  </div>
                 <div className='left-con-inside2' > 
                  <h3 style={{fontSize:'35px'}}>Tidying away is child’s play!</h3>
                  <p style={{marginTop:'25px',color:'#373737'}}>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit.
                   Rutrum nibh urna sagittis arcu natoque lectus cursus felis. 
                   Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus,
                    amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, 
                  id in proin sed proin iaculis mi.</p>
                  </div>
                 
                 </Container>

                 {/* third container end */}

                 <Container className='container1'>
                 <div className='left-con-inside'>
                  <h3 style={{fontSize:'35px'}}>Ventilated , Lit up</h3>
                  <p style={{marginTop:'25px',color:'#373737'}}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Rutrum nibh urna sagittis arcu 
                    natoque lectus cursus felis. Nec, felis risus,
                     id in proin sed proin iaculis mi. Turpis ac ut 
                     metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus 
                     vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
                      urna sagittis arcu natoque lectus cursus felis. Nec, 
                  felis risus, id in proin sed proin iaculis mi.</p>
                  </div>
                  <div>
                    <img className='image-con-in' src={insidethree} alt="car-inside-img" />
                  </div>
                 </Container>

                 {/* fourth container end */}

                 <Container  className='container2'>
                 <div>
                    <img  className='image-con-in2' src={insidefour} alt="car-inside-img" />
                  </div>
                 <div  className='left-con-inside2'>
                  <h3 style={{fontSize:'35px'}}>Easy access</h3>
                  <p style={{marginTop:'25px',color:'#373737'}}>We add little touches that your joints will thank you for…
                   All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle
                   All our vans are equipped with an electric step.</p>
                  </div>
                 
                 </Container >

                 {/* fifth container end */}
                 
                 <Container className='container1'>
                 <div className='left-con-inside' >
                  <h3 style={{fontSize:'35px'}}>Heating when driving</h3>
                  <p style={{marginTop:'25px',color:'#373737'}}>Fuel heating is now very popular in the industry,
                   but this was not always the case; Camper (once again) led the way in this area over 15 years ago.
                   One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p>
                   <div className='cart-but-con'>
                    
                    <Link to={`/add-to-cart`} >
                    <button>ADD TO CART</button>
                    </Link>
                   
                  <button>COMPARE</button>
                   </div>
                  </div>
                  <div>
                    <img className='image-con-in' src={insidefive} alt="car-inside-img" />
                  </div>
                 </Container>
                 <BasicTabs>

                 </BasicTabs>
                 
      </DetailsMenu>
      

    </div>
  )
}

export default Details