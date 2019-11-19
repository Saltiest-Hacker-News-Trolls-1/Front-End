import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import FormikLoginForm from './components/LoginForm';
import PrivateRoute from "./utils/PrivateRoute";
import UserProfile from "./components/User/UserProfile";
import Navbar from './components/Navigation';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <PrivateRoute path="/protected">
          <UserProfile />
        </PrivateRoute>
        <Route exact path="/login" render={props => <FormikLoginForm {...props} />} />
      </Switch>

      {/* other routes */}
    </div>
  );
}

export default App;

