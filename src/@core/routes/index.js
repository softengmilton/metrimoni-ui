import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../../Views/Home/Index.vue'
import Explore from '../../Views/Explore/Index.vue'
import Pricing from '../../Views/Pricing/Index.vue'

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
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router