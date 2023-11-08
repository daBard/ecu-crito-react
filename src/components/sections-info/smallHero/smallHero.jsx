import React from 'react'
import { NavLink } from 'react-router-dom'
import bgLines from '../../../assets/img/background-lines.svg'

const smallHero = ( { _link = '', _title='' } ) => {
  return (
    <section className="small-hero w-100 m-small">
        <img src={bgLines} alt="" className="bg-lines" loading="lazy" />
        <div className="container">
            <div className='link-grp'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to={`/${_link}`}>{_link}</NavLink>
            </div>
            <h1>{_title}</h1>
        </div>
    </section>
  )
}

export default smallHero