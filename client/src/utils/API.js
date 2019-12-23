
import axios from 'axios';

export default {
    getLatLng: function(){
        return axios.get("/api/crime");
    },

    convertAddToLatLng: function(address){
        const apiKey =process.env.REACT_APP_APIKEY;
        return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+apiKey);
    },

    decodePolyline: function(polyline){
    // return axios.post("/polyline/decoder/"+ polyline); 
    
    return axios.get('/polyline/decoder/' + polyline);
    }
};