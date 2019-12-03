
import axios from 'axios';

// reference to the APIkey
export default {
    getApiKey: function(){
        return axios.get("/apikey")
    }
};