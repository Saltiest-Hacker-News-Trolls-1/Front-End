import React from 'react';
import { Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Nav pills className="p-2 d-flex justify-content-around mb-2 shadow-sm">
            <NavItem>
                <NavLink> <Link to="/login">Login</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to="/signup">Sign Up</Link></NavLink>
            </NavItem>
        </Nav>
    );
}

export default Navbar;
