import React, {useEffect, useState} from 'react'

import resume from "../../images/resume.pdf"

export default function Nav(){
    const [ isOpen, setOpener ] = useState(false);
    const theme = localStorage.getItem('theme')
    const [themeState, setThemeState] = useState(theme ? theme : 'light')

    useEffect(() => {
        themeState === 'light' ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark')
        themeState === 'light' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark')
    }, [themeState])

    const handleToggle = () => {
        themeState === 'light' ? setThemeState('dark') : setThemeState('light')
    }

    return (
        <div className="header">
            <div className="nav">
                <div className="logo">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="216px" height="144px" viewBox="0 0 216 144" enableBackground="new 0 0 216 144" xmlSpace="preserve">
                        <path d="M174.35,18.667l-18.31,70.126l-2.72,10.079l-3.758,13.924c-0.668-3.36-1.237-7.121-1.611-11.662
                            c-0.831-10.002-2.396-16.739-4.701-20.21c-2.309-3.472-7.374-6.658-15.195-9.56c15.231-3.886,22.854-12.254,22.854-25.105
                            c0-8.394-3.553-15.091-10.648-20.091c-7.1-5-16.582-7.5-28.441-7.5h-14.59h-30.78h-0.26v40.208v2.462v3.654H41.339v-3.654v-1.649
                            V18.667H10.56v106.095h30.779V76.25v-2.416h24.844v2.041v48.887h0.26h30.519h0.26V73.773h5.026c9.845,0,14.768,6.11,14.768,18.343
                            l0.154,7.929l0.158,6.293c0,7.357,1.061,13.501,3.186,18.424h29.199h4.223h23.369l28.135-106.095H174.35z M103.181,64.991h-5.958
                            V28.46h5.958c11.658,0,17.489,6.09,17.489,18.265C120.67,58.902,114.839,64.991,103.181,64.991z"/>
                    </svg>
                </div>

                <div className="burger" onClick={()=>setOpener(!isOpen)}>
                    <span className= {`line ${isOpen ? " open": ""}`} ></span>
                </div>

                <div className={`menu-container ${isOpen ? " open": ""}`} >
                    <div className="menu">
                        <a className="nav-items" onClick={()=>setOpener(!isOpen)} href="#home"> Home </a>
                        <a className="nav-items" onClick={()=>setOpener(!isOpen)} href="#projects"> Projects </a>
                        <a className="nav-items" onClick={()=>setOpener(!isOpen)} href="#about"> About </a>
                    </div>
                    <div className="port">
                        <h1>Kit Harvey Caubalejo</h1>
                        <p>Front-End Web Developer</p>
                        <p>Portfolio</p>
                        <div className="links">
                            <a href={resume} target="__blank">resume</a> 
                            <a href="https://github.com/kitharvey" target="__blank">github</a>
                            <a href="mailto:kitharveycaubalejo@gmail.com" target="__blank" >email</a>
                            <a href="https://www.linkedin.com/in/kitharvey/" target="__blank" >linkedin</a>
                        </div>
                        <div className="theme" onClick={handleToggle} >{themeState} mode</div>
                    </div>
                    
                </div>
                
            </div>
        </div>

       
    )
}