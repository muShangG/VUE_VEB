// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import 'font-awesome/css/font-awesome.min.css'
//引入ElementUI
import ElementUI from 'element-ui'
//引入自定义主题
import './assets/theme/element-#166AC1/index.css'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
