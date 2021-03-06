import request from '@/utils/request'

export function loginByEmail(email, password) {
    const data = {
        email,
        password
    }
    return request({
        url:'/auth/login',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/auth/logout',
        method: 'post'
    })
}

export function getUserInfo(token) {
    return request({
      url: '/user/info',
      method: 'get',
      params: { token }
    })
}