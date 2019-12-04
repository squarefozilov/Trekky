import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
export default class Admin extends Component{
    render(){
        return(
            <div>
               This is an logged in page Auth 
               <Link to="/logout"> Logout</Link>
            </div>
        )
    }
} 