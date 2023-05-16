import Vue from 'vue'
import  VueRouter  from 'vue-router'
import store from '@/store/index'
Vue.use(VueRouter)




import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Product from '@/views/Product'
import Cart from '@/views/Cart'
import Register from '@/views/Register'

const router = new VueRouter({
    routes: [
        {
          path:"/",
          component:()=>import("@/views/Home"),
          name:'home',
          meta:{
            home:true
          }  
        },
        {
          path:"/search",
          name:"search",
          component:()=>import("@/views/Search"),

        },
        {
          path:"/login",
          name:"login",
          component:()=>import("@/views/Login"),
          meta:{
            login:true
          }
        },
        {
          path:"/register",
          name:"/register",
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
          },
          // beforeEnter:(to,from,next) => {
          //   if(from.path === '/search'){
          //     next()
          //   }else{
          //     next('/')
          //   }
          // }
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

router.beforeEach((to,from,next) => {
    let token = store.state.token
    let email = store.state.email
    // if(token){
    //   console.log('getToken');
    //   next()
    // }else{
    //   next()
    // }
    next()
})

export default router