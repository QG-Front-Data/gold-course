import Vue from 'vue'
import Router from 'vue-router'
import teacher from './../component/teacher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher
    }
  ]
})
