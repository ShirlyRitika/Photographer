import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='container'>
      <Home/>
      <About/>
      <Skills/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App