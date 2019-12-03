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
        name: 'modal',
        component: () => import('./components/Modal.vue')
      },
      {
        path: 'snackbar',
        name: 'snackbar',
        component: () => import('./components/Snackbar.vue')
      },
      {
        path: 'drawer',
        name: 'drawer',
        component: () => import('./components/Drawer.vue')
      },
      {
        path: 'step',
        name: 'step',
        component: () => import('./components/Step.vue')
      },
      {
        path: 'datePicker',
        name: 'datePicker',
        component: () => import('./components/DatePicker.vue')
      },
      {
        path: 'idleTimeout',
        name: 'idleTimeout',
        component: () => import('./components/IdleTimeout.vue')
      },
      {
        path: 'camera',
        name: 'camera',
        component: () => import('./components/Camera.vue')
      }
    ]      
    },
    {
      path: '/team',
      component: () => import('./views/Team.vue')
    }
  ]
})