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
                <div className="jumbotron2 col-7" style={jumboStyles}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">From</span>
                        </div>
                        <input type="text" className="form-control" placeholder="From.."></input>
                    </div><br />
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">To</span>
                        </div>
                        <input
                        onChange={this.props.handleInputChange}
                        value={this.props.value}
                        name="destination"
                        type="text" 
                        className="form-control" 
                        placeholder="Destination"
                        id="destination"></input>
                    </div><br/>
                    <div style={{floar:'left'}}>
                    <button onClick={this.props.handleFormSubmit} className="btn btn-secondary">
                        Go!
                    </button>
                    </div>
                  
                </div>
            </div>
        );
    };
};

export default Destination;