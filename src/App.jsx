import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Activities from './components/Activities'
import Publications from './components/Publications'
import Photography from './components/Photography'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Activities />
      <Publications />
      <Photography />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

