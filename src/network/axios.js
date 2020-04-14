import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: "http://localhost:3000/"
    })
    instance.interceptors.request.use(config=>{
        if(localStorage.getItem('Authorization')){
            config.headers.Authorization=localStorage.getItem('Authorization');
        }

        return config;
    },
    error=>{
        return Promise.reject(error);
    }
    )
    return instance(config);
}