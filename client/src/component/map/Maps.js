import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Maps.css';


// const mapStyles = {
//   pointerEvents:"none",
// };

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
            className="google-map"
            google={this.props.google}
            zoom={11}
            // style={mapStyles}
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