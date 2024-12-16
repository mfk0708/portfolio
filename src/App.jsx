import React from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/Servicess/Service'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

