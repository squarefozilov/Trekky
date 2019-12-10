
import axios from 'axios';

export default {
    getLatLng: function(){
        return axios.get("/api/crime");
    },

    convertAddToLatLng: function(address){
        const apiKey ="AIzaSyA-VspoF45DKRHLsuzBL0-hecHDNOUQdOY";
        return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+apiKey);
    }
};