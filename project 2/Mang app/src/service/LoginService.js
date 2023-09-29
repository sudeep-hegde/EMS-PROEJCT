import axios from "axios";

const BASE_URL = "http://localhost:8081/api/v1/login";

class LoginService{

    LoginCall(loginData){
        return axios.post(BASE_URL, loginData);
    }

}
export default new LoginService();