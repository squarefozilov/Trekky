
import {Link} from "react-router-dom"
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'
class Navbar extends Component  {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data); // Only for debugging
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Error in Logging out');
        })
    }

    render(){
        const loggedIn = this.props.loggedIn;
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
    
}


export default Navbar;