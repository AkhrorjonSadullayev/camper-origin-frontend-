import React from 'react'
import { DataMainContainer, MainContainer } from '../styles/style'
import downicon from '../../assets/down-icon.svg'
import firstmini from '../../assets/first-mini.png'
import secondmini from '../../assets/second-mini.png'
import thirdmini from '../../assets/third-mini.png'
import blackmenu from '../../assets/black-menu.svg'
import greymenu from '../../assets/grey-menu.svg'
import whiteCar from '../../assets/white-first-car.png'
import starimg from '../../assets/bx_bxs-star.svg'


const MotorComponent = () => {
  return (
    <div>
    <MainContainer>
      <div className='back-img'>
        <h6 id='h6'>Home / Motors</h6>
        <h3 id='h3'>Our ranges</h3>
        <h1 id='h1'>Motors</h1>
      </div>
    </MainContainer>
    <DataMainContainer>
      <div className='main-body'>
      <div className='left-side'>
      <div>
        <h3>Cost of car</h3>
        <hr className='line'/>
      </div>
      <div className='from-to-con'>
        <div>
          <p>from</p>
          <input type="text" className='form-input' />
        </div>
        <div>
        <p>to</p>
          <input type="text" className='form-input' />
        </div>
      </div>
      <div>
        <div className='brand'>
        <h3>Brand</h3>
        <img src={downicon} alt="down-icon" />
        </div>
        <hr className='line'/>
      </div>
      <div className='chekbox-con'>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>Aidal</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>Knal</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>escape</label>
      </div>
      </div>
      
      <div className='company'>
        <h3>Company</h3>
        <img src={downicon} alt="down-icon" />
        </div>
        <hr className='line'/>
      <div className='chekbox-con'>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>escape</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>Aidal</label>
      </div>
      </div>
      
      <div className='license'>
        <h3>License type</h3>
        <img src={downicon} alt="down-icon" />
        </div>
        <hr className='line'/>
      <div className='chekbox-con'>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>1 year</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>2 year</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>1.5year</label>
      </div>
      </div>
      
      <div className='number'>
        <h3>Number of travelers</h3>
        <img src={downicon} alt="down-icon" />
        </div>
        <hr className='line'/>
      <div className='chekbox-con'>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>2</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>3-4</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>5+</label>
      </div>
      </div>

      <div className='location'>
        <h3>Location</h3>
        <img src={downicon} alt="down-icon" />
        </div>
        <hr className='line'/>
      <div className='chekbox-con'>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>Seoul</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>Korea</label>
      </div>
      <div className='aidal-con'>
        <input className='chekbox' type={'checkbox'}/>
        <label>Pusan</label>
      </div>
      </div>
      <div className='but-con'>
       <button className='cancel-but'>Cancel</button>
        <button className='search-but'>Search</button>
      </div>
      <h4 className='compare-h4'>Compare</h4>
      <div className='mini-cars-con'>
        <img className='mini-car' src={firstmini} alt="first-mini-car-img" />
        <img  className='mini-car' src={secondmini} alt="second-mini-car-img" />
        <img className='mini-car' src={thirdmini} alt=" third-mini-car-img" />
      </div>
      </div>
      <div className='right-side'>
      <div className='right-side'>
        <div className='mini-nav-main'>
          <div className='mininav-left'>
            <h3>Item</h3>
            <h4>25.156</h4>
          </div>
          <div className='mininav-left'>
            <div className='sort-main-con'>
              <p>Sort by</p>
              <input className='select-input' type={'text'} placeholder='select'/>
              <img className='down-icon-img' src={downicon} alt="down-icon" />
            </div>
            <div className='num-main-con'>
              <input className='num-input' type={'text'} />
              <img className='down-icon-num' src={downicon} alt="down-icon" />
            </div>
            <div>
             <img className='black-menu' src={blackmenu} alt="black-menu-icon" />
             <img  className='grey-menu' src={greymenu} alt="grey-menu-icon" />
            </div>
          </div>
        </div>
        <hr style={{marginTop:'5px'}} />

          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div> 
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div> 
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>
          <div className='car-cons'>
            <img className='white-car' src={whiteCar} alt="white-cat-img"  />
            <h3>Name of the car</h3>
            <div className='name-con'>
              <p>Brand name</p>
              <div className='star-con'>
              <img src={starimg} alt="star-img" />
              <p>5.3</p>
              </div>
            </div>
            <h3 style={{color: '#006DAB',marginTop :'10px'}}>250 $</h3>
            <div style={{display:'flex',gap:'5px',marginTop:'10px'}}>
              <button className='order-but'>Order</button>
              <button className='order-but'>Compare</button>
            </div>
          </div>

      </div>
      </div>
      </div>
   
      
      
      
      

      
    </DataMainContainer>
    </div>
  )
}

export default MotorComponent