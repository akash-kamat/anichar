import React, { Component } from 'react'
import './Signin.css'

export default class Signin extends Component {
    componentDidMount(){
        document.getElementById('password').addEventListener('keyup',(e)=>{
            if (e.key==='Enter') {
                document.getElementById('loginBtn').click()
            }
        })
    }
    render() {
        const { login, changeRoute } = this.props
        return (
            // <div id='signinBox'>
            //     <h1 className='signintitle'>Login</h1>
            //     <div className="innersignin">
            //         <input type="text" name="username" id="username" placeholder='Enter Username' />
            //         <input type="password" name="password" id="password" placeholder='Enter Password' />
            //         <button id='loginBtn' onClick={login} >Login</button>
            //     </div>
            // </div>
            <div>
                <div class="container" id="container">
                    <div class="form-container sign-in-container">
                        <form id='loginfrm' action="#">
                            <h1 className='signinText' >Sign in</h1>
                            <input className='loginfields' id="username" type="email" placeholder="Username" />
                            <input className='loginfields' id='password' type="password" placeholder="Password" />
                            <a className='forgotPass' onClick={()=>changeRoute('ForgotPass')} >Forgot your password?</a>
                            <button id='loginBtn' onClick={login} >Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                <h1>Not registered yet?</h1>
                                <p id='descReg'>Go to registration page instead</p>
                                <button id='registerBtn'  onClick={()=>changeRoute('Signup')} class="ghost">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
