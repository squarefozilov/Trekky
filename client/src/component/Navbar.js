import React from "react";
import {Link} from "react-router-dom"


function Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a className="navbar-brand" href="/">Trekky</a>
            <ul className="navbar-nav">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
                <Link to="/navigation" className={window.location.pathname === "/navigation" ? "nav-link active" : "nav-link"}>
                    Map
                </Link>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    Profile
                </li>
                {/* if signup complete, sign up will not be shown and logout will be shown */}
                <Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
                    Sign up
                </Link>
            </ul>
        </nav>
    );
}


export default Navbar;