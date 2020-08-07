import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.websiteUrl = 'http://localhost:8080/'; 
const app = new Vue({
    ...App
})
app.$mount()

