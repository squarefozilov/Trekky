import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Maps.css';

const mapStyles = {
  width:"100vw",
  height:"100vh",
  // pointerEvents:"none",
};

class Maps extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        map:[]
        
    }
  }
 
  markerIcon = {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFiVpCGq6a1uRuvpBvmybCdTrbu-LzbRQyLMF7JR_JUudoEb8FQ&s",
    scaledSize: new this.props.google.maps.Size(40, 40)
  }

  setsRoute = (mapProps, map) => {
    let lat = this.props.destination.latitude;
    let lng = this.props.destination.longitude;
    
    // set the state to retain the instance of the map we have rendered.
    if(map !== undefined){
    this.setState({map:map})
    }
    console.log("map in state ", this.state.map)
    let usrDes = this.state.map;
    if(this.props.destination.length !== 0){
    this.calcRoutes(usrDes,lat,lng)
    console.log("We have an address", lat,lng)
    } else {console.log("There is nothing in the props for destination!")}
    console.log("map OUTSIDE STATE",map)
  }

  directionsRenderer = new this.props.google.maps.DirectionsRenderer();
  calcRoutes = (map,lat,lng) => {
    let directionsService = new this.props.google.maps.DirectionsService();
    this.directionsRenderer.setMap(map);
    let start = this.props.usrLocale;
    let end = new this.props.google.maps.LatLng(lat,lng);
    let request = {
      origin:start,
      destination: end,
      travelMode: 'WALKING'
    }
    directionsService.route(request, (res, status) => {
      if (status === 'OK'){
        console.log("RES ",res)
        this.directionsRenderer.setDirections(res);
      } else {
        console.log("error ", status)
      }
    })
  }
    render(){
    // This variable renders the criminal icon on the map from a link and sized appropriatly.
    const crimeIcon = {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXL8dMbULRMR3YVcdoZKDvHAKDEnyRIqnPx-llmYVULI5oTCTd&s",
      scaledSize: new this.props.google.maps.Size(40, 40)
      }
    // This variable holds the locations of most current crime locations.
    const crimeLocales = this.props.coor.map(function(item){
          return(
          <Marker 
          position={item}
          icon={crimeIcon}
          />
        );
      });
      return(
        
        <div>   
          <Map
            className="google-map"
            google={this.props.google}
            zoom={11}
            // map={this.props.maps}
            style={mapStyles}
            initialCenter={{lat: 40.7128, lng: -74.0060}}
            onReady={this.setsRoute}
            >
              {this.setsRoute()}
              {crimeLocales}
              {this.setDestinationMarker}
              <Marker
              position={this.props.usrLocale}
              icon={this.markerIcon}
              />
          
          </Map>
        </div>
      );
    };
  };

export default GoogleApiWrapper({
    apiKey:"AIzaSyBCvx7hjyQuBxMhfkPD_iU1AfxqoZFu-JY"
  })(Maps);