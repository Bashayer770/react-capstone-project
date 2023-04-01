import { configureAuth } from "react-query-auth";
import instance from "../../api";
import axios from "axios";
import { storage } from "../../storage";

const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth(
  {
    userFn: () => {
      
    },
    loginFn: async (credentials) => {
     
      let login = await instance.post("/signin", credentials);
      const token1 = login.data.token1;
      storage.setToken(token1);
    },
    registerFn: async (credentials) => {
      
      let res = await instance.post("/signup", credentials);
      const token = res.data.token;
      storage.setToken(token);
    },
    logoutFn: () => {
      
      storage.clearToken();
    },
  }
);
export { useUser, useLogin, useRegister, useLogout, AuthLoader };