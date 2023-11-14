import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const members = [
    {
        name: "Kristine Palmer",
        position: "Chief Operation Officer",
        img: "christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
    },
    {
        name: "Mark Aubri",
        position: "Senior Consultant",
        img: "itay-verchik-6ZKGBzrDd3I-unsplash.jpg"
    },
    {
        name: "Kimberly Hansen",
        position: "Senior Consultant",
        img: "christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg"
    },
    {
        name: "Justin Willoman",
        position: "Senior Tech Consultant",
        img: "the-connected-narrative-N8lRH2uxih4-unsplash.jpg"
    },
    {
        name: "Kimberly Hansen",
        position: "Senior Consultant",
        img: "christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg"
    },
    {
        name: "Justin Willoman",
        position: "Senior Tech Consultant",
        img: "the-connected-narrative-N8lRH2uxih4-unsplash.jpg"
    },
    {
        name: "Kristine Palmer",
        position: "Chief Operation Officer",
        img: "christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
    },
    {
        name: "Mark Aubri",
        position: "Senior Consultant",
        img: "itay-verchik-6ZKGBzrDd3I-unsplash.jpg"
    }
]

const team = () => {

    const shownMembers = 4
    const [displayedMembers, setDisplayedMembers] = useState([])
    const [dotElements, setDotElements] = useState([])
    const [activeDot, setActiveDot] = useState()

    useEffect(() => {
            setActiveDot(0)
    }, [])

    useEffect(() => {
        setDotElements(makeDots())
        displayMembers()
    }, [activeDot])

    const makeDots = () => {
        let elements = []

        if (members.length > shownMembers) {
            let nDots = Math.ceil(members.length / shownMembers)

            elements = Array.from({ length: nDots }, (_, index) => (
                <div onClick={() => {
                    dotActive(index)
                    }} 
                key={index} 
                className={ activeDot == index ? "dot active" : "dot" }>
                </div>
            ))
        }
        
        return elements
    }

    function dotActive(dotI) {
        setActiveDot(dotI)
    }

    const displayMembers = () => {
        let newData = cutData(members)

        setDisplayedMembers(newData)
    }

    const cutData = (_data) => {
        if (shownMembers != null) {
            const start = activeDot * shownMembers
            const end = start + shownMembers
            return _data.slice(start, end)
        }
        else {
            return _data
        }        
    }

  return (
    <section className="team w-100">
        <div className="container d-flex flex-column">
            <div className="top d-flex justify-content-between align-items-center">
                <div className="text">
                    <p className="highlight">Meet our team</p>
                    <h2 className="display-3">Experience team members</h2>
                </div>
                <div className="btngroup">
                    <Link to="#" className="btn btn-c">Browse team</Link>
                </div>
            </div>
            <div className="cards d-flex">
                {displayedMembers.map((member, index) => (
                    <div key={`team-${index}`} className="card d-flex flex-column">
                        <img src={`./src/assets/img/${member.img}`} alt={member.name} loading="lazy" />
                        <div className="text">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="dots d-flex justify-content-center">
                {dotElements}
            </div>
        </div>
    </section>
  )
}

export default team