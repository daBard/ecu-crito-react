import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from '../../../helper/articleContext'

// DOESN'T UPDATE gridArticles ON REFRESH
// MESSED IT UP

const articleGrid = ({_shownArticles = 3, _maxArticles = null }) => { 
    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const {articles, getArticles} = useArticles()
    
    const [shownArticles, setShownArticles] = useState(_shownArticles)
    const [maxArticles, setMaxArticles] = useState(_maxArticles)
    const [gridArticles, setGridArticles] = useState([])
    const [dotElements, setDotElements] = useState([])
    const [activeDot, setActiveDot] = useState(0)

    useEffect(() => {
        if (maxArticles === null || articles.length <= maxArticles) { setMaxArticles(articles.length) }
        if (shownArticles === 0) { setShownArticles(maxArticles) }

        displayArticles()
    }, [articles.length != 0])

    useEffect(() => {
        
        displayArticles()
        
    }, [activeDot])
    
    const makeDots = () => {
        let elements = []

        if (maxArticles > shownArticles) {
            let nDots = Math.ceil(maxArticles / shownArticles)

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

    const displayArticles = async () => {

        

        let data = await cutMaxData(articles)
        let newData = await cutData(data)
        newData = await changeDate(newData)

        setGridArticles(newData)

        setDotElements(makeDots())
    }

    const cutMaxData = async (_data) => {
        if (maxArticles !== null) {
            return await _data.slice(0, maxArticles)
        }
        else {
            return _data
        }
    }

    const cutData = async (_data) => {
        if (shownArticles != null) {
            const start = activeDot * shownArticles
            const end = start + shownArticles
            return await _data.slice(start, end)
        }
        else {
            return _data
        } 
    }

    const changeDate = async (_data) =>  {
        let newData = await _data

        for (const [i, item] of _data.entries()) {
            let date = item.published.split('T', '1').toString().split('-')

            newData[i].month = monthName[date[1] - 1]

            newData[i].day = Number(date[2])
        }

        return (newData)
    }

    return (
    <>
        {console.log(`GridArticles: ${gridArticles}`)}
        {console.log(`Articles: ${articles}`)}
        <div className="article-grid cards">
            {gridArticles.map(article => (
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