import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Question from '@/views/Question.vue'
import SearchAll from '@/views/SearchAll.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/question/:id',
    name: 'Question',
    component: Question,
  },
  {
    path: '/searchall',
    name: 'SearchAll',
    component: SearchAll,
  },
]

export default routes
