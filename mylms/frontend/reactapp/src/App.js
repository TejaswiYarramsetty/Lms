// src/App.js

import React, { useState } from 'react'; // Import useState here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import About from './component/About';
import Footer from './component/Footer';
import Contact from './component/Contact';

import CourseDetails from './component/CourseDetails';

import '@fortawesome/fontawesome-free/css/all.min.css';

import Register from './component/Register';

import Dashboard from './component/Dashboard';
import Profilesettings from './component/Profilesettings';
import Mycourses from './component/Mycourses';
import Favouritecourses from './component/Favouritecourses';
import Recommendedcourses from './component/Recommendedcourses';
import Changepassword from './component/Changepassword';
import TDB from './component/TDB';
import MC from './component/MC';
import AC from './component/AC';
import PS from './component/PS';
import CP from './component/CP';
import MU from './component/MU';

import InstructorDetails from './component/InstructorDetails';

import TR from './component/TR';

import Latestcourses from './component/Latestcourses';
import Popularcourses from './component/Popularcourses';
import Courses from './component/Courses';
import Featuredteachers from './component/Featuredteachers';

import TLogin from './component/TLogin';
import TLogout from './component/TLogout';
import Logout from './component/Logout';


function App(){
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return(
    <Router>
    <Header onLoginClick={handleShow} />
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login show={showModal} onClose={handleClose} />} />
      <Route path="/about" element={<About />} />
      <Route path='/register' element={<Register />} />

      <Route path='/contact' element={<Contact />} />
      
      <Route path='/course/:courseId' Component={CourseDetails} />

      <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/profilesettings' element={<Profilesettings />} />
        <Route path="/dashboard/mycourses" element={<Mycourses />} />
        <Route path='/dashboard/favouritecourses' element={<Favouritecourses />} />
        <Route path='/dashboard/recommendedcourses' element={<Recommendedcourses />} />
        <Route path='/dashboard/changepassword' element={<Changepassword />} />

      <Route path='/TDB' element={<TDB />} />
        <Route path='/TDB/mycourses' element={<MC />} />
        <Route path='/TDB/addcourses' element={<AC />} />
        <Route path='/TDB/PS' element={<PS />} />
        <Route path='/TDB/CP' element={<CP />} />
        <Route path='/TDB/myusers' element={<MU />} />
      
        <Route path="/instructor/:instructorId" element={<InstructorDetails />} />

        <Route path='/TR' element={<TR />} />

      <Route path='/latestcourses' element={<Latestcourses />} />
      <Route path='/popularcourses' element={<Popularcourses />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/featuredteachers' element={<Featuredteachers />} />
      <Route path='/TLogin' element={<TLogin />} />
      <Route path='/TLogout' element={<TLogout />} />

      <Route path='/logout' element={<Logout />} />

      




    </Routes>
    <Footer />
  </Router>
  )
}
export default App;

