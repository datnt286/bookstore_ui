import axios from 'axios';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

const axiosInstance = axios.create({
    baseURL: apiDomain,
});

export default axiosInstance;
