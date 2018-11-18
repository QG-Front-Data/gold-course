import Vue from 'vue'
import Router from 'vue-router'
import practical from './../component/practical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/practical',
      name: 'practical',
      component: practical
    }
  ]
})
