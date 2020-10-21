import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'
import Log from '@/views/Log.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/log',
    name: 'Log',
    component: Log,
  },
]

export default routes
