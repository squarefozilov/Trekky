
import axios from 'axios';

// reference to the APIkey
export default {
    getLatLng: function(){
        return axios.get("/crime/at/lng")
    }
};