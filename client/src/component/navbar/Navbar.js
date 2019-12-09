import React from "react";
import {Link} from "react-router-dom";
// import styled from 'styled-components';
import "./Navbar.css"
import {Row,Container,Col } from 'reactstrap';

class Navbar extends React.Component{
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render (){
      const loginRegLink = (
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Register>
                </Link> 
            </li>
          </ul>  
        )
        const userLink = (
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                  User>
                </Link>
            </li>
            <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                Logout>
              </a>
            </li>
          </ul>
        )

    return (
      
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <a className="navbar-brand" href="/">Trekky</a>
          <ul className="navbar-nav">
            <Container>
              <Row>
                <Col>
                  <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                      Home
                  </Link>
                </Col>
                <Col>
                  <Link to="/navigation" className={window.location.pathname === "/navigation" ? "nav-link active" : "nav-link"}>
                      Map
                  </Link>
                </Col>
                <Col>
                  <Link to="/login" className="nav-link">
                      Login
                  </Link>
                </Col>
                <Col>
                  <Link to="/signup" className="nav-link">
                    Register
                  </Link>
                </Col>
                <Col> 
                  <Link to="/" className="nav-link">
                    User
                  </Link>
                </Col>
              </Row>
            </Container>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}

          <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <ul className="mobile-nav-buttons">
              
                  <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    <i className="fas fa-home"></i>
                  </Link>
                  <Link to="/navigation" className={window.location.pathname === "/navigation" ? "nav-link active" : "nav-link"}>
                    <i className="far fa-map"></i>
                  </Link>
                  <Link to="/" className="nav-link">
                    <i className="fas fa-users-cog"></i>
                  </Link>
                  <Link to="/login" className="nav-link">
                    <i className="fas fa-user-lock"></i>
                  </Link>
                  <Link to="/signup" className="nav-link">
                    Register
                  </Link>
        </ul>
      </nav>
      </nav>
    );
    }
}


export default Navbar;