import Vue from 'vue'
import App from './App'

import './static/iconfont/iconfont.css'
import './static/js/jquery-3.5.1.min.js'
import './static/bootstrap-3.3.7-dist/css/bootstrap.min.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
