import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getDataById as helper_getDataById, getData as helper_getData} from '../../../helper/api'
import { object } from 'yup'

const articleNews = () => {
    const [article, setArticle] = useState({})
    const [recentPosts, setRecentPosts] = useState([{}])

    const {id} = useParams()
    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    useEffect(() => {
        displayRecentPosts()
    }, [])
    
    useEffect(() => {
        displayArticle()
    }, [id])

    const displayArticle = async () => {
        const data = await helper_getDataById(id)
        
        const newData = await changeDate(data)

        setArticle(newData)
    }

    const displayRecentPosts = async () => {
        const data = await helper_getData()
        
        let newData = await data.slice(0, 3)
       
        newData = await changeDates(newData)
    
        setRecentPosts(newData)
    }


    const changeDate = async (_data) =>  {
        let newData = await _data
    
        let date = _data.published.split('T', '1').toString().split('-')

        newData.year = date[0]

        newData.month = monthName[date[1] - 1]

        newData.day = Number(date[2])

        return (newData)
    }

    const changeDates = async (_data) =>  {
        let newData = await _data

        for (const [i, item] of _data.entries()) {
            let date = item.published.split('T', '1').toString().split('-')

            newData[i].year = Number(date[0])

            newData[i].month = monthName[date[1] - 1]

            newData[i].day = Number(date[2])
        }

        return (newData)
    }

    return (
        <section className='w-100 article-news'>
            <div className='container'>
              <div className='article-header'>
                <h2>{article.title}</h2>
                <div className='article-header-info'>
                    <p>{`${article.month} ${article.day}, ${article.year}`}</p>
                    <div className='dot'></div>
                    <p>{article.category}</p>
                    <div className='dot'></div>
                    <p>{article.author}</p>
                </div>
              </div>
              <div className='article-main'>
                <article>
                    <img src={article.imageUrl} />
                    <p>{article.content}</p>
                    <div className='btn-grp'>
                        <div>Digitalization</div>
                        <div>School</div>
                        <div>IT</div>
                        <div>Design</div>
                        <div>Work</div>
                        <div>Tech</div>
                    </div>
                </article>
                <div className='sidebar'>
                    <form className='search-field'>
                        <i className="fa-regular fa-magnifying-glass"></i>
                        <input type="search" id="news-search" name="" placeholder='Type to search...'/>
                    </form> 
                    <div className='recent-posts'>
                        <h3>Recent posts</h3>
                        <div>
                            {recentPosts.map((post, i) => (
                            <div key={post.id}>
                                <Link  to={`/news/details/${post.id}`}>
                                    <h4>{post.title}</h4>
                                    <p>{post.month}, {post.day}, {post.year}</p>
                                </Link>
                                { i <= (recentPosts.length - 2) ? <div className='line'></div> : '' }
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='categories'>
                        <h3>Categories</h3>
                        <div><span>Category 1</span> - 01 Posts</div>
                        <div><span>Category 2</span> - 12 Posts</div>
                        <div><span>Category 3</span> - 23 Posts</div>
                        <div><span>Category 4</span> - 34 Posts</div>
                        <div><span>Category 5</span> - 45 Posts</div>
                        <div><span>Category 6</span> - 56 Posts</div>
                    </div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default articleNews