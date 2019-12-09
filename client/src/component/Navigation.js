import React from "react";
import History from "./History";
// import NewsFeed from './NewsFeed'
import Maps from "./map/Maps";
import API from "../utils/API";
import device from '../utils/device'
import size from '../utils/size'
import styled from 'styled-components';
import {Container} from 'reactstrap';
import axios from "axios"
import './map/Maps.css';
import Slider from "./Slider";

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
    margin:"auto",
    maxHeight:"100%"
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
        this.getUsrLocale()
        this.grabCrimeData()
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
        if(navigator.geolocation){
        return navigator.geolocation.watchPosition(this.showPosition);
        } else {
            return console.log("GPS unavailable")
        }
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
    console.log(this.state.crimeNews)
    return (
    
        <div className="container" style={containerStyles}>
                {/* <Test title={this.state.crimeNews.title} headline={this.state.crimeNews.headline} /> */}
            {/* <NewsFeed title={this.state.crimeNews.title} headline={this.state.crimeNews.headline} /> */}
                <Container> 
                    <Slider title={this.state.crimeNews.title} headline={this.state.crimeNews.headline} />
                    {/* <div id="testCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Test title={this.state.crimeNews.title} headline={this.state.crimeNews.headline} />
                            </div>
                            <div className="carousel-item">
                                <Destination />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div> */}
                    {/* <Row>
                       <Col>
                         <History />
                       </Col>
                        <Col>
                         <Destination/>
                        </Col>
                    </Row> */}
                    
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
