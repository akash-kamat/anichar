import React, { Component } from 'react'
import Animecard from './Animecard'
import './AnimecardList.css'

export default class AnimecardList extends Component {
    
    render() {
        const { Animedata, changeRoute, animeclick } = this.props
        return (
            <div className="Animelist">
                {
                    Animedata.map((element, i) => {
                        return <Animecard
                            id={Animedata[i].mal_id}
                            num={i}
                            name={Animedata[i].title}
                            imgurl={Animedata[i].image_url}
                            airing={Animedata[i].airing}
                            score={Animedata[i].score}
                            key={i}
                            changeRoute={changeRoute}
                            animeclick={animeclick} 
                            />
                    })
                }
            </div>
        )
    }
}
