import React from 'react'
import Hero from './components/Hero';

import NavBar from './components/Navbar';
import Features from './components/Features';
import FloatingImage from './components/story';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden' >
      
      <h1 className='text-3xl font-bold underline text-red-500 font-circular-web'></h1>
      
      <NavBar/>
      <Hero/>
      
      <Features/>
      <FloatingImage/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
