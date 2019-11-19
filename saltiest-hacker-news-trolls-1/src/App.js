import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import FormikLoginForm from './components/LoginForm';
import PrivateRoute from "./utils/PrivateRoute";
import UserProfile from "./components/User/UserProfile";
import Navbar from './components/Navigation';
import Nav from './components/Nav'
import { axiosWithAuth } from './utils/axiosWithAuth';
import {useHistory} from "react-router-dom"

function App() {

  const history = useHistory()

  const isLoggedIn = () => {
    axiosWithAuth()
      .post("")
      .then(res => {
        console.log("login", res)
        localStorage.getItem("token", res.data.payload)
        history.push("/protected")
      })
      .catch(err => console.log(err.response))
  }

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <PrivateRoute path="/protected">
          <UserProfile />
        </PrivateRoute>
        {/* <Route exact path="/login" render={props => <FormikLoginForm {...props} />} /> */}
      </Switch>

      {/* other routes */}
    </div>
  );
}

export default App;

