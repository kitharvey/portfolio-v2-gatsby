import React from 'react'
import Nav from './Nav.js'
import Home from './Home.js'
import Projects from './Projects.js'
import About from './About.js'
import Preloader from './Preloader.js'
import "../scss/style.scss"
import Footer from './Footer.js'

export default function Portfolio() {
    
    return (
        <div className="wrapper" > 
            
            <Preloader></Preloader>
            <Nav></Nav>
            <Home></Home>
            <Projects></Projects>
            <About></About>
            <Footer />
        </div>
        
    )
    
}
