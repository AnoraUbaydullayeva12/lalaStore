import React from 'react'
import Navbar from './components/Header/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'



const App = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      <Navbar/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App