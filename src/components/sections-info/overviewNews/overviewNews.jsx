import React, { useState, useEffect } from 'react'
//import { getData } from '../../../helper/api'

const overviewNews = () => {
    const [articles, setArticles] = useState([{}]);
    
    useEffect(() => {
        getArticles()
    }, [])

    async function getArticles() {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        const data = await result.json()
        console.log(data)
        setArticles(data)
    }

    return (
        <>
            <div>
                {articles.map(article => (
                <div key={article.id}>{article.title}</div>
                ))}
            </div>
        </>
    )
}

export default overviewNews