import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//import Dots from'../dots/dots'
import { getData as helper_getData } from '../../../helper/api'


const articleGrid = ({_shownArticles = 3, _maxArticles = null }) => {
    const [apiData, setApiData] = useState()
    const [shownArticles, setShownArticles] = useState(_shownArticles)
    const [maxArticles, setMaxArticles] = useState(_maxArticles)
    const [articles, setArticles] = useState([{}])
    const [dotElements, setDotElements] = useState([])
    const [activeDot, setActiveDot] = useState()

    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    useEffect(() => {
        async function getApiData() {
            const data = await helper_getData()
            setApiData(data)

            if (maxArticles === null || data.length <= maxArticles) { setMaxArticles(data.length) }
            console.log(maxArticles)
            if (shownArticles === 0) { setShownArticles(maxArticles) }
            console.log(shownArticles)

            setActiveDot(0)
        } 
        
        getApiData()        
    }, [])

    useEffect(() => {
        setDotElements(makeDots())
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
        let data = await cutMaxData(apiData)
        let newData = await cutData(data)
        newData = await changeDate(newData)

        setArticles(newData)
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