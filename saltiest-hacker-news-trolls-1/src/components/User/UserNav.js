import React from 'react';
import {Link} from "react-router-dom"

const UserNav = () => {

    const handleLogout = () => {
        
    }


    return(
    <div className="App-Wrap">
      
      <div className="Nav">
      <div>
          <Link className="Register" to="Register">Register</Link>
        </div>
        
        
        <div>
          <Link className="Logout" to="Logout">Logout</Link>
          
        </div>

        
      </div>
      </div>
    )
}