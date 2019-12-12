import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import About1 from '../views/chang/About.vue'
import User from '../views/User.vue'
import Shuju from '../../src/views/tab1/shuju.vue'
import after from '../views/chang/login/after.vue'
import register from '../views/chang/login/register.vue'
import login from '../views/chang/login/login.vue'
import dingdan from '../views/chang/dingdan/dingdan.vue'
import shezhi from '../views/chang/dingdan/shezhi.vue'
import youhui from '../views/chang/dingdan/youhuiquan.vue'
import xiangqing from '../views/chang/xiangqing.vue'
import Show from '../views/Show.vue'
import jiesuan from '../views/jiesuan.vue'
import xuexika from '../views/chang/dingdan/xuexika.vue'
import fenxiang from '../views/chang/dingdan/fenxiang.vue'

import Geng from '../List/geng/geng.vue'

import Cart from'../views/Cart.vue'
// import Buy from '../views/Buy.vue'
import Xqing from'../views/Xqing.vue'

import { RadioGroup, Radio } from 'vant';
import { Icon } from 'vant';

import axios from 'axios'
import Qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;


Vue.use(Icon);
Vue.use(RadioGroup);
Vue.use(Radio);


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/index',
    name: 'index',
    component:()=>import('../views/Index.vue'),
    children:[
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },{
        path:'/about1',
        name:'about1',
        component:About1,
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    redirect:'/shuju',
    component: User,
    children:[
      {
        path: '/shuju',
        name: 'shuju',
        component: Shuju,
      }
    ]
  },{
    path: '/xqing',
    name: 'Xqing',
    component: Xqing,
  },{
    path:'/c',
    name:'cart',
    component:Cart,
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/fenxiang',
    name: 'fenxiang',
    component: fenxiang
  },{
    path: '/register',
    name: 'register',
    component: register
   },{
    path: '/after',
    name: 'after',
    component: after
  },
  {
    path: '/dingdan',
    name: 'dingdan',
    component: dingdan,
  },
  {
    path: '/xuexika',
    name: 'xuexika',
    component: xuexika,
  },{
    path: '/shezhi',
    name: 'shezhi',
    component: shezhi
  },
  {
    path: '/xiangqing',
    name: 'xiangqing',
    component: xiangqing
  },{
    path: '/Show',
    name: 'Show',
    component: Show
  },
  {
    path: '/geng',
    name:'Geng',
    component: Geng
  },{
    path: '/jiesuan',
    name:'jiesuan',
    component: jiesuan
  },
  {
    path: '/youhuiquan',
    name: 'youhui',
    component: youhui,
    meta:{
      islogin:true
    }
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  // console.group('路由跳转之前')
  // console.log('to',to)
  // console.log('from',from)
  // console.groupEnd()
  if(to.meta.islogin){
    let token=localStorage.getItem('token')
    if(token){
      next()
    }else{
      alert('需要先登录哦')
      next({
        name:'after'
      })
    }
  }else{
    next()
  }
  
})

export default router
