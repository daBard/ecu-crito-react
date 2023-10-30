import React from 'react'

import Header from '../components/header-footer/header'
import Footer from '../components/header-footer/footer'
import Hero from '../components/sections-info/contactHero/contactHero'
import Info from '../components/sections-info/contactInformation/contactInformation'
import Form from '../components/sections-input/contactForm/contactForm'
import Map from '../components/sections-info/map/map'



const Contact = () => {
  return (
    <>
    <Header />
    <main className="w-100">
        <Hero />
        <Info />
        <Form />
        <Map />
    </main>
    <Footer />
    </>
  )
}

export default Contact