import React from "react";
import Slider from "react-slick";
import './multy.css'
import down from '../../../assets/down-icon.svg'
import one from  '../../../assets/camper1.webp'
import two from  '../../../assets/camper2.jpg'
import three from  '../../../assets/car3.jpg'
import four from  '../../../assets/car4.jpg'
import five from  '../../../assets/car5.jpg'
import six from  '../../../assets/car6.jpg'
import seven from  '../../../assets/car7.jpg'
import eight from  '../../../assets/car8.jpg'
import nine from  '../../../assets/car9.jpg'
import ten from  '../../../assets/car10.webp'
import eleven from  '../../../assets/car11.jpg'
import twelve from  '../../../assets/car12.webp'
import { MultiCar } from "./multy";

function MultyComponent() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

    <MultiCar className="slider-container">
        <Slider {...settings}>
      <div className="Container-main">
          <div className="Container-mini">
            <img src={one} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
      </div>
      <div className="Container-main">
          <div className="Container-mini">
            <img src={two} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
      </div>
      <div className="Container-main">
          <div className="Container-mini">
            <img src={three} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="Container-main">
          <div className="Container-mini">
            <img src={four} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="Container-main">
          <div className="Container-mini">
            <img src={five} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div >
        <div className="Container-main">
          <div className="Container-mini">
            <img src={six} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="Container-main">
          <div className="Container-mini">
            <img src={seven} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="Container-main">
          <div className="Container-mini">
            <img src={eight} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="Container-main">
          <div className="Container-mini">
            <img src={nine} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="Container-main">
          <div className="Container-mini">
            <img src={ten} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="Container-main">
          <div className="Container-mini">
            <img src={eleven} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="Container-main">
          <div className="Container-mini">
            <img src={twelve} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={down} alt="img-icon" /></h5>
          </div>
        </div>
      </Slider>
    </MultiCar>
  );
}

export default MultyComponent;
