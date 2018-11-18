import Vue from 'vue'
import Router from 'vue-router'
import coursesource from './../component/coursesource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/coursesource',
      name: 'coursesource',
      component: coursesource
    }
  ]
})
