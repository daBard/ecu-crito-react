import React from 'react'

import Hero from '../components/sections-info/smallHero/smallHero'
import OverviewNews from '../components/sections-info/overviewNews/overviewNews'
import Newsletter from '../components/sections-input/newsletter/newsletter'

const News = () => {
  return (
    <main className="w-100">
      <Hero 
        _link='news' _title='News & articles'
      />
      <OverviewNews />
      <Newsletter />
    </main>
  )
}

export default News