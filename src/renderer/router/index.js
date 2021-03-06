import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'watch',
      component: require('@/components/Watch').default
    },
    {
      path: '/landing-page',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/test-page',
      name: 'test-page',
      component: require('@/components/TestPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
