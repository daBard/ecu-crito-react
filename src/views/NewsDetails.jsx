import React from 'react'

import Header from '../components/header-footer/header'
import Footer from '../components/header-footer/footer'
import ArticleNews from '../components/sections-info/articleNews/articleNews'

const NewsDetails = () => {
  return (

    <>
    <Header />
    <main className="w-100">
      <ArticleNews />
    </main>
    <Footer />
    </>
  )
}

export default NewsDetails