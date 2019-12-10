import React from "react";
import {Link} from "react-router-dom"


class  Navbar extends React.Component{
      logOut(e){
              e.preventDefault()
              localStorage.removeItem('usertoken')
              this.props.history.push(`/`)
              }
    render (){
        const loginRegLink = (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          )

          const userLink = (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/profile" className="nav-link">
                  Log Out
                </Link>
              </li>
            </ul> 
          )

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
            {localStorage.usertoken ? userLink : loginRegLink}
            </ul>
          
        </nav>
    );
    }
}


export default Navbar;