import React from 'react'
import Navbar from './Components/Navabar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/title/title'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our Programs' title='What We Offer' />
        <Programs />
        <About />
      </div>
    </div>
  )
}

export default App