// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from 'axios';


class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 1234567.89,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      
      },
      debits: [],
      credits: [],
      
     
  
    }
  }



  async componentDidMount() {
    let debitsAPI = 'https://moj-api.herokuapp.com/debits'; 
    let creditsAPI = 'https://moj-api.herokuapp.com/credits'; 

    // Await for promise (completion) returned from API call
    try {  // Accept success response as array of JSON objects (users)
      let response = await axios.get(debitsAPI);
      let response2 = await axios.get(creditsAPI);
      console.log(response);  // Print out response
      // To get data object in the response, need to use "response.data"
      this.setState({debits: response.data});
      this.setState({credits: response2.data});
        // Store received data in state's "users" object
    } 
    catch (error) {  // Print out errors at console when there is an error response
      if (error.response) {
        // The request was made, and the server responded with error message and status code.
        console.log(error.response.data);  // Print out error message (e.g., Not Found)
        console.log(error.response.status);
          // Print out error status code (e.g., 404)
      }
      else if (error.response2) {
        // The request was made, and the server responded with error message and status code.
        console.log(error.response2.data);  // Print out error message (e.g., Not Found)
        console.log(error.response2.status);
          // Print out error status code (e.g., 404)
      }       
    }
  }  


  addCredit = (cred) => {
    this.state.credits.push(cred);
    
  

  }

  addDebit = (debit) => {
    this.state.debits.push(debit);
    // this.setState({debits: this.state.debits});

    //updating amount 

    

    
    this.setState({debits : this.state.debits});
    
    

  }
 

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})

  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)  // Pass props to "LogIn" component
    const Debit_component = () => (<Debits debits={this.state.debits} addDebit={this.addDebit}/>);
    const Credit_component = () => (<Credits credits={this.state.credits} addCredit={this.addCredit} />);



    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/Debits" render={Debit_component}/>
          <Route exact path="/Credits" render={Credit_component}/>
          
        </div>
      </Router>
    );
  }
}

export default App;