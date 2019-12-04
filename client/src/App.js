import React from 'react';
import './App.css';
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Navigation from "./component/Navigation";
import Signup from "./component/Signup";
import Login from "./component/Login";
import LoggedUser from "./component/Logged"

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  render(){
    return (
      <Router>
        <div className="App">
          <Navbar  updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/navigation" component={Navigation} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route path="/login" render={() => <LoggedUser updateUser={this.updateUser} />} /> <Route path="/signup" render={() =>  <Signup/>} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
