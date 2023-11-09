import React from 'react'

import Hero from '../components/sections-info/smallHero/smallHero'
import Info from '../components/sections-info/contactInformation/contactInformation'
import Form from '../components/sections-input/contactForm/contactForm'
import Map from '../components/sections-info/map/map'



const Contact = () => {
  return (
    <main className="w-100">
        <Hero 
          _link='contact' _title="Let's connect"
        />
        <Info />
        <Form />
        <Map />
    </main>
  )
}

export default Contact