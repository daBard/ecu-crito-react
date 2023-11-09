import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AutoScrollToTop = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior:'instant' })
    }, [location.pathname])
  
    return null
}

export default AutoScrollToTop