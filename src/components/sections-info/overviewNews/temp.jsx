import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// import ArticleGrid from '../../utilities/articleGrid/articleGrid'

const overviewNews = () => {
    const [articles, setArticles] = useState([{}])
    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const shownArticles = 3


    useEffect(() => {
        displayArticles()
    }, [])

    const displayArticles = async () => {
        let data = await getArticles()
        data = await cutData(data)
        const newData = await changeDate(data)

        setArticles(newData)
    }

    async function getArticles() {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        return (await result.json())
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
        <section className='overview-news'>
            <div className='container'>
                <div className="article-grid cards">
                    {articles.map(article => (
                        <NavLink key={article.id} to="/newsDetails?article={article.id}" className="card d-flex flex-column">
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
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default overviewNews