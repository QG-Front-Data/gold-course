import Vue from 'vue'
import Router from 'vue-router'
import course from './../component/course'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course',
      name: 'course',
      component: course
    }
  ]
})
