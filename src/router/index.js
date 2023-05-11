import Vue from 'vue'
import  VueRouter  from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Product from '@/views/Product'
import Cart from '@/views/Cart'
import Register from '@/views/Register'
export default new VueRouter({
    routes: [
        {
          path:"/",
          component:()=>import("@/views/Home")  
        },
        {
          path:"/search",
          name:"search",
          component:()=>import("@/views/Search")
        },
        {
          path:"/login",
          component:()=>import("@/views/Login"),
          meta:{
            login:true
          }
        },
        {
          path:"/register",
          component:()=>import("@/views/Register"),
          meta:{
            login:true
          }
        },
        {
          path:"/product",
          name:"product",
          component:()=>import("@/views/Product"),
          meta:{
            product:true
          }
        },
        {
          path:"/cart",
          name:"cart",
          component: ()=>import("@/views/Cart"),
          meta:{
            cart:true
          }
        },
    ],
      scrollBehavior(to,from,savedPosition){
        return{x:0,y:0}
      }
})