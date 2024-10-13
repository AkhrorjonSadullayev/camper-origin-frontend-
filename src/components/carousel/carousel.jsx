import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import MultyComponent from './MultyCar/Multy.jsx';
import ModalComponent from '../campingPL/details/modal.jsx';
import numberone from '../../assets/nature-car-1.webp'
import numbertwo from '../../assets/nature-car-2.webp'
import numberthree from '../../assets/nature-img-3.webp'



const CarouselComponent = () => {
    {
        return (
            <>
            <Carousel  className='Carousel' showThumbs={false} >
                <div>
                    <img  src={numberone} alt='img'/>
                </div>
                <div  >
                    <img src={numbertwo} alt='img'/>
                </div>
                <div >
                    <img  src={numberthree} alt='img'/>
                </div>
            </Carousel>
            <div className="recommended">
            <h1>Recommend</h1>
            <hr />
            </div>
            <MultyComponent />
            <div className="Videos">
            <h1>Videos</h1>
            <hr />
            </div>
            
            <ModalComponent/>
            <div className="Videos">
            <h1>Blogs</h1>
            <hr />
            </div>
            <div className='Blogs-main'>
                <div className='blogs-con'> 
                <div className='left-info'>
                    <h1>Camper</h1>
                    <p className='email'>@camper_1</p>
                    <p className='info-p'>Camping truly is for everyone, from 
                        your oldest family member to little 
                        campers just trekking out for the first time.
                         Whether your plan is to relax, explore or reconnect, 
                        CAMPER campgrounds are a great place to create 
                        memories with those you love.</p>
                </div>
                <div className='image-grid'> 
                    <div className='image-one'><img src="" alt="" /></div>
                    <div className='image-two'><img src="" alt="" /></div>
                    <div className='image-three'><img src="" alt="" /></div>
                    <div className='image-four'><img src="" alt="" /></div>
                    <div className='image-five'><img src="" alt="" /></div>
                    <div className='image-six'><img src="" alt="" /></div>
                </div>
                </div>
            </div>
            </>
        );
    }
};

export default   CarouselComponent ;
