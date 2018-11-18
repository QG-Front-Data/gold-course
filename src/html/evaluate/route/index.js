import Vue from 'vue'
import Router from 'vue-router'
import evaluate from './../component/evaluate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate
    }
  ]
})
