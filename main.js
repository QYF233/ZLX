import Vue from 'vue'
import App from './App'
import {myRequest} from './common/api.js'


Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false
// Vue.prototype.websiteUrl = 'http://zlx.kikohk.top/'
Vue.prototype.websiteUrl = 'http://localhost:8080/'
// Vue.prototype.websiteUrl = 'http://172.18.18.190:8080/'
Vue.prototype.contentType = 'application/x-www-form-urlencoded'


App.mpType = 'app'


const app = new Vue({
	...App
})

app.$mount()
