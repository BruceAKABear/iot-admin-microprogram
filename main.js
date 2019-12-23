import Vue from 'vue'
import App from './App'
//封装请求
import api from '@/common/vmeitime-http/'
Vue.prototype.$api = api
//全局组件
import cuCustom from '@/static//colorui/components/cu-custom.vue'
import dashBoard from '@/components/dashboard/dashboard.vue'

Vue.component('cu-custom',cuCustom)
Vue.component('dash-board',dashBoard)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
