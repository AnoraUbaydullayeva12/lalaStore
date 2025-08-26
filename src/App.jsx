import React from 'react'
import Navbar from './components/Header/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'



const App = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      <Navbar/>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App