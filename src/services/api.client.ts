import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params:{
        key:'e3624e073af64aabaa3a9e08a9afdf49'
    }
})