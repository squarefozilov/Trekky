import React, { Component} from "react";
import axios from 'axios'
import jwt_decode from 'jwt-decode';
class History extends Component{
    constructor() {
        super()
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
          console.log("historyArrat",response.data);
          this.setState({history : response.data})
          //console.log(response[0]._id, "2222")
        })
        .catch(error => {
          console.log(error);
        });
      }

    render(){

        return (
            <div>
                 
                <br></br>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">History</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
        <td>Historying from DB{this.gethistory}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );

    }
   
}

export default History;

// /{this.state.history.map(result =>( <div> <p>result.[_id]</p> </div>))}