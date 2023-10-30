import React from 'react'

import Header from '../components/header-footer/header'
import Footer from '../components/header-footer/footer'

const divStyle = {
    padding: '20dvh 16.65dvw'
}

const NotFound = () => {
  return (
    <>
    <Header />
    <div style={divStyle}>
        <h1>Oops... this page does not exist.</h1>
        <p>Error - 404 Page Not Found</p>
    </div>
    <Footer />
    </>
  )
}

export default NotFound