import Vue from 'vue'
import Router from 'vue-router'
import topten from './../component/topten'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topten',
      name: 'topten',
      component: topten
    }
  ]
})
