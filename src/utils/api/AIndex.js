import axios from "axios";
import { storage } from "../storage";

const instance = axios.create({
 
  baseURL: "https://task-react-axios-be.herokuapp.com",
});

instance.interceptors.request.use(
  function (config) {
    
    const token = storage.getToken();
    if (token) {
      config.headers.authorization = `bearer ${token}`;
    }
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);

export default instance;