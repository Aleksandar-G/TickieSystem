import axios from 'axios'

class ApiRequest{

    GetAlltickets(){
        return axios.get('http://localhost:8080/tickets');
    }
}

export default new ApiRequest()