import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MotorComponent from './components/motor/Motor'
import CaravanComponent from './components/caravan/caravan'
import TuningComponent from './components/tuning/tuning'
import UsedCarComponent from './components/UsedCar/UsedCar'
import CampingPlaceComponent from './components/CampingPlace/CampingPlace'


const RouterComponent = () => {
  return (
<Routes>
    <Route path='/motor' element={<MotorComponent />} />
    <Route path='/caravan' element={<CaravanComponent/>} />
    <Route path='/tuning' element={<TuningComponent />} />
    <Route path='/used-car' element={<UsedCarComponent />} />
    <Route path='/Camping-place' element={<CampingPlaceComponent />} />
</Routes>
)
}

export default RouterComponent