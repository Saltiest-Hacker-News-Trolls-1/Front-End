import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Nav = () => {
  return (
    <div className="App-Wrap">
      
      <div className="Nav">
      <div>
          <Link className="Register" to="Register">Register</Link>
        </div>
        
        
        <div>
          <Link className="Login" to="Login">Login</Link>
          
        </div>

        
      </div>
      <div className="logo"><img src={logo} alt="logo"/></div>
      <h1 className="title">SALTIEST</h1>
      <h1 className="title">HACKER</h1>
      <div className="saltyPeopleSection">
          <div className="saltyPeopleBox">
              <div className ="saltyPeople">One</div>
              <div className ="saltyPeople">Two</div>
              <div className ="saltyPeople">Three</div>
          </div>

      </div>
    </div>
  );
};

export default Nav;