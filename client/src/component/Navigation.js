import React from "react";
import History from "./History";
import Maps from "./Maps";


    // This test object is a place holder for the latitudes and longitudes that I will be gettin from the axios request.
    let testObj12 = {
    data:[{lat:40.739388, lng:-74.009933},{lat:40.689247, lng:-74.044502},{lat:40.748817, lng:-73.985428},{lat:40.730824, lng:-73.997330}]
      }
    // This array holds the data that is being pulled from the testObj to be set in the State after the map method is complete.
      let testArr = [];

class Navigation extends React.Component{
    
      state = {
      crimeLocations:[],
      lat:0,
      lng:0
      }
      componentDidMount = () =>{
      this.loadCrimeLocale(testObj12)
      }
      loadCrimeLocale = (obj) => {
        let locale = obj.data;
        locale.map(function(item){
        testArr.push(item)
        });
        this.setState({crimeLocations: testArr}, function(){
         console.log("State =>>",this.state.crimeLocations);
        })  
      }
      getUsrLocale = () => {
          let usrPosition = navigator.geolocation.getCurrentPosition();
          console.log(usrPosition)
      }
    
      

    
render(){
    return (
        <div className="container">
            <br></br>
            <div className="jumbotron">
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
                <Maps 

                    coor={this.state.crimeLocations.map(function(item){
                    return {lat:item.lat, lng:item.lng}
                    })}
                    usrLocale={this.getUsrLocale}
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