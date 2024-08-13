import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './router';
import Navbar from './components/context/navbar';
import MotorComponent from './components/motor/Motor';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Navbar />
    
    {/* <MotorComponent /> */}
    <RouterComponent/>
</BrowserRouter>
);


