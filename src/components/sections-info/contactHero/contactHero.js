import React from 'react'
//import './contactHero.css'
import bgLines from '../../../assets/img/background-lines.svg'

const contactHero = () => {
  return (
    <section className="hero w-100 m-small">
        <img src={bgLines} alt="" className="bg-lines" loading="lazy" />
        <div className="container d-flex">
            <h1>Let's connect</h1>
        </div>
    </section>
  )
}

export default contactHero