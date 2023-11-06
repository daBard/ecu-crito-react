import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Dots from '../../utilities/dots/dots'
//import { getData } from '../../../helper/api'

const articleNews = () => {
    const [article, setArticle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        displayArticle()
    }, [])


    const displayArticle = async () => {
        setArticle(await getData())
        console.log(article)
    }

    async function getData() {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
        return (await result.json())
    }

    return (
        <section className='w-100 article-news'>
            <div className='container'>
              <img src={article.imageUrl} />
              <h1>{article.title}</h1>
              <p>{article.content}</p>
              <p>{article.author}</p>
              <p>{article.published}</p>
              <p>{article.category}</p>
        </div>
        </section>
    )
}

export default articleNews