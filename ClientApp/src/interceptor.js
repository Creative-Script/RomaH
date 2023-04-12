import axios from "axios";


const empty = '';

const rendered = ()=>{
    if (typeof window !== 'undefined'){
        return true;
    }
    return false;
}
const getToken=()=> {
    if (rendered()) {
        return localStorage.getItem('token');
    }
    return empty;
}
let axiosApi = axios.create({
    headers: {
        // Authorization: 'this'
      Authorization :  getToken()
      }
});



export {axiosApi}