import React from 'react'
import resume from "../../images/resume.pdf"

function Footer() {
    return (
        <footer>
            <div className="main-buttons">
                <a href={resume} target="__blank">resume</a> 
            </div>
            <div className="main-buttons">
                <a href="https://github.com/kitharvey" target="__blank">github</a>
            </div>
            <div className="main-buttons">
                <a href="mailto:kitharveycaubalejo@gmail.com" target="__blank" >email</a>
            </div>
            <div className="main-buttons">
                <a href="https://www.linkedin.com/in/kitharvey/" target="__blank" >linkedin</a>
            </div>
        </footer>
    )
}

export default Footer
