import React from 'react'

// import paperz from '../../../assets/img/paperz.svg'
// import dorfus from '../../../assets/img/dorfus.svg'
// import martino from '../../../assets/img/martino.svg'
// import square from '../../../assets/img/square.svg'
// import gobona from '../../../assets/img/gobona.svg'

const logoBar = () => {
  const logos =  [
    {
      name: "Paperz",
      img: "paperz.svg",
      key: "logo-1"
    },
    {
        name: "Dorfus",
        img: "dorfus.svg",
        key: "logo-2"
    },
    {
        name: "Martino",
        img: "martino.svg",
        key: "logo-3"
    },
    {
        name: "Square",
        img: "square.svg",
        key: "logo-4"
    },
    {
        name: "Gobona",
        img: "gobona.svg",
        key: "logo-5"
    }
  ]

  return (
    <section className="logo-bar w-100 m-small">
        <div className="container">
            <div className="logos d-flex align-items-center">
              {logos.map(logo => (
                <a key={logo.key} href="#"><img src={`./src/assets/img/${logo.img}`} alt={`${logo.name} logo`} loading="lazy" /></a>
              ))}
                {/* <a href="#"><img src={paperz} alt="Paperz logo" loading="lazy" /></a>
                <a href="#"><img src={dorfus} alt="Dorfus logo" loading="lazy" /></a>
                <a href="#"><img src={martino} alt=" Martino logo" loading="lazy" /></a>
                <a href="#"><img src={square} alt="Square logo" loading="lazy" /></a>
                <a href="#"><img src={gobona} alt="Gobona logo" loading="lazy" /></a> */}
            </div>
        </div>
    </section>
  )
}

export default logoBar