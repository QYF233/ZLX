import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.websiteUrl = 'http://zlx.kikohk.top:8080/'
Vue.prototype.contentType = 'application/x-www-form-urlencoded'
const app = new Vue({
    ...App
})
app.$mount()

