import React from 'react'
import '../details/placeCarusel'
import { MapContainer } from '../details/placeCarusel'
import location from '../../../assets/carbon_location.svg'
import phone from '../../../assets/carbon_phone.svg'
import clock from '../../../assets/bi_clock.svg'
import home from '../../../assets/codicon_home.svg'
import mapKorea from '../../../assets/map.png'
const MapComponent = () => {
  return (
    <>
    <MapContainer>
    <h1 style={{fontSize:'25px'}}>Camping Del Sole Village</h1>
    <div className='location-wrap'>
       <p>Location</p>
        <button className='copy'>Copy map</button>
    </div>
    <hr />
    <div className='grid-con'>
        <div>
            <img src={location} alt="location-svg" />
            <p>Korea, Seul</p>
        </div>
        <div>
        <img src={phone} alt="location-svg" />
            <p>005- 862 -8569</p>
        </div>
        <div>
        <img src={clock} alt="location-svg" />
            <p>from</p><p style={{color:'#FF7A00'}}>11:00</p> <p>to</p><p  style={{color:'#FF7A00'}}>19:00</p>
        </div>
        <div>
        <img src={home} alt="location-svg" />
            <p className='home-p'>logo.com</p>
        </div>
    </div>
    <h3>Description</h3>
    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, 
bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, 
bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.</p>
<img className='map-img' src={mapKorea} alt="map-img" />
    </MapContainer>
    </>
  )
}

export default MapComponent