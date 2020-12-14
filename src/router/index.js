import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Question from '@/views/Question.vue'
import Ask from '@/views/Ask.vue'

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
    path: '/ask',
    name: 'Ask',
    component: Ask,
  },
]

export default routes
