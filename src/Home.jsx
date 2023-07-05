import React from 'react'
import Navbar from './components/Navbar'
import BannerSection from './components/BannerSection'
import Services from './components/Services'
import Works from './components/Works'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <BannerSection/>
      <Services/>
      <Works/>
      <Footer/>
    </>
  )
}

export default Home
