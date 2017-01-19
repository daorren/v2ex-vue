import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import  LatestView  from '../views/LatestView'
import  ItemView  from '../views/ItemView'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: '/latest' },
    { path: '/latest/:page(\\d+)?', component: LatestView },
    { path: '/t/:id', component: ItemView }
  ]
})
