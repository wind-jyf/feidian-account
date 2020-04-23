import {request} from './axios'

export function sendRegister(data){ //注册
    return request({
        method: 'post',
        url: '/register',
        data: data
        
    })
}

export function SendLogin(data){ //登录
    return request({
        method:'post',
        url: '/login',
        data:data
    })
}
export function Sendagree(data){ //管理员审核同意
    return request({
        method:'post',
        url: '/review',
        data:data
    })
}
export function Senddisagree(data){//管理员审核拒绝
    return request({
        method:'post',
        url: '/refuse',
        data:data
    })
}
export function GetAll(){//获得所有成员
    return request({
        method:'get',
        url: '/all',
    })
}
export function GetAudit(){//获得所有需要审核成员
    return request({
        method:'get',
        url: '/nopass'
    })
}
export function SearchPerson(data){//通过搜索框搜索得到结果
    return request({
        method:'post',
        url: '/search/vague',
        data:data
    })
}
export function byGroup(data){//通过分组获得结果
    return request({
        method:'post',
        url: '/bygroup',
        data:data
    })
}
export function byemail(data){//通过邮箱获得此用户的所有信息
    return request({
        method:'post',
        url: '/byemail',
        data:data
    })
}
export function changeMessage(data){//修改基本信息
    return request({
        method:'post',
        url:'/change',
        data:data
    })
}
export function deleteMessage(data){//管理员删除用户
    return request({
        method:'post',
        url:'/delete',
        data:data
    })
}