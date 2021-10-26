import React, { Component } from 'react'
import reactDom from 'react-dom';
import VanillaTilt from 'vanilla-tilt';
import './Nav.css'
export default class Nav extends Component {

    componentDidMount() {
        document.getElementById('searchNavInput').addEventListener('keyup', (e) => {
            if (e.key == 'Enter') {
                document.getElementById('SearchNav').click()
            }
        });

        VanillaTilt.init(document.querySelectorAll(".navbtn"), {
            max: 15,
            perspective: 500,
            speed: 400,
            scale: 1.1
        });
    }
    render() {
        const { Signedin, logout, changeRoute, Route, searchNav } = this.props
        if (Signedin) {
            return (
                // <div className='navtop'>
                //     <div className='navtitle'>Ani-Char</div>
                //     <div className='navright'>
                //         <button className='navbtn' id='logout' onClick={logout}>SignOut</button>
                //         <button className='navbtn' id='profile' onClick={() => changeRoute('Profile')}>Profile</button>
                //     </div>
                // </div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" onClick={()=>changeRoute('Home')} >AniChar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <div class="input-group ">
                                <input type="text" class="form-control" id='searchNavInput' aria-label="Text input with segmented dropdown button" placeholder='Search'></input>
                                <button type="button" id='SearchNav' class="btn btn-outline-secondary" onClick={searchNav} >Anime</button>
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#" onClick={() => { document.getElementById("SearchNav").textContent = "Anime" }}>Anime</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => { document.getElementById("SearchNav").textContent = "Character" }}>Character</a></li>
                                </ul>
                            </div>
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" onClick={() => changeRoute('Home')}>Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={logout}>Logout</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Profile
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" onClick={() => changeRoute('Profile')}>Profile</a></li>
                                        <li><a class="dropdown-item" onClick={() => changeRoute('Profile')}>Character List</a></li>
                                        <li><hr class="dropdown-divider"></hr></li>
                                        <li><a class="dropdown-item" onClick={logout}>Logout</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }
        else {
            return (
                // <div className='navtop'>
                // <div className='navtitle'>Ani-Char</div>
                // <div className='navright'>
                //     <button className='navbtn' id='signup' onClick={() => { changeRoute('Signup') }}>SignUp</button>
                //     <button className='navbtn' id='signin' onClick={() => { changeRoute('Signin') }}>SignIn</button>
                // </div>
                // </div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" onClick={()=>changeRoute('Home')}>AniChar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <div class="input-group collapseInput">
                                <input type="text" id='searchNavInput' class="form-control" aria-label="Text input with segmented dropdown button"></input>
                                <button type="button" id='SearchNav' class="btn btn-outline-secondary" onClick={searchNav} >Anime</button>
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#" onClick={() => { document.getElementById("SearchNav").textContent = "Anime" }}>Anime</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => { document.getElementById("SearchNav").textContent = "Character" }}>Character</a></li>
                                </ul>
                            </div>
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={() => { changeRoute('Signup') }}>Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={() => { changeRoute('Signin') }}>Login</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle disabled" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Profile
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li><a class="dropdown-item" href="#">Character List</a></li>
                                        <li><hr class="dropdown-divider"></hr></li>
                                        <li><a class="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }

    }
}
