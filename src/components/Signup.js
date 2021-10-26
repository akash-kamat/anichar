import React, { Component } from 'react'
import './Signup.css'

export default class Signup extends Component {
    render() {
        const {register, changeRoute} = this.props;
        return (
            
            // <div id='signupBox'>
            //     <h1 className='signuptitle'>Register</h1>
            //     <div className="logininnerBox">
            //         <input type="text" name="username" id="email" placeholder="username" />
            //         <input type="password" name="password" id="pass" placeholder="password" />
            //         <button id='registerBtn' onClick={this.props.register} >Register</button>
            //     </div>
            // </div>
            <div>
                <div class="container" id="container">
                    <div class="form-container sign-in-container">
                        <form id='loginfrm' action="#">
                            <h1 className='signinText' >Register</h1>
                            <input className='loginfields' id="email" type="text" placeholder="Username" />
                            <input className='loginfields' id='pass' type="password" placeholder="Password" />
                            <button id='loginBtn' onClick={register} >Sign up</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                <h1>Existing User?</h1>
                                <p id='descReg'>Go to login page instead</p>
                                <button id='registerBtn'  onClick={()=>changeRoute('Signin')} class="ghost">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
