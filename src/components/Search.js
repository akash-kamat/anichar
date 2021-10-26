import React, { Component } from 'react'
import VanillaTilt from 'vanilla-tilt';
import './Search.css'
export default class Search extends Component {
    componentDidMount() {
        document.getElementById('searchbox').addEventListener('keyup',(event)=>{
            if (event.key=='Enter') {
                document.getElementById('searchbtn').click()
            }
        })
        VanillaTilt.init(document.querySelectorAll("#searchbtn"), {
            max: 15,
            perspective: 500,
            speed: 400,
            scale: 1.1
        });
    }
    render() {
        return (
            <div className="srchcont">
                <div className='searchCont'>
                    <input type="search" name="searchbox" id="searchbox" placeholder="Search-Anime" />
                    <button id='searchbtn' onClick={this.props.search}>Search</button>
                </div>
            </div>
        )
    }
}
