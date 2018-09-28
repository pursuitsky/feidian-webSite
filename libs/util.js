import axios from 'axios';
const Util = {
    apiPath:'http://api.52feidian.com/api'
    //读取cookie
    
};
Util.ajax = axios.create({
    baseURL: Util.apiPath,
    
});
export default Util;