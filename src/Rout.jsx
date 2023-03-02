import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
//import Blog from './Pages/Blog';
import About from './Pages/About ';
import FAQs from './Pages/FAQs';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';


const route = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<Home />} />
         <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
            <Route path="/About" element={<About />} />
            <Route path="/FAQs" element={<FAQs />} />

      </Routes>
      </BrowserRouter>,

    </>
  )
}

export default route

