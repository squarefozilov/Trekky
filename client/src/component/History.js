import React, { Component} from "react";
import axios from 'axios'
import jwt_decode from 'jwt-decode';
class History extends Component{
    constructor(props) {
        super(props)
        this.state = {
            history : []
        }
      }
      componentDidMount() {
        const token = localStorage.usertoken
        // console.log(token);
         const decoded = jwt_decode(token)
         console.log("-----"+ decoded._id);
         axios.get('/usersearches/'+decoded._id)
        .then(response => {
         // console.log("historyArrat",response.data);
          this.setState({history : response.data})
          console.log(this.state.history);
          //console.log(response[0]._id, "2222")
        })
        .catch(error => {
          console.log(error);
        });
      }

      showHistory(){
          return(
              <div>
                  
              </div>
          )
      }


    render(){

        return (
            <div>
            
            {
            this.state.history.map(data => <div> {data.to} {data.tolocation} {data.date}</div>)
            } 
                   
            </div>
        );

    }
   
}

export default History;

// /{this.state.history.map(result =>( <div> <p>result.[_id]</p> </div>))}