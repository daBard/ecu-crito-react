import { useContext, createContext, useState, useEffect } from "react"

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const apiUrl = 'https://win23-assignment.azurewebsites.net/api'
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        try {
            const result = await fetch(`${apiUrl}/articles`)
            setArticles(await result.json())
        } catch (error) {
            console.log(error)
        }

    }

    const getArticle = async (_id) => {
        try {
            const result = await fetch(`${apiUrl}/articles/${_id}`)
            setArticle(await result.json())
        } catch (error) {
            console.log(error)
        }
    }

    const clearArticles = () => {
        setArticles([])
    }

    return (
        <ArticleContext.Provider value={{articles, article, getArticles, getArticle, clearArticles}}>
            {children}
        </ArticleContext.Provider>
    )
}