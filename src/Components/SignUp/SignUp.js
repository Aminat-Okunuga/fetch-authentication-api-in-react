import React from 'react';
import "../Login/Login.css"

const SignUp = () => {
  return (
    <div>
        <div class="form">
            <form class="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="Password"/>
                <input type="email" placeholder="Email address"/>
                <input type="email" placeholder="Email address"/>
                <button>create</button>
                <p class="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                <form class="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                <p class="message">Not registered? <a href="#">Create an account</a></p>
            </form>
        </div>
    </div>
  )
}

export default SignUp