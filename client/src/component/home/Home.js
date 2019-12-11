
import React, { Component } from 'react'
import './Home.css';
import {Carousel} from "react-bootstrap";

class Home extends Component{
    render(){
    return (
        <div className="wrapper">
            <div className="jumbotron">
                <h1>Trekky</h1>
                <h2>Dont just find your way. Know your way.</h2>
                <button className="btn btn-success">Sign up for free!</button>
            </div>
            <div className="description">
                <Carousel className="crs">
                    <Carousel.Item>
                        <img src={require("./pics/1111.png")}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require("./pics/0kj1.png")}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* Need to make styles to make the size fixed. */}
                        Trekky allows you to track recent crimes committed around you, in order to find the safest routes to travel within the city.
                    </Carousel.Item>
                </Carousel>
                
            </div>
        </div>
    )
  }
}

export default Home;