import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import AppLayout from 'layout/AppLayout'
import Comment from 'components/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: 'hello',
          name: 'Hello',
          component: Hello
        },
        {
          path: 'comment',
          name: 'Comment',
          component: Comment
        }
      ]
    }
  ]
})
