import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav'
import Countdown from './countdown'
import About from './about'
import Qiskit from './qiskit'
import Footer from './Footer'
import Main from './maincontent'
import EventDetails from './EventDetails'
import FAQ from './faq'
import Guest from './guests'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
      <Nav/>
      <Countdown/>
      <About/>
      <Qiskit/>
      <EventDetails/>
      
      <FAQ/>
      <Guest/>
    </>
  )
}

export default App
