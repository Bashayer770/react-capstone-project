import { configureAuth } from "react-query-auth";
import instance from "../../api/AIndex";
import axios from "axios";
import { storage } from "../../storage";

const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth(
  {
    userFn: () => {
      if (storage.getToken()) {
        return true;
      }
      return false;
    },
    loginFn: async (credentials) => {
      // let login = await instance.post("/signin", credentials);
      // const token1 = login.data.token1;
      const token1 = "LOGIN";

      await storage.setToken(token1);
    },
    registerFn: async (credentials) => {
      // let res = await instance.post("/signup", credentials);
      // const token = res.data.token;
      const token = "LOGIN";
      storage.setToken(token);
    },
    logoutFn: () => {
      storage.clearToken();
    },
  }
);
export { useUser, useLogin, useRegister, useLogout, AuthLoader };
