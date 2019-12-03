import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import API from '../utils/API'

// This function is to pass the .env variable to the apikey
function keyGrab () {
API.getApiKey()
.then((res) => {return res.data})
.catch((err) => {console.log(err)})
}

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

export default GoogleApiWrapper({
    apiKey: keyGrab()
  })(Maps);