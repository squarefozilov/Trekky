import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import API from '../utils/API'

// let APIkey = require('dotenv').config({path:'../../../.env'});
// This function is to pass the .env variable to the apikey
// function keyGrab () {
// API.getApiKey()
// .then((res) => {console.log(res)})
// .catch((err) => {console.log(err)})
// }

// keyGrab();

const mapStyles = {
    width: '80%',
    height: '60%',
    display:"block",
    margin:"20px"
  };
class Maps extends React.Component {

    render(){
        return(
            <div>
              
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40.7128, lng: -74.0060}}
        />
        <Marker position={{ lat: 40.7128, lng: -74.0060}} />

            </div>
        );
    };
};
// process.env.REACT_APP_APIKEY
export default GoogleApiWrapper({
    apiKey:"AIzaSyC8KSnkuC8bH6lSFKZ9bZ30__Wnrtm-KVQ"
  })(Maps);