import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './css/global.css'

import Home from './views/Home'
import Contact from './views/Contact'
import News from './views/News'
import NewsDetails from './views/NewsDetails'
import NotFound from './views/NotFound'
import AutoScrollToTop from './components/utilities/autoScrollToTop/AutoScrollToTop'
import Header from './components/header-footer/Header'
import Footer from './components/header-footer/Footer'
//import { ArticleProvider } from './helper/articleContext'
import { ContactProvider } from './helper/contactContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ArticleProvider> */}
    <ContactProvider>
      <Router>
        <AutoScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/details/:id' element={<NewsDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ContactProvider>
    {/* </ArticleProvider> */}
  </React.StrictMode>
)
