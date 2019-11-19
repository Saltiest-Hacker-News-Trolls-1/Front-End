import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./components/UserProfile";
import Navbar from './components/Navigation';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Nav {...props} />} />
        <PrivateRoute path="/protected">
          <UserProfile />
        </PrivateRoute>
        <Route exact path="/login" render={props => (<><Navbar /> <FormikLoginForm {...props} /></>)} />
        <Route exact path="/register" render={props => (<><Navbar /> <FormikRegisterForm {...props} /></>)} />
      </Switch>

      {/* other routes */}
    </div>
  );
}

export default App;

