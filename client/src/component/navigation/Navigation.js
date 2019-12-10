import React from "react";
import Maps from "../map/Maps";
import API from "../../utils/API";
import {Container} from 'reactstrap';
import axios from "axios"
import '../map/Maps.css';
import "./Navigation.css";
import Slider from "../slider/Slider";

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
        this.getUsrLocale(this.loadCrimeLocale)
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
    getUsrLocale = (callback) => {
        return( navigator.geolocation.getCurrentPosition(this.showPosition),
                callback(this.state.crimeLocations))
        
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
    // HAVE TO UNMOUNT THE NAVIGATION SYSTEM WHEN IT IS NO LONGER IN USE.
    // componentWillUnmount = () => {
    //     window.removeEventListener('onbeforeunload', navigator.geolocation.clearWatch());
    // }
      
render(){
     console.log(navigator)
    return (
    
        <div className="container"
        //  style={containerStyles}
         >
                {/* <Test title={this.state.crimeNews.title} headline={this.state.crimeNews.headline} /> */}
            {/* <NewsFeed title={this.state.crimeNews.title} headline={this.state.crimeNews.headline} /> */}
                <Container> 
                    <Slider className="slider" title={this.state.crimeNews.title} headline={this.state.crimeNews.headline} />
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
                        google={this.props.google}
                    >
                        
                        </Maps> 
                    </Container>   
                      
        </div>
     
    );
}
}

export default Navigation;
