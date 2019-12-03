import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar"

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Navbar />
      </div>
    )
  }
}

export default App;
