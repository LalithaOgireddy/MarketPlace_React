import React from 'react';
import logo from "./assets/images/index.png"

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt= "" width="80" height="30" className="d-inline-block align-top"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    
                    </ul>
                </div>
                </div>
            </nav>
    );
};

export default Navbar;