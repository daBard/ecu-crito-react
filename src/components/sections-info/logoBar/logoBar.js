import React from 'react'
import paperz from '../../../assets/img/paperz.svg'
import dorfus from '../../../assets/img/dorfus.svg'
import martino from '../../../assets/img/martino.svg'
import square from '../../../assets/img/square.svg'
import gobona from '../../../assets/img/gobona.svg'
import './logoBar.css'

const logoBar = () => {
  return (
    <section className="logo-bar w-100 m-small">
        <div className="container">
            <div className="logos d-flex align-items-center">
                <a href="#"><img src={paperz} alt="Paperz logo" loading="lazy" /></a>
                <a href="#"><img src={dorfus} alt="Dorfus logo" loading="lazy" /></a>
                <a href="#"><img src={martino} alt=" Martino logo" loading="lazy" /></a>
                <a href="#"><img src={square} alt="Square logo" loading="lazy" /></a>
                <a href="#"><img src={gobona} alt="Gobona logo" loading="lazy" /></a>
            </div>
        </div>
    </section>
  )
}

export default logoBar