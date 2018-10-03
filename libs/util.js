import axios from 'axios';
const Util = {
    apiPath:'http://api.52feidian.com/api',
    //读取cookie
    }
Util.ajax = axios.create({
    baseURL: Util.apiPath,
    
});
// Util.filterData = function(arr,obj){
//     let newObj = {};
//     arr.forEach((item) => {
//         if(item.email === obj.email){
//             newObj = item;
//             return newObj;
//         }
//     });
// };
export default Util;