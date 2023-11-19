import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import HighlightHeading from '../../utilities/highlightHeading/HighlightHeading'

import kristinePalmer from '../../../assets/img/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import markAubri from '../../../assets/img/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import kimberlyHansen from '../../../assets/img/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import justinWilloman from '../../../assets/img/the-connected-narrative-N8lRH2uxih4-unsplash.jpg'

const members = [
    {
        name: "Kristine Palmer",
        position: "Chief Operation Officer",
        img: kristinePalmer
    },
    {
        name: "Mark Aubri",
        position: "Senior Consultant",
        img: markAubri
    },
    {
        name: "Kimberly Hansen",
        position: "Senior Consultant",
        img: kimberlyHansen
    },
    {
        name: "Justin Willoman",
        position: "Senior Tech Consultant",
        img: justinWilloman
    },
    {
        name: "Kimberly Hansen",
        position: "Senior Consultant",
        img: kimberlyHansen
    },
    {
        name: "Justin Willoman",
        position: "Senior Tech Consultant",
        img: justinWilloman
    },
    {
        name: "Kristine Palmer",
        position: "Chief Operation Officer",
        img: kristinePalmer
    },
    {
        name: "Mark Aubri",
        position: "Senior Consultant",
        img: markAubri
    }
]

const team = () => {

    const highlight = 'Meet our team'
    const title = 'Experience team members'
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
                    <HighlightHeading
                        _highlight={highlight} _title={title}
                    />
                </div>
                <div className="btngroup">
                    <Link to="#" className="btn btn-c">Browse team</Link>
                </div>
            </div>
            <div className="cards d-flex">
                {displayedMembers.map((member, index) => (
                    <div key={`team-${index}`} className="card d-flex flex-column">
                        <img src={member.img} alt={member.name} loading="lazy" />
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