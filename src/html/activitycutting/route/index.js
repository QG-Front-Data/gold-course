import Vue from 'vue'
import Router from 'vue-router'
import activitycutting from './../component/activitycutting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/activitycutting',
      name: 'activitycutting',
      component: activitycutting
    }
  ]
})
