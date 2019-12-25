//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//账户信息
		accountInfo: {},
		deviceInfo: {}

	},
	mutations: {
		//设置账户信息
		setAccountInfo(state, accountInfo) {
			state.accountInfo = accountInfo
		},
		setDeviceInfo(state, deviceInfo) {
			state.deviceInfo = deviceInfo
		}

	}
})
export default store
