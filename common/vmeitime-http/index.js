import http from './interface'

//设置请求地址
http.config.baseUrl = "http://admin.ayilink.com/api/admin/"

//设置请求前拦截器
http.interceptor.request = (config) => {
	const tokenStorage = uni.getStorageSync('Authorization');
	if (tokenStorage && tokenStorage != '') {
		config.header = {
			"Authorization": tokenStorage
		}
	}
}


//登录
const loginPath = 'login'
const countDeviceNumberPath = 'stat/deviceCount'
export const login = (data) => {
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		if (response.data.success) {
			uni.setStorageSync('Authorization', response.data.data.token)
		}
		return response;
	}
	return http.post(loginPath, data)
}
export const countDeviceNumber = (data) => {
	return http.get(countDeviceNumberPath, data)
}
// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	login,
	countDeviceNumber
}
