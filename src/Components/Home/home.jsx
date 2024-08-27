import React from 'react'
import NavBar from './navBar'
import Hero from './hero'
import OurWork from './ourWork'
import OurServices from './ourServices'
import OurP from './ourP'
import Design from './design'
import Contact from './contact'
import Footer from './footer'
import FAQ from './faq'
import About from './about'

function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <OurServices/>
      <OurWork/>
      <OurP/>
      <Design/>
      <About/>
      <Contact/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home