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
          <ul className="navbar-nav"  style={{ padding: 0}}>
            <li className="nav-item">
                <Link to="/login" className="nav-link"style={{ padding: 0}}>
                  Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link" style={{ padding: 0}}>
                  Register
                </Link> 
            </li>
          </ul>  
        )
        const userLink = (
          <ul className="navbar-nav"  style={{ padding: 0}}>
            <li className="nav-item">
                <Link to="/" className="nav-link" style={{ padding: 0}}>
                  User
                </Link>
            </li>
            <li className="nav-item">
                <a href="#" onClick={this.logOut.bind(this)} className="nav-link" style={{ padding: 0}}>
                Logout
              </a>
            </li>
          </ul>
        )

    return (
     
      <nav className="navbar navbar-dark bg-dark" style={{ padding: 0}}>
        
          <a className="navbar-brand" href="/">  &nbsp;&nbsp; Trekky </a>
          <ul className="navbar-nav"  style={{ padding: 0}} style={{ textAlign: "left "}}>
            
            <Container>
              <Row >
                <Col>
                  <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}style={{ padding: 0}}>
                      Home
                  </Link>
                </Col>
                <Col>
                  <Link to="/navigation" className={window.location.pathname === "/navigation" ? "nav-link active" : "nav-link"}style={{ padding: 0}}>
                      Map
                  </Link>
                </Col>
                <Col> 
                  <Link to="/" className="nav-link" style={{ padding: 0}}>
                    User
                  </Link>
                </Col>
                
              </Row>
            </Container>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}

      <nav className="navbar navbar-dark bg-dark navbar-expand-sm" style={{ padding: 0}}>
        <ul className="mobile-nav-buttons"  style={{ padding: '0px !important'}}>      
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} >
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
          <Link to="/signup" className="nav-link" style={{ padding: 0}}>
            Register
          </Link>
        </ul>
      </nav>
      </nav>
    );
    }
}


export default Navbar;