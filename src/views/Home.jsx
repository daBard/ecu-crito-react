import React from 'react'

import Header from '../components/header-footer/header'
import Footer from '../components/header-footer/footer'
import Hero from '../components/sections-info/hero/hero'
import LogoBar from '../components/sections-info/logoBar/logoBar'
import Features from '../components/sections-info/features/features'
import About from '../components/sections-info/about/about'
import Service from '../components/sections-info/service/service'
import WhyUS from '../components/sections-info/whyUs/whyUs'
import ProjectCase from '../components/sections-info/projectCase/projectCase'
import Team from '../components/sections-info/team/team'
import Testimonials from '../components/sections-info/testimonials/testimonials'
import ArticlesNews from '../components/sections-info/articlesNews/articlesNews'
import Newsletter from '../components/sections-input/newsletter/newsletter'

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-100">
        <Hero />
        <LogoBar />
        <Features />
        <About />
        <Service />
        <WhyUS />
        <ProjectCase />
        <Team />
        <Testimonials />
        <ArticlesNews />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default Home