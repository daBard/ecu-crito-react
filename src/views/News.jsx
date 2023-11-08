import React from 'react'

import Header from '../components/header-footer/header'
import Footer from '../components/header-footer/footer'
import Hero from '../components/sections-info/smallHero/smallHero'
import OverviewNews from '../components/sections-info/overviewNews/overviewNews'
import Newsletter from '../components/sections-input/newsletter/newsletter'

const News = () => {
  return (
    <>
    <Header />
    <main className="w-100">
      <Hero 
        _link='news' _title='News & articles'
      />
      <OverviewNews />
      <Newsletter />
    </main>
    <Footer />
    </>
  )
}

export default News