// https://github.com/vuejs/vue-hackernews-2.0
// https://github.com/liuzhenangel/v2ex_frontend


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import * as filters from './filters'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.use(ElementUI)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   template: '<App/>',
//   components: { App }
// })
const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
