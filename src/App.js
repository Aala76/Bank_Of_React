// src/App.js

import React, {Component,  Suspense } from 'react';
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import Sidebar from './components/Sidebar';

import axios from 'axios';








class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 515.88,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      
      },
      debits: [],
      credits: [],
      totalDebits: 4210.77,
      totalCredits: 4726.65

      
      
     
  
    }
  }

  getinSB = () => {
    return [this.state.accountBalance, this.state.totalCredits, this.state.totalDebits]
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


  addCredit = (credit, amount) => {
    this.state.credits.push(credit);
    // this.setState({debits: this.state.debits});

    //updating amount 

    
    
    if (parseInt(amount)){
      let cred = parseFloat(this.state.totalCredits) + parseFloat(amount);
      let am = (parseFloat(this.state.accountBalance) + parseFloat(amount));

      this.setState({totalCredits: cred.toFixed(2)});
      this.setState({accountBalance: am.toFixed(2)});
      console.log(amount);
    }
    
    this.setState({credits : this.state.credits});



  }

  addDebit = (debit, amount) => {
    this.state.debits.push(debit);
    // this.setState({debits: this.state.debits});

    //updating amount 

    
    
    if (parseInt(amount)){
      let deb = parseFloat(this.state.totalDebits) + parseFloat(amount);
      
      this.setState({totalDebits: deb.toFixed(2)});
      this.setState({accountBalance: (this.state.accountBalance - amount).toFixed(2)});

    }
    
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
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} totalCredits={this.state.totalCredits} totalDebits={this.state.totalDebits}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)  // Pass props to "LogIn" component
    const Debit_component = () => (<Debits debits={this.state.debits} addDebit={this.addDebit} accountBalance={this.state.accountBalance} totalDebits={this.state.totalDebits} />);
    const Credit_component = () => (<Credits credits={this.state.credits} addCredit={this.addCredit} accountBalance={this.state.accountBalance} totalCredits={this.state.totalCredits}  />);
    const SideBar_Comp = () => (<Sidebar getinSB={this.getinSB}/>);


    return (

      <Suspense fallback={<div>Loading...</div>}>
        <Router>
              
        <Sidebar/>
          <div style={{marginLeft: 120}} >
          <Switch> 
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/Debits" render={Debit_component}/>
            <Route exact path="/Credits" render={Credit_component}/>
            <Route exact path="/Sidebar" render={SideBar_Comp}/>
          </Switch>
        
        </div>
        </Router>
      </Suspense>
      
    );
  }
}

export default App;