import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";
import FormikLoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <nav>
        {/* This will be refactored into a reactstrap nav later. */}
        <h1>nasty placeholder nav</h1>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        {/* Other links */}

      </nav>
      <Route exact path="/login" render={props => <FormikLoginForm {...props} />} />
      {/* other routes */}
    </div>
  );
}

export default App;
