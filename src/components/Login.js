import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Login extends Component {

  render(){
    return(
    <div className="login-form">
      <h1>The scheduler you can't live without</h1>
      <p>Please log in to access your account.</p>
      <form>
        <p>Username:</p>
        <input className="login-input" type="text"  />
        <p>Password:</p>
        <input className="login-input"  type="password"  /><br/>
        <Link to="/"><input className="submit-login" type="submit" value="Login"/></Link>
        </form>
    </div>
    )
  }

}

export default Login;
