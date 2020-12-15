import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Question from '@/views/Question.vue'
import Ask from '@/views/Ask.vue'
import QuestionDetail from '@/views/QuestionDetail.vue'

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
  {
    path: '/question/detail/:id',
    name: 'QuestionDetail',
    component: QuestionDetail,
  },
]

export default routes
