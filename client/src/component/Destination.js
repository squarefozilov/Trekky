import React from 'react';

let jumboStyles = {
    margin:"auto",
    display:"block",
    marginBottom:"10px",
    padding:"10px",
};

class Destination extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="jumbotron col-7" style={jumboStyles}>
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
                    </div>
                    </div>
        );
    };
};

export default Destination;