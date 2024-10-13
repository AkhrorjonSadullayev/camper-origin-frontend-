import React from "react";
import Slider from "react-slick";
import one from  '../../../assets/place1.jpeg'
import two from  '../../../assets/place2.jpeg'
import three from  '../../../assets/place3.jpeg'
import four from  '../../../assets/place4.jpeg'
import five from  '../../../assets/place5.jpeg'
import six from  '../../../assets/place6.jpeg'
import seven from  '../../../assets/place7.jpg'
import eight from  '../../../assets/place8.jpg'
import nine from  '../../../assets/place9.jpg'
import ten from  '../../../assets/place10.jpg'
import eleven from  '../../../assets/place11.jpeg'
import twelve from  '../../../assets/place12.jpg'
import { MultiCar } from "./placeCarusel";
import MapComponent from "./map";


function MultiCarouselPlace() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <MultiCar>
        <Slider {...settings} className="padding">
      <div className="Container-main">       
            <img src={one} alt="" /> 
      </div>
      <div className="Container-main">
            <img src={two} alt="" />
      </div>
      <div className="Container-main">
            <img src={three} alt="" />
        </div>
        <div className="Container-main">
            <img src={four} alt="" />
        </div>
        <div className="Container-main">
            <img src={five} alt="" />
        </div >
        <div className="Container-main">
            <img src={six} alt="" />
        </div>
        <div className="Container-main">
            <img src={seven} alt="" />
        </div>
        <div className="Container-main">
            <img src={eight} alt="" />
        </div>
        <div className="Container-main">
            <img src={nine} alt="" />
        </div>
        <div className="Container-main">
            <img src={ten} alt="" />
        </div>
        <div className="Container-main">
            <img src={eleven} alt="" />
          </div>
        <div className="Container-main">
            <img src={twelve} alt="" />
          </div>
      </Slider>
    </MultiCar>
   
    <MapComponent />
    </>
  );
}

export default MultiCarouselPlace;
