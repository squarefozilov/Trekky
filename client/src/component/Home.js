import React from "react";

function Home(){
    return (
        <div className="wrapper">
            <div className="jumbotron">
                <h1>Trekky</h1>
                <h2>Description goes here</h2>
                <button className="btn btn-success">Sign up for free accounts</button>
            </div>
            <div className="description">
                <div className="row">
                    <div className="col-6 how-to-use">
                        Table of describing what our app does goes in here.
                    </div>
                    <div className="col-6 map-screenshot">
                        <img src="https://iglax.org/wp-content/uploads/2014/12/placeholder-Copy-8-1.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;