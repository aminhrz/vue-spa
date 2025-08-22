import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import getUsers from '../pages/user/Index.vue'
import showUsers from '../pages/user/ShowUser.vue'
import Templateuser from '../pages/user/Template.vue'
import Templateposts from '../pages/posts/Template.vue'
import getPosts from '../pages/posts/Index.vue'
import Showpost from '../pages/posts/ShowPost.vue'
import CreatPost from '../pages/posts/CreatPost.vue'
import EditPost from '../pages/posts/EditPost.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: Templateuser,
      children: [
        {
          path: '',
          name: 'showUsers',
          component: getUsers,
        },
        {
          path: ':id',
          name: 'idUsers',
          component: showUsers,
        },
      ],
    },
    {
      path: '/posts',
      name: 'posts',
      component: Templateposts,
      children: [
        {
          path: '',
          name: 'showPosts',
          component: getPosts,
        },
        {
          path: ':id',
          name: 'idPosts',
          component: Showpost,
        },
        {
          path: '/creat',
          name: 'creatPost',
          component: CreatPost,
        },
        {
          path: 'edit/:id',
          name: 'editPost',
          component: EditPost,
        },
      ],
    },
  ],
})

export default router
