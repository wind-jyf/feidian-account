import {request} from './axios'

export function sendRegister(data){
    return request({
        method: 'post',
        url: '/register',
        data: data
    })
}

export function SendLogin(){
    return request({
        method:'get',
        url: '/users'
    })
}