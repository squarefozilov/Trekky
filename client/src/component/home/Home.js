
import React, { Component } from 'react'
import './Home.css';


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
                <div className="row">
                    <div className="col-6 how-to-use">
                        
                        Trekky allows you to track recent crimes committed around you, in order to find the safest routes to travel within the city.
                        


                    </div>
                    
                    <div className="col-6 map-screenshot">
                        <img src="https://iglax.org/wp-content/uploads/2014/12/placeholder-Copy-8-1.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Home;