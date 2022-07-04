
import React, {Component} from 'react';
import "./sidebar.css";
//import AccountBalance from './AccountBalance';
import { NavLink } from "react-router-dom";



class Sidebar extends Component {

    getProp = (props) => {
        console.log(this.props.AccountBalance)
    }


    render(){


        return (
        <div class="wrapper">
        <div class="sidebar">

            <img src="logo192.png" alt="react logo" class = "logo"/>
            <h2>Bank of react</h2>
            <ul>
            <li className="nav-list-item" >
            <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-list-item">
            <NavLink to="/Debits">Debits</NavLink>
            </li>
            <li className="nav-list-item">
            <NavLink to="/Credits">Credits</NavLink>
            </li>
            <li className="nav-list-item">
            <NavLink to="/userProfile">User Profile</NavLink>
            </li>
            <li className="nav-list-item">
            <NavLink to="/login">Login</NavLink>
            </li>

            {this.props.totalDebits}
            <br></br>
            <br></br>
            <p>
            
            </p>

            </ul> 
        </div>
    </div>
    )
    }
};

export default Sidebar;
