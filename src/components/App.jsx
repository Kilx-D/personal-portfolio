import React from 'react'
import Header from './header/Header';
import Nav from './nav/Nav';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Skills from './skills/skills'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
    </>
    )
}

export default App