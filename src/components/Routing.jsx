import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './Events';
import Details from './Details';



const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Events/>}/>
          <Route path='/:code' element={<Details/>}/> 
          
       </Routes>
   </Router>
  )
}

export default Routing