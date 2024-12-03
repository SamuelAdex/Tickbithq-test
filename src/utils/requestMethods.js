import axios from 'axios'



export const BASE_URL = 'https://walletbtc.onrender.com/api'
export const BASE_URL_MAIN = 'https://tickbit.onrender.com/api'
const userInfo = localStorage.getItem('userInfo')

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

userRequest.interceptors.request.use(
    (config) => {
      const token = userInfo?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        "Content-Type": "application/json"
    },
})


export const authPublicRequest = axios.create({
    baseURL: BASE_URL_MAIN,
    header: {
        "Content-Type": "application/json"
    },
})