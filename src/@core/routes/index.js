import { createWebHistory, createRouter } from 'vue-router'

import Home from '../../Views/Home/Index.vue'
import Explore from '../../Views/Explore/Index.vue'
import Pricing from '../../Views/Pricing/Index.vue'
import Login from '../../Views/Auth/Login.vue'
import SignUp from '../../Views/Auth/Signup.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Home',
    }
  },
  {
    path: '/explore',
    component: Explore,
    name: 'Explore',
    meta: {
      title:'Explore'
    }
  },
    {
    path: '/pricing',
    component: Pricing,
    name: 'Pricing',
    meta: {
      title:'Pricing'
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      title:'Login'
    }
  },
    {
    path: '/signup',
    component: SignUp,
    name: 'SignUp',
    meta: {
      title:'SignUp'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router