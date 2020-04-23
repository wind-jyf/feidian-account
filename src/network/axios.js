import axios from 'axios'
import store from '../store/index'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://hk213.xiaomy.net/api/'
        //baseURL: 'http://localhost:3000/'
    })
    instance.interceptors.request.use(config=>{
        console.log(store.state.isAddHeader);
        if(localStorage.getItem('Authorization') && store.state.isAddHeader){
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