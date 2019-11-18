import React from 'react';
import { Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Nav pills className="p-3 d-flex justify-content-around">
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
