import React from 'react'

import Header from '../components/header-footer/header'
import Footer from '../components/header-footer/footer'
import OverviewNews from '../components/sections-info/overviewNews/overviewNews'

const News = () => {
  return (
    <>
    <Header />
    <main className="w-100">
        <OverviewNews />
    </main>
    <Footer />
    </>
  )
}

export default News