import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.use(Vuex)
Vue.use(VueRouter)
import 'jquery'
//介绍
const index = require('./components/introduce/introduce.vue');
//评委
const jury  = require('./components/jury/jury.vue');
//说明
const declare  = require('./components/declare/declare.vue');
const r = [
  {
    path:'/introduce/',
    component:index.default, 
  },
  {
    path:'/jury',
    component:jury.default, 
  },
  {
    path:'/declare',
    component:declare.default, 
    children:[
      {
        path:'/declare/media',
        component:require('./components/declare/media/media.vue').default,
      },
      {
        path:'/declare/participant',
        component:require('./components/declare/participant/participant.vue').default,
      }
    ]
  }
];


//路由初始化
const router = new VueRouter({
  //这里的routes 键必须这么写
  routes : r
})

const store =  new Vuex.Store({
  state:{
      count:0
  }
})
  



new Vue({
  el: 'app',
  store,
  router,
  components:{
    App
  }
})
