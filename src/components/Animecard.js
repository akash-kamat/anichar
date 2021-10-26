import React, { Component } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './Animecard.css'

export default class Animecard extends Component {
    componentDidMount(){
        VanillaTilt.init(document.querySelectorAll(".animeCards"), {
            max: 10,
            perspective:700,
            speed: 400,
            scale:1.03,
            glare:true,
            "max-glare":0.5
        });
    }
    render() {
        const { num, animeclick, imgurl, name, id, airing, score } = this.props
        return (
            <div className="animeCards" id={num} onClick={() => { animeclick(id) }}>
                <img id='animeImg' src={imgurl} alt="" />
                <h1 className="animetitle">{name}</h1>
                <div className="details">
                    <h2 className='score'>⚡Rating:{score}</h2>
                    <h2 className='airing'>▶️Airing:{airing.toString()}</h2>
                </div>

            </div>
        )
    }
}
