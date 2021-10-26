import React, { Component } from 'react'
import VanillaTilt from 'vanilla-tilt';

import './Charactercard.css'
export default class Charactercard extends Component {
    componentDidMount() {

        this.props.Fav.forEach(element => {
            try {
                document.getElementById(element).classList.add("liked")
            }
            catch {

            }
        });

        VanillaTilt.init(document.querySelectorAll(".Charactercard"), {
            max: 5,
            perspective:1000,
            speed: 400,
            scale:1.03,
            glare:true,
            "max-glare":0.5
        });


    }
    render() {

        const { imgurl, name, role, like, Signedin } = this.props
        if (Signedin) {
            return (
                <div className="Charactercard" id={name}>
                    <img className="pfp" src={imgurl} alt="" />
                    <div className="chardetails">
                        <h1 className="charname">{name}</h1>
                        <h3 className="role">Role:{role}</h3>
                        <button className='likebtn' onClick={() => like(name)}>💗</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="Charactercard" id={name}>
                    <img className="pfp" src={imgurl} alt="" />
                    <div className="chardetails">
                        <h1 className="charname">{name}</h1>
                        <h3 className="role">Role:{role}</h3>
                        <div>
                            <button className='likebtn' title='Login to add to favorites' onClick={() => like(name)} disabled>💗</button>
                        </div>
                    </div>
                </div>
            )
        }

    }
}
