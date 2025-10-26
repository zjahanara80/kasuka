import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import About from './About/About'
import Logos from './Logos/Logos'
import Advert from './Advert/Advert'
import Services from './Services/Services'
import Banner from './Banner/Banner'
import Portfolio from './Portfolio/Portfolio'
import Counts from './Counts/Counts'
import Roles from './Roles/Roles'
import Team from './Team/Team'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import "remixicon/fonts/remixicon.css";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <About />
      <Logos />
      <Advert />
      <Services />
      <Banner />
      <Portfolio />
      <Counts />
      <Roles />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}


export default App
