import React, { Component } from 'react'
import './Profile.css'
export default class Profile extends Component {

    render() {
        const { User } = this.props;
        return (

            <div className='profilePage'>
                <div className="userDetails">
                    <img id='dp' src={"https://ui-avatars.com/api/?name=" + User.name} alt="" />
                    <div className="userDetailsInner">
                        <h1 className='userName'><span id='usrname'>{User.name}</span></h1>
                        <hr />
                        <h2 className='joinedDate'>Joined on: <span id='joinedDate'> {User.joinedOn.slice(0, 10)}</span></h2>
                    </div>
                </div>
                <div className='favs'>
                    {
                        User.favorites.map((element, i) => {
                            return (<h1 className='favItems' key={i}>{element}</h1>)
                        })
                    }
                </div>
            </div>

        )
    }
}
