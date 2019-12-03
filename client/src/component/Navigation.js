import React from "react";
import History from "./History";

function Navigation(){
    return (
        <div className="container">
            <br></br>
            <div className="jumbotron">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">From</span>
                    </div>
                    <input type="text" className="form-control" placeholder="From.."></input>
                </div><br></br>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">To</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Destination"></input>
                </div>
                <History />
            </div>
                {/* Map component goes here */}
                Map component goes here(by Alex)
        </div>
    );
}

export default Navigation;