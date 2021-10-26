import React, { Component } from 'react'
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'

import Search from './components/Search'
import Nav from './components/Nav'
import AnimecardList from './components/AnimecardList';
import CharactercardList from './components/CharactercardList';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';
import ForgotPass from './components/ForgotPass';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Route: 'Home',
      Animedata: [],
      Chardata: [],
      Signedin: false,
      User: {},
      Fav: [],
      AllUsers: [],
      Loading: false
    }
  }
  componentDidMount() {
    fetch(`https://anichar.herokuapp.com/users`)
      .then(response => response.json())
      .then(result => {
        result.forEach(element => {
          this.setState({
            AllUsers: this.state.AllUsers.concat([element.name])
          })
        })
      })
      .catch(error => console.log('error', error));
    const name = localStorage.getItem("name")
    const pass = localStorage.getItem("password")
    if (name == null || pass == null) {
      console.log("no one logged in")
    }
    else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "name": name,
        "password": pass
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://anichar.herokuapp.com/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.login === '1') {
            this.setState({
              Signedin: true,
              Route: 'Home',
              User: result,
              Fav: result.favorites
            })
            console.log("signed in")
          }
          else {
            // alert("invalid Credential")
            this.setState({ Route: 'Signin' })
          }
        })
        .catch(error => console.log('error', error));
    }
  }
  search = () => {
    this.setState({ Route: 'Load' })
    var searchquery = document.getElementById("searchbox").value
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchquery}&page=1`)
      .then(response => response.json())
      .then(result => { this.setState({ Animedata: result.results }); this.setState({ Route: 'Results' }) })
      .catch(error => console.log('error', error));


  }

  searchNav = () =>{
    this.setState({ Route: 'Load' })
    var searchquery = document.getElementById("searchNavInput").value
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchquery}&page=1`)
      .then(response => response.json())
      .then(result => { this.setState({ Animedata: result.results }); this.setState({ Route: 'Results' }) })
      .catch(error => console.log('error', error));

  }
  animeclick = (id) => {
    this.setState({ Route: 'Load' })
    fetch(`https://api.jikan.moe/v3/anime/${id}/characters_staff`)
      .then(response => response.json())
      .then(result => { this.setState({ Chardata: result.characters }); this.setState({ Route: 'Characters' }) })

  }

  changeRoute = (page) => {
    this.setState({ Route: page })
  }

  login = () => {
    if (document.getElementById("username").value === '' || document.getElementById("password").value === '') {
      alert("Please Enter Correct Username/Password")
      this.setState({ Route: 'Signin' })
    }
    else {
      this.setState({ Route: 'Load' })
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "name": document.getElementById("username").value,
        "password": document.getElementById("password").value
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      this.setState({ Route: 'Load' })
      fetch("https://anichar.herokuapp.com/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.login === '1') {
            this.setState({
              Signedin: true,
              Route: 'Home',
              User: result,
              Fav: result.favorites
            })
            console.log("signed in")
            localStorage.setItem("name", result.name)
            localStorage.setItem("password", result.password)
          }
          else {
            // alert("invalid Credential")
            this.setState({ Route: 'Signin' })
          }
        })
        .catch(error => console.log('error', error));
    }


  }
  logout = () => {
    this.setState({
      Route:'Home',
      User: {},
      Signedin: false,
      Fav: []
    })
    localStorage.clear()
  }
  register = () => {

    if (document.getElementById("email").value === '' || document.getElementById("pass").value === '') {
      alert("Enter Username/Password")
    }
    else {

      if (this.state.AllUsers.includes(document.getElementById("email").value)) {
        alert("Username already taken")
      }
      else {
        this.setState({ Route: 'Load' })
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "name": document.getElementById("email").value,
          "password": document.getElementById("pass").value
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        this.setState({ Route: 'Load' })
        fetch("https://anichar.herokuapp.com/register", requestOptions)
          .then(response => response.text())
          .then(result => { console.log(result); this.setState({ Route: 'Signin' }) })
          .catch(error => console.log('error', error));

      }
    }
  }

  like = (name) => {
    if (this.state.Fav.includes(name)) {
      document.getElementsByClassName('likebtn').disabled = true;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "unlike": name,
        "name": this.state.User.name
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      this.setState({ Route: 'Load' })
      fetch("https://anichar.herokuapp.com/unlike", requestOptions)
        .then(response => response.json())
        .then(result => { this.setState({ User: result, Fav: result.favorites, Route:'Characters' }); document.getElementsByClassName('likebtn').disabled = false })
        .catch(error => console.log('error', error));

      document.getElementById(name).style.backgroundColor = '#5c87a8'
    }
    else {
      document.getElementsByClassName('likebtn').disabled = true;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "fav": name,
        "name": this.state.User.name
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      this.setState({ Route: 'Load' })
      fetch("https://anichar.herokuapp.com/like", requestOptions)
        .then(response => response.json())
        .then(result => { this.setState({ User: result, Fav: result.favorites,Route:'Characters' }); document.getElementsByClassName('likebtn').disabled = false })
        .catch(error => console.log('error', error));

      document.getElementById(name).style.backgroundColor = '#bd4b5e'
    }

  }


  render() {

    const nav = <Nav Signedin={this.state.Signedin} logout={this.logout} changeRoute={this.changeRoute} Route={this.state.Route} searchNav={this.searchNav} />
    const prof = <Profile User={this.state.User} Fav={this.state.Fav} />

    if (this.state.Route === 'Home') {
      return (
        <div>
          {nav}
          <Search search={this.search} />
        </div>
      )
    }
    else if (this.state.Route === 'Results') {
      return (
        <div>
          {nav}
          <AnimecardList Animedata={this.state.Animedata} animeclick={this.animeclick} Fav={this.state.Fav} />
        </div>
      )
    }
    else if (this.state.Route === 'Characters') {
      return (
        <div>
          {nav}
          <CharactercardList Chardata={this.state.Chardata} like={this.like} Signedin={this.state.Signedin} Fav={this.state.Fav} User={this.state.User} />
        </div>
      )
    }
    else if (this.state.Route === 'Signin') {
      return (
        <Signin login={this.login} changeRoute={this.changeRoute} />
      )

    }
    else if (this.state.Route === 'Signup') {
      return (
        <Signup register={this.register} changeRoute={this.changeRoute} />
      )

    }
    else if (this.state.Route === 'Profile') {
      return (
        <div>
          {nav}
          {prof}
        </div>
      )

    }

    else if (this.state.Route === 'Load') {
      return (
        <BarLoader color={'#4b9cdb'} loading={true} css={css`
        display: block;
        margin: 0 auto;
        margin-top: 50vh;
        border-color: red;
      `} size={150} />
      )
    }
    else if (this.state.Route === 'ForgotPass') {
      return(
        <ForgotPass/>
      )
    }
  }

}


