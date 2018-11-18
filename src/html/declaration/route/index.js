import Vue from 'vue'
import Router from 'vue-router'
import declaration from './../component/declaration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/declaration',
      name: 'declaration',
      component: declaration
    }
  ]
})
