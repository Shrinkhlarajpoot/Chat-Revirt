import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { RevirtChat } from '../containers/Chat';

import {Login} from '../containers/Login';


export default function BasicRoutes() {
return(
    <Routes>
        <Route path='/' element={
          <React.Suspense fallback="Loading....">
           <Login/>
          </React.Suspense>
        } />
        <Route path='/chat' element={
          <React.Suspense fallback="Loading...">
         <RevirtChat/>
          </React.Suspense>
        } />
        </Routes>

)
   
}