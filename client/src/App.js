import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar"

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component="Body" />
            <Route exact path="/map" component="Map" />
            <Route exact path="/signup" component="Signup" />
            <Route exact path="/login" component="Login" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
