import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Menu1 from '@/components/menu1/Menu1.vue'
import Menu2 from '@/components/menu2/Menu2.vue'
import Menu3 from '@/components/menu3/Menu3.vue'
import Page404 from '@/components/error-page/Page404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // remove '#' symbol from URL, hence 404 page needs to be handle manually
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu1',
      name: 'Menu1',
      component: Menu1
    },
    {
      path: '/menu2',
      name: 'Menu2',
      component: Menu2
    },
    {
      path: '/menu3',
      name: 'Menu3',
      component: Menu3
    },
    {
      path: '/*',
      name: 'Page404',
      component: Page404
    }
  ]
})
