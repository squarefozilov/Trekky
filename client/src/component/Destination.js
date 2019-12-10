
import React, { Component } from 'react'
import { register } from './UserFunctions';
import jwt_decode from 'jwt-decode';
import axios from 'axios'
let jumboStyles = {
    margin:"auto",
    display:"block",
    marginBottom:"10px",
    padding:"10px",
};

class Destination extends Component{
    constructor() {
        super()
        this.state = {
          fromlocation : "", 
          tolocation : "",
          userid : "",
          email : "",
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }

  componentDidMount() {
    const token = localStorage.usertoken
   // console.log(token);
    const decoded = jwt_decode(token)
  //  console.log("-----"+ decoded._id);
    this.setState({
      userid : decoded._id,
      email: decoded.email
    })
  }
  onChange(e) {
      console.log("test");
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    console.log("submit form")
    axios.post('/addHistory', {
      email : this.state.email,
      userid: this.state.userid, 
      fromlocation: this.state.fromlocation, 
      tolocation: this.state.tolocation 
    })
    .then(response => {
      console.log('Registered',response)
      this.setState({
        fromlocation: "", 
        tolocation: "" 
      })
      window.location.reload(false);
    })
  }

    render(){
        return(
            <div className="row">
                <div className="jumbotron col-7" style={jumboStyles}>
                    <form onSubmit={this.onSubmit} >
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text">From</span>
                            </div>
                            <input type="text"  name="fromlocation"  onChange={this.onChange} value={this.state.fromlocation} className="form-control" placeholder="From.."></input>
                            </div><br></br>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">To</span>
                            </div>
                            <input type="text"  name="tolocation"  onChange={this.onChange}  value={this.state.tolocation} className="form-control" placeholder="Destination"></input>
                            </div>
                            <br/>
                            <div className="input-group">
                            <button type="submit"   class="btn btn-light">Go</button>
                             </div>
                    </form>
                    </div>
                    </div>
        );
    };
};

export default Destination;