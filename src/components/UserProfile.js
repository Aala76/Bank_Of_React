// src/components/UserProfile.js
// The UserProfile component is used to demonstrate the use of Route and Link.

import React, {Component} from 'react';
import '../deb.css';

class UserProfile extends Component {
  render() {
    return (
        <div style={{marginLeft: 190}} class ="title">
          <br></br>
          <br></br>
          <br></br>
          <h1>User Profile</h1>
          <br></br>
          <br></br>
          <img src="profile.png" alt="profile"/>
          <br></br>
          <br></br>
          <h3>Username: {this.props.userName}</h3>
          <br></br>
          <h3>Member Since: {this.props.memberSince}</h3>
          
        </div>
    );
  }
}

export default UserProfile;