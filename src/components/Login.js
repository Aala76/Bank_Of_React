// src/components/Login.js
// The LogIn component is used to demonstrate the use of Redirect.

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './login.css';

class LogIn extends Component {
  constructor () {  // Create and initialize state
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  // When the user name input is changed, capture the input and update the state (user.userName)
  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  // When user clicked "Log In" button, store user data and then redirect to "User Profile" page
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }
  
  render () {
    if (this.state.redirect) {  // Redirect to "User Profile" page when "Log In" button is clicked
      return (<Redirect to="/userProfile"/>)
    }
    // Render the login form
    return (
      




      <div style={{marginLeft: 190}} class="login" class="title">

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

        <h1>Login</h1>
        <br></br>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div class="login">
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} class="pad"/>
          </div>
          <div>
            <label htmlFor="password">Password  </label>
            <input type="password" name="password" class="pad"/>
          </div>
          <button class="button">Log In</button>
        </form>                  
      </div>
    )
  }
}

export default LogIn