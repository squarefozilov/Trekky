import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import API from "../utils/API";



{/* <Marker position={{ lat: 40.7128, lng: -74.0060}}/> */}
const mapStyles = {
    width: '80%',
    height: '60%',
    display:"block",
    margin:"20px"
  };

class Maps extends React.Component {


   test = () => {
    // console.log("props==> ",this.props.coor)
  }
  

    render(){

      const x = this.props.coor.map(function(item){
        console.log("item in variable => ", item)
        return(
          <Marker
          position={item}
          />
        )
      })
      return(
          
      <div>   
        <Map
         data={this.test()}
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40.7128, lng: -74.0060}}>
        {x}
        </Map>
      </div>
      );
    };
};
// process.env.REACT_APP_APIKEY
export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_APIKEY
  })(Maps);