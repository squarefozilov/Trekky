import React from "react";
import History from "./History";
import Newsfeed from './Newsfeed'
import Maps from "./Maps";
import Destination from './Destination'
import API from "../utils/API";
import device from '../utils/device'
import size from '../utils/size'
import styled from 'styled-components';
import {Row,Container,Col } from 'reactstrap';
import axios from "axios"

const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.laptop} {  // -> "@media (min-width: ${size.laptop})" -> "@media (min-width: 1024px)"
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

// const mapStyles = {
//     width: '100px',
//     height: '100px',
//     // display:"block",
//     // margin:"auto"
//   };
const containerStyles = {
    display:"block",
    margin:"auto"
};

class Navigation extends React.Component{
    state = {
        crimeLocations:[],
        usrLocation:[],
        crimeNews: {
            title: "",
            headline: ""
        }
    }
    componentDidMount = () =>{
        this.grabCrimeData()
        this.getUsrLocale()  
        this.loadCrimeLocale(this.state.crimeLocations)
        this.getCrimeNews()
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
    getCrimeNews = () => {
        // TODO: need to update API for getting news.
        axios.get("/scrapeNews").then((response) => {
            this.setState({
                crimeNews: response.data
            });
        })
    }
      

render(){
    return (
    
        <div className="container" style={containerStyles}>
            <Newsfeed title={this.state.crimeNews.title} headline={this.state.crimeNews.headline} />
                <Container> 
                    <Row>
                       <Col>
                         <History />
                       </Col>
                        <Col>
                         <Destination/>
                        </Col>
                    </Row>
                    <Maps
                        coor={
                        this.state.crimeLocations.map(function(item){
                        return {lat:item.latitude, lng:item.longitude}
                        })}
                        usrLocale={this.state.usrLocation} 
                    />     
                </Container>       
        </div>
     
    );
}
}

export default Navigation;
