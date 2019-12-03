
import axios from 'axios';


export default {
    getApiKey: function(){
        return axios.get("/apikey")
    }
};