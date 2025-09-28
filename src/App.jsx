import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Place from './components/Place'
import Touristplace from './components/Touristplace'
import AsianPlace from './components/AsianPlace'
import Service from './components/Service'
import Paradise from './components/Paradise'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Place/>
    <Touristplace/>
    <AsianPlace/>
    <Service/>
    <Paradise/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
