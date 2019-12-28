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
        map:[],
        coords:[]    
    }
  }
  // User icon image, sized for the map.
  markerIcon = {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFiVpCGq6a1uRuvpBvmybCdTrbu-LzbRQyLMF7JR_JUudoEb8FQ&s",
    scaledSize: new this.props.google.maps.Size(40, 40)
  }

  setsRoute = (mapProps, map) => {
    let lat = this.props.destination.latitude;
    let lng = this.props.destination.longitude;
    let usrLocation = this.props.usrCurrentLocation;
    
    // set the state to retain the instance of the map we have rendered.
    if(map !== undefined){
    this.setState({map:map})
    }
    let mapObj = this.state.map;
    if(this.props.destination.length !== 0){
    this.calcRoutes(mapObj,usrLocation,lat,lng)
    console.log("We have an address", lat,lng)
    } else {console.log("There is nothing in the props for destination!")}
    console.log("map OUTSIDE STATE",map)
  }

  wayPointsObj = () => {
    let locations = [];
    // console.log("Crime data =>>", this.props.criminalLocales);
    // console.log("User location =>>", this.props.usrCurrentLocation);
    // How do I find the crime data that will manipulate the route. (DONE)
    // How does location assess location????? (FORMAT LIKE THE POST OFFICE.Street,borough,city,zip)
    // I would need a for loop to push each object to the locations array. (FILTER METHOD)
    // Can I return the locations array as just an array? (YES Done already and it works)
    // Now I need to take into consideratin where the crimes happened around the user and give an alert.
    // Based on the crime data the user location needs to be mapped in terms of miles in relation to this data, so that we know how to route around the criminal locations.
    // I can use a filter method that creates a new array of nearest criminal locations.
    // then check the waypoint against all crime data locations nearest the the user.
    // The create a waypoint that is not near any of the crime locations nearest the user. 25 is the limit!
    locations.push({
      location:"42nd street Broadway,new york, ny ",
      stopover:false,
    }); 
    return (locations)
  }
  
   polyLineClosure = (polylineOptions,map) => {
    let safePath;
    // safePath.setMap(null)
    safePath = new this.props.google.maps.Polyline(polylineOptions[0]);
    safePath.setMap(map);
   }

    calcRoutes = (map,usrLocale,lat,lng) => {
      let polylineOptions = [];
      let directionsService = new this.props.google.maps.DirectionsService();
      let start = usrLocale;
      let end = new this.props.google.maps.LatLng(lat,lng);
      let request = {
        origin:start,
        destination: end,
        optimizeWaypoints:true,
        travelMode: 'WALKING',
        provideRouteAlternatives:true
      }
      directionsService.route(request, (res, status) => {
        let points = []
        if (status === 'OK'){
          points = res.routes[0].overview_path;
          
           polylineOptions.push( {
            path: points,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            map:map
          })
      } else {
        console.log("error ", status)
      }
      this.polyLineClosure(polylineOptions,map)
     
    })
    
  }
    render(){
    // This variable holds the crime icon, sized for the map when rendered.
    const crimeIcon = {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXL8dMbULRMR3YVcdoZKDvHAKDEnyRIqnPx-llmYVULI5oTCTd&s",
      scaledSize: new this.props.google.maps.Size(40, 40)
      }
    // This variable holds the locations of most current crime locations and renders them to the map as markers.
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
    apiKey:process.env.REACT_APP_APIKEY
  })(Maps);