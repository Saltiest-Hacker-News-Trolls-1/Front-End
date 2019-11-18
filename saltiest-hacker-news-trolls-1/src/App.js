import React from 'react';
import './App.css';
import { Login, Register, Home, Nav } from './components';
import { BrowserRouter as  Route } from "react-router-dom";

const App = () => (
  <div>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route path="/Login" component={Login} />
    <Route path="/Register" component={Register} />
  </div>
);

export default App;

