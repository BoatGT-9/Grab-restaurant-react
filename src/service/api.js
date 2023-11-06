import axios from "axios";
import TokenService from "./token.service";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
});

// Add interstor  to request object
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAcessToken();
    if (token) {
      config.headers["x=access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add interceptor to response object
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/api/auth/signin" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post("/api/auth/refreshtoken", {
            refreshToken: TokenService.getLocalRefreshToken,
          });
          const { accessToken } = rs.data;
          TokenService.SetLocalAccessToken(accessToken);
          return instance(originalConfig);
        } catch (error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);
export default instance;
