// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, {Component} from 'react';

import '../App.css';




class Home extends Component {
  
  render() {
    return (
      <div style={{marginLeft: 190}}>
        <br></br>
        <br></br>
        <br></br>
    
        <h1 class="title">Bank of React</h1>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        
        <div class="title">
         <h3>Total Balance: {this.props.accountBalance}</h3>
         <br></br>
         <h3> Credit Balance: {this.props.totalCredits}</h3>
         <br></br>
         <h3> Debit Balance: {this.props.totalDebits}</h3>
        </div>
        <br></br>
        <br></br>


      </div>
    );
  }
}

export default Home;