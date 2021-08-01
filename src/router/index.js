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
      icon: "bi-app",
      children: [{
        path: '/instance',
        name: 'instanceList',
        component: () =>
          import('@/views/instance/index'),
      }, {
        path: '/instance/:id/log',
        name: 'instanceLog',
        component: () =>
          import('@/views/instance/instanceLog'),
      },{
        path: '/instance/:id/sqlMonitor',
        name: 'instanceLog',
        component: () =>
          import('@/views/instance/instanceSqlMonitor.vue'),
      }
      ]
    },
    {
      path: '/ratelimit',
      name: 'rateLimit',
      redirect: '/ratelimit',
      component: Layout,
      icon: "bi-shield-slash",
      children: [{
        path: '/ratelimit',
        name: 'ratelimit',
        component: () =>
          import('@/views/ratelimit/index'),
      }]
    },
    {
      path: '/config',
      name: 'config',
      redirect: '/config',
      component: Layout,
      icon: "bi-app-indicator",
      children: [{
        path: '/config',
        name: 'config',
        component: () =>
          import('@/views/config/index'),
      }]
    },
    {
      path: '/routerConfig',
      name: 'routerConfig',
      redirect: '/routerConfig',
      component: Layout,
      icon: "bi-compass",
      children: [{
        path: '/routerConfig',
        name: 'routerConfig',
        component: () =>
          import('@/views/routerConfig/index'),
      }]
    },
    {
      path: '/routerFilterConfig',
      name: 'routerFilterConfig',
      redirect: '/routerFilterConfig',
      component: Layout,
      icon: "bi-signpost-split",
      children: [{
        path: '/routerFilterConfig',
        name: 'routerFilterConfig',
        component: () =>
          import('@/views/routerFilterConfig/index'),
      }]
    }
  ]
})
