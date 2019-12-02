import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/components',
      component: () => import('./views/Components.vue'),
      children: [{
        path: 'modal',
        component: () => import('./components/Modal.vue')
      },
      {
        path: 'snackbar',
        component: () => import('./components/Snackbar.vue')
      },
      {
        path: 'drawer',
        component: () => import('./components/Drawer.vue')
      },
      {
        path: 'step',
        component: () => import('./components/Step.vue')
      },
      {
        path: 'datePicker',
        component: () => import('./components/DatePicker.vue')
      },
      {
        path: 'menuList',
        component: () => import('./components/MenuList.vue')
      },
      {
        path: 'idleTimeout',
        component: () => import('./components/IdleTimeout.vue')
      }
    ]      
    },
    {
      path: '/team',
      component: () => import('./views/Team.vue')
    }
  ]
})