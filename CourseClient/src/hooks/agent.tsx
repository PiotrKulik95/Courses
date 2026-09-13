import axios, { AxiosError, type AxiosResponse } from "axios";

export const agent = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: '',
    withCredentials: true
});

agent.interceptors.request.use(config => {
    // const token = localStorage.getItem('accessToken');

    // if (token && config.headers) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
});

agent.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);