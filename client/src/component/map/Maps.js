import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Maps.css';
const mapStyles = {
  width:"100vw",
  height:"100vh",
  pointerEvents:"none",
};

class Maps extends React.Component {

  state = {
    map : []
  }

  
 
  markerIcon = {
    // src: "../../nav-icons/crosshair.png",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFiVpCGq6a1uRuvpBvmybCdTrbu-LzbRQyLMF7JR_JUudoEb8FQ&s",
    scaledSize: new this.props.google.maps.Size(40, 40)
  }

  someFunc = (mapProps, map) => {
    console.log("mapProps", mapProps)
    console.log("map ", map)

    // this.setState({map:map})
    // this.setState({map:mapProps} , function(){
    //   console.log("Map ",this.state.map)
    // })
  }
    
  calcRoutes = (map) => {
    let directionsService = new this.props.google.maps.DirectionsService();
    let directionsRenderer = new this.props.google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    let start = this.props.usrLocale
    let end = new this.props.google.maps.LatLng(40.856100, -73.928240);
    let request = {
      origin:start,
      destination: end,
      travelMode: 'WALKING'
    }
    directionsService.route(request, (res, status) => {
      if (status === 'OK'){
        // console.log(this.state)
        directionsRenderer.setDirections(res);
      } else {
        console.log("error ", status)
      }
    })
  }
  
    render(){
      console.log("Google", new this.props.google.maps.DirectionsService())
      const crimeIcon = {
        //     // url: "../../nav-icons/crime_icon.jpeg",
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
      })
      return(
        
        <div>   
         {/* <LoadScript>
          <GoogleMap> */}

        <Map
            className="google-map"
            google={this.props.google}
            zoom={11}
            map={this.props.maps}
            style={mapStyles}
            initialCenter={{lat: 40.7128, lng: -74.0060}}
            routes={this.calcRoutes()}
            onReady={this.someFunc}

            >
          {crimeLocales}
          <Marker
          position={this.props.usrLocale}
          icon={this.markerIcon}
          />
          </Map>
     
          {/* </GoogleMap>
          </LoadScript> */}
        </div>
      );
    };
  };

export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_APIKEY
  })(Maps);