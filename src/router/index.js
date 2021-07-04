import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/instance',
      name: 'instanceList',
      component: Layout,
    },
    {
      path: '/instance',
      name: 'instanceList',
      component: Layout,
      children: [{
        path: '/instance',
        name: 'instanceList',
        component: () =>
          import('@/views/instance/index'),
      }]
    },
    {
      path: '/ratelimit',
      name: 'rateLimit',
      redirect: '/ratelimit',
      component: Layout,
      children: [{
        path: '/ratelimit',
        name: 'ratelimit',
        component: () =>
          import('@/views/ratelimit/index'),
      }]
    },
  ]
})
