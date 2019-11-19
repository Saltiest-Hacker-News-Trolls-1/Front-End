import React from 'react';
import { Link } from 'react-router-dom';
import saltShaker from '../saltShaker.svg';


const About = () => {
  return (
    <div className="App-Wrap">

      <div className="Nav">
        <div>
          <Link className="Register" to="/register">Register</Link>
        </div>


        <div>
          <Link className="Login" to="/login">Login</Link>

        </div>
        
        <div>
          <Link className="About" to="/about">About</Link>
        </div>


      </div>
      <div className="aboutTitle">
      <h1 className="aboutTitle1">WHY</h1>
      </div><h1 className="aboutTitle2">SO</h1>
      <h1 className="aboutTitle3">SALTY?</h1>
      <div className="saltShaker"><img src={saltShaker} alt="saltShaker" />
      </div>
      <div className="saltyPeopleSection">
        <div className="saltPile">
        <p className="aboutText">We measure the saltiness/negativity of your users, allowing you to filter out negativity form your social platform, and provide a more positive experience to your users. We also allow users on our map to vote on particular users, allowing a more fine grained selection process.</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;