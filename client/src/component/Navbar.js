import React from "react";

function Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a className="navbar-brand">Trekky</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Map</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Sign up</a>
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;