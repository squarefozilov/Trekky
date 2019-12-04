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
    console.log("props==> ",this.props.coor)
  }
  

    render(){
        return(
          
            <div>   
        <Map
         data={this.test()}
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40.7128, lng: -74.0060}}>
        <Marker  
        //this.props.coors
        position={this.props.coor.forEach(function(item){
                  console.log("item",item)
                  return item
                  })} 
        /> 
        </Map>
      </div>
        );
    };
};
// process.env.REACT_APP_APIKEY
export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_APIKEY
  })(Maps);