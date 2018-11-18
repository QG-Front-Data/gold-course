import Vue from 'vue'
import Router from 'vue-router'
import feature from './../component/feature'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/feature',
      name: 'feature',
      component: feature
    }
  ]
})
