import axios from 'axios';
const Util = {
    apiPath:'http://api.52feidian.com/api',
    //读取cookie
    }
Util.ajax = axios.create({
    baseURL: Util.apiPath,
    
});
Util.getLastDate = function(time) {
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return date.getFullYear() + '-' + month + "-" + day;
}
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