import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MotorComponent from './components/motor/index'
import NotFoundComponent from './components/404/index'
import CaravanCoponent from './components/caravan/caravan'
import TuningComponent from './components/tuning/tuning'
import Details from './components/mock/details'
import Tuningdetails from './components/mock/tuningdetails'
import UsedCarComponent from './components/UsedCar/Usedcar'
import Useddetails from './components/mock/useddetails'
import CampingPlaceComponent from './components/campingPL/place'
import SignIn from './components/context/signIn'
import CreateAccount from './components/context/account'
import Vandetails from './components/mock/vandetails'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/context/footer'
import CarouselComponent from './components/carousel/carousel'
import Placedetails from './components/campingPL/details/placeDetails'
import MotorCartComponent from './components/AddToCart/motorCart.jsx'
import CompareComponent from './components/motor/compare/compare.jsx'
import ScrollToTop from './components/404/scrollTop.jsx'
import Navbar from './components/context/navbar.jsx'


const RouterComponent = () => {
  const location = useLocation();
  const navbarContainer = location.pathname === '/sign-in' || location.pathname === '/create-account'
  return (
    <>
    {!navbarContainer && <Navbar />}
    <ScrollToTop />
<Routes>
  <Route path='/' element={<CarouselComponent />}/>

    <Route path='/motor' element={<MotorComponent />} />
    <Route path='/motor/:id' element={<Details />} />
    
    

    <Route path='/caravan' element={<CaravanCoponent/>} />
    <Route path='/caravan/:id' element={<Vandetails />}/>

    <Route path='/tuning' element={<TuningComponent />} />
    <Route path='/tuning/:id' element={<Tuningdetails />}/>

    <Route path='/Used-car' element={<UsedCarComponent />} />
    <Route path='/Used-car/:id' element={<Useddetails />} />

    <Route path='/Camping-place' element={<CampingPlaceComponent />}/>
    <Route path='/Camping-place/:id' element={<Placedetails />}/>
    
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/create-account' element={<CreateAccount />}/>
     <Route path='*' element={<NotFoundComponent />} />

     <Route path='/add-to-cart' element={<MotorCartComponent />} />
     <Route path='/compare' element={<CompareComponent />} />
     </Routes>
{!navbarContainer &&  <Footer />}
</>
)
}

export default RouterComponent