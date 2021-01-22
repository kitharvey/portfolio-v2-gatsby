import React from 'react'


export default function Projects(){
    const style = {
        textTransform: 'uppercase'
    }

    return(
        <div id="projects">
            <p style={style}>projects</p>
            <div className="proj-wrapper">
                <div className="proj" >
                    <div className = "details">
                        <h1> asd </h1>
                        <div className="subtitles" >
                            <small className="description" > asd </small>
                            <a className="link" target="__blank" > <small> repository </small> </a>
                            <a className="link" target="__blank" > <small> website </small> </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}