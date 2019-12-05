import React from "react";
import History from "./History";
import Maps from "./Maps";
import API from "../utils/API";

class Navigation extends React.Component{
    state = {
        crimeLocations:[],
        usrLocation:[]
    }
    componentDidMount = () =>{
        this.grabCrimeData()
        this.getUsrLocale()  
        this.loadCrimeLocale(this.state.crimeLocations)
    }
    loadCrimeLocale = (arr) => {
        let locale = arr;
        return locale.map(function(item){
        return console.log(item)
        });   
    }
    grabCrimeData = () => {
        API.getLatLng()
        .then((res)  => {
            console.log(res)
            this.setState({crimeLocations:res.data}, 
            function(){console.log("crimelocations ",this.state.crimeLocations)})  
        })
        .catch((err) => {console.log(err)})
    }
    getUsrLocale = () => {
        return navigator.geolocation.getCurrentPosition(this.showPosition);
    }
    showPosition = (position) => {
        this.setState({usrLocation:{lat:position.coords.latitude,lng:position.coords.longitude}}, 
        function(){console.log("User Locale in state =>",this.state.usrLocation)})
        return {lat:position.coords.latitude,lng:position.coords.longitude}
    }
      

render(){
    return (
        
        <div className="container">
            <br></br>
            <div className="row">
                <div className="jumbotron col-7">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">From</span>
                        </div>
                        <input type="text" className="form-control" placeholder="From.."></input>
                    </div><br></br>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">To</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Destination"></input>
                    </div>
                    <History />
                </div>
                <div className="card offset-1 col-4">
                    <div className="card-header">
                        News title goes here
                    </div>
                    <div className="card-body">
                        News body goes here
                    </div>
                </div>
            </div>
                <Maps 
                     coor={
                        this.state.crimeLocations.map(function(item){
                        return {lat:item.latitude, lng:item.longitude}
                        })}
                     usrLocale={this.state.usrLocation}
                />    
        </div>
    );
}
}

export default Navigation;



// ========================TestCode
// componentDidMount(){
//     this.loadCrimeLocale(testObj12)
//   }

//   state = {
//     crimeLocations:[],
//     // local:{}
  
//   }
// let testObj12 = {
// data:[{lat:40.748817, lng:-73.985428},{lat:40.689247, lng:-74.044502},{lat:40.739388, lng:-74.009933},{lat:40.730824, lng:-73.997330}]
//   }

//   let testArr = [];

//   loadCrimeLocale = (obj) => {
//     let locale = obj.data;
//     locale.map(function(item){
//     testArr.push(item)
//     });
//     this.setState({crimeLocations: testArr}, function(){
//      console.log("State =>>",this.state.crimeLocations);
//     })
   
//     // console.log("Locale =>>",locale)

    
//     // obj.map(function(item){
//     //   console.log(item);
//     // })
//     // We will setState and then test what the state looks like.
// // API.getLatLng()
// // .then((res) => {console.log(res)})
// // .catch((err) => {console.log(err)})

// // Store in the state. setState.
// // take info from the state.


// //GO INTO THE STATE, USE A MAP METHOD TO GO THROUGH THE TESTOBJ ARRAY, GRAB LAT AND LONG KEY FOR EACH MAPPED ITEM TO SET POINTS, CREATING A COMPONENT FOR MARKER WAS NO LOGICAL.
//   }

 

// ========================TestCode