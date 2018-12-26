import Vue from 'vue'
import Router from 'vue-router'
import imgPanel from '@/components/ImgPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: imgPanel
    }
  ]
})
