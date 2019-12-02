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
      },{
        path: 'menuList',
        component: () => import('./components/MenuList.vue')
      },{
        path: 'datepicker',
        component: () => import('./components/DatePicker.vue')
      }]      
    },
    {
      path: '/team',
      component: () => import('./views/Team.vue')
    }
  ]
})