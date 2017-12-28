//
// import 'babel-polyfill'
// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

import 'babel-polyfill'
import Vue from "vue"
import router from './router'
// import store from './store'
// import axios from './util/ajax'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// import i18n from './util/i18n'
import App from './App'
// 全局组件
// import './components/platformCom/install'

// 注册组件到Vue
// Vue.prototype.$axios = axios;
Vue.use(ElementUI)

new Vue({
    i18n,
    // axios,
    router,
    store,
    render: h => h(App)
}).$mount('#app')