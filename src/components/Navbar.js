import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
      <nav className="nav-container">
        <ul className="nav-unordered-list">
          <br/>
          <br/>

          <li className="nav-list-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/userProfile">userProfile</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/Debits">Debit</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/Credits">Credits</NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;




// 
    