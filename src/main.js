import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueRouter from 'vue-router'
import router from '@/router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEye, faEyeSlash, faQrcode, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faQrcode,faGoogle,faEyeSlash,faEye)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// 引入通用樣式
import './assets/css/common.css'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
