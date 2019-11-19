import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./components/UserProfile";
import Navbar from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <PrivateRoute path="/protected">
          <UserProfile />
        </PrivateRoute>
        <Route exact path="/login" render={props => <FormikLoginForm {...props} />} />
        <Route exact path="/register" render={props => <FormikRegisterForm {...props} />} />
      </Switch>

      {/* other routes */}
    </div>
  );
}

export default App;

