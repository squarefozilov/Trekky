import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '90%',
  pointerEvents:"none",
};

class Maps extends React.Component {

    render(){
      // This variable holds the locations of most current crime locations.
      const crimeLocales = this.props.coor.map(function(item){
        return(
          <Marker 
          position={item}
          // icon={image}
          />
        )
      })
      return(
        <div>   
          <Map
            google={this.props.google}
            zoom={11}
            style={mapStyles}
            initialCenter={{lat: 40.7128, lng: -74.0060}}
            >
          {crimeLocales}
          <Marker position={this.props.usrLocale} />
          </Map>
        </div>
      );
    };
  };

export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_APIKEY
  })(Maps);