import Vue from 'vue'
import App from './App'
//封装请求
import api from '@/common/vmeitime-http/'
Vue.prototype.$api = api
//引入vuex
import store from './store'
Vue.prototype.$store = store
//全局组件
import cuCustom from '@/static//colorui/components/cu-custom.vue'

Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
