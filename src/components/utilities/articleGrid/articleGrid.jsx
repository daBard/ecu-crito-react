import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Dots from'../dots/dots'


const articleGrid = ({shownArticles = 3, maxArticles = 7}) => {
    const [articles, setArticles] = useState([{}])
    const [dotElements, setDotElements] = useState()
    //const [nDots, setNDots] = useState(Math.ceil(maxArticles / shownArticles))
    const [currentDot, setCurrentDot] = useState()
    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    useEffect(() => {
        displayArticles()
    }, [])
  
    useEffect(() => {
        let nDots = Math.ceil(maxArticles / shownArticles)
        let elements = Array.from({ length: nDots }, (_, index) => (
            <div key={index} data-dot={index} className="dot"></div>
        ))

    setDotElements(elements)
    }, [shownArticles, maxArticles])
    

    const displayArticles = async () => {
        let data = await getData()
        data = await cutMaxData(data)
        let newData = await cutData(data)
        newData = await changeDate(newData)

        setArticles(newData)
    }

    async function getData() {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        return (await result.json())
    }

    const cutMaxData = (data) => {
        if (maxArticles != null)
            data = data.slice(0, shownArticles)
        return(data)
    }

    const cutData = (data) => {
        if (shownArticles != null)
            data = data.slice(0, shownArticles)
        return(data)
    }

    const changeDate = async (data) =>  {
        let newData = await data

        //data.map(item => {
        for (const [i, item] of data.entries()) {
            let date = item.published.split('T', '1').toString().split('-')

            newData[i].month = monthName[date[1] - 1]

            newData[i].day = Number(date[2])
        }
        //})

        return (newData)
    }

    return (
    <>
        <div className="article-grid cards">
            {articles.map(article => (
                <Link key={article.id} to={`/news/details/${article.id}`} className="card d-flex flex-column">
                    <div className="image-wrapper">
                        <img src={article.imageUrl} alt="" loading="lazy" />
                        <div className="date-box">
                            <p className="date">{article.day}</p>
                            <p className="month">{article.month}</p>
                        </div>
                    </div>
                    <div className="text">
                        <p className="tag">{article.category}</p>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                    <div className="line"></div>
                </Link>
            ))}
        </div>
        <div className="dots d-flex justify-content-center">
            {dotElements}
        </div>
    </>
    )
}

export default articleGrid