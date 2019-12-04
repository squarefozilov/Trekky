import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import API from "../utils/API";

const mapStyles = {
    width: '80%',
    height: '60%',
    display:"block",
    margin:"20px"
  };

class Maps extends React.Component {
  
    render(){

      // const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOnlNUmJ7nae5QqXhgb_SI72L0l_dY4V__mxUmVtX0RszQMDCV"
      // This variable holds the locations of most current crime locations.
      const crimeLocales = this.props.coor.map(function(item){
        return(
          <Marker 
          position={item}
          // icon={image}
          />
        )
      })

      const userLocation = () => {
        console.log("USER LOCATION => ",this.props.usrLocale)
        return (
        <Marker 
        position={this.props.usrLocale}
        />)
      }
    

      return(
        <div>   
          <Map
            google={this.props.google}
            zoom={11}
            style={mapStyles}
            initialCenter={{lat: 40.7128, lng: -74.0060}}>
          {crimeLocales}
          {userLocation}
          </Map>
        </div>
      );
    };
  };

export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_APIKEY
  })(Maps);