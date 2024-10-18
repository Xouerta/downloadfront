import axios, { type InternalAxiosRequestConfig } from 'axios'

const request = axios.create({
    baseURL: "/api",
    timeout: 1000 * 60
})

request.interceptors.request.use(function (config) {
    config.headers.Authorization
    const newConfig = {
        ...config,
        headers: {
            Authorization: localStorage.getItem("填入token对应的key")
        }
    } as InternalAxiosRequestConfig
    return newConfig
}, function (err) {
    return Promise.reject(err)
})

request.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default request;