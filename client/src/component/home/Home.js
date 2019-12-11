
import React, { Component } from 'react'
import './Home.css';
import {Carousel} from "react-bootstrap";

class Home extends Component{
    render(){
    return (
        <div className="wrapper">
            <div className="jumbotron">
                <h1>Trekky</h1>
               <h2>Trekky allows you to track recent crimes committed around you,
                        in order to find the safest routes to travel within the city .</h2>
               <h2>   DONT JUST FIND YOUR WAY. KNOW YOUR WAY. KEEPING PEOPLE SAFE AND INFORMED.</h2>
             
              
            </div>
           
            <div className="description">
            <p> EXPLORE WHAT'S HAPPENING IN YOUR CITY </p> 
                <Carousel className="crs">

                <Carousel.Item>
                        {/* Need to make styles to make the size fixed. */}
                       
                      
                        <img src={require('./pics/1111.png')} />
                   
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* Need to make styles to make the size fixed. */}
                       
                        <img src={require('./pics/x2200.png')} />
                      
                   
                    </Carousel.Item>
                    <Carousel.Item>
                   
                    <img src={require('./pics/0kj1.png')} />
                       
                    </Carousel.Item>

                    <Carousel.Item>
                        {/* Need to make styles to make the size fixed. */}
                       
                        <img src={require('./pics/Untitmmmled.png')} />
                   
                    </Carousel.Item>
                </Carousel>
              
            
            </div>
        </div>
    )
  }
}

export default Home;