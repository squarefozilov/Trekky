
import axios from 'axios';

export default {
    getLatLng: function(){
        return axios.get("/api/crime");
    }
};