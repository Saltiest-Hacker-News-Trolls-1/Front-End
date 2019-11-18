import React, { useState } from 'react';
import { Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [activeButton, setActiveButton] = useState();

    return (
        <Nav pills className="p-2 d-flex justify-content-around mb-2 shadow-sm">
            <NavItem>
                <Link to="/login"><NavLink active={activeButton === 1} onClick={() => setActiveButton(1)}>Login</NavLink></Link>
            </NavItem>
            <NavItem>
                <Link to="/signup"><NavLink active={activeButton === 2} onClick={() => setActiveButton(2)}>Sign Up</NavLink></Link>
            </NavItem>
        </Nav>
    );
}

export default Navbar;
