import React from 'react'
//import './map.css'

const mapIframeUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=18.026504516601566%2C59.327016239461855%2C18.09782981872559%2C59.34621073443778&amp;layer=hot&amp;marker=59.33661484265348%2C18.062167167663574'
const mapLink = 'https://www.openstreetmap.org/?mlat=59.33660&amp;mlon=18.06214#map=18/59.33660/18.06214'

const map = () => {
  return (
    <section className="map w-100 m-none">
        <div className="container">
            <div className="map-wrapper">
                <iframe src={mapIframeUrl}></iframe>
                <small><a href={mapLink}>Visa större karta</a></small>
            </div>
        </div>
    </section>
  )
}

export default map