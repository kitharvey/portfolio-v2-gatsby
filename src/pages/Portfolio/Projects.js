import React, {useState} from 'react'
import poke from '../../images/poke-decks.mp4'
import MouseTooltip from 'react-sticky-mouse-tooltip';

export default function Projects(){
    const [isShow, setIsShow] = useState(false)
    const handleMouseOver = () => {
        setIsShow(true)
    }
    const handleMouseOut = () => {
        setIsShow(false)
    }
    return(
        <div id="projects">
            <p className="uppercase-text">projects</p>
            <div className="proj-wrapper">
                <div className="proj" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    <div className = "details">
                        <h1> Pokédecks </h1>
                        <div className="subtitles" >
                            <small className="description" > A pokédex in card style </small>
                        </div>
                        <div className="subtitles" >
                            <small className="description" > react </small>
                            <small className="description" > typescript </small>
                            <small className="description" > tailwindcss </small>
                            <small className="description" > PokéAPI </small>
                            <small className="description" > Framer </small>
                            <small className="description" > react-query </small>
                        </div>
                        <div className="subtitles" >
                            <a className="link" target="__blank" > <small> repository </small> </a>
                            <a className="link" target="__blank" > <small> website </small> </a> 
                        </div>
                    </div>
                    <MouseTooltip
                        offsetX={15}
                        offsetY={10}
                        visible={isShow}
                    >
                        <div className = "video-container" >
                            <video preload="metadata" loop width={500}>
                                    <source src={poke} type="video/mp4" />
                            </video>
                        </div>
                           
                    </MouseTooltip>
                </div>
            </div>
        </div>
    )
}