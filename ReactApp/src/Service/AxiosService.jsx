import axios from 'axios';

let instance = axios.create();
export const setup = () =>{
    instance.defaults.headers.common['Authorization'] = sessionStorage.getItem("token");
}

instance.defaults.headers.common['Authorization'] = sessionStorage.getItem("token");


export default instance;