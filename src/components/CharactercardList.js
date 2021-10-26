import React, { Component } from 'react'
import Charactercard from './Charactercard'
import './CharactercardList.css'

export default class CharactercardList extends Component {
    constructor() {
        super();
        this.state = {
            favs: []
        }
    }
    render() {
        const { Chardata, like, Signedin, Fav } = this.props
        return (
            <div id='Characterlist'>
                {
                    Chardata.map((element, i) => {
                        return <Charactercard

                            id={Chardata[i].mal_id}
                            num={i}
                            name={Chardata[i].name}
                            imgurl={Chardata[i].image_url}
                            role={Chardata[i].role}
                            key={i}
                            like={like}
                            Fav={Fav}
                            Signedin={Signedin}
                        />
                    })
                }
            </div>
        )
    }
}
