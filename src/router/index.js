import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/main',
      name: 'Main',
      component: Main
    },{
      path:"/",
      redirect:"/main"
    }
  ]
})
