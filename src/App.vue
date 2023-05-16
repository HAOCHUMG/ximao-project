<template>
  <div id="app">
    <div v-if="!$route.meta.cart">
      <div v-if="!$route.meta.product">
        <div v-if="!$route.meta.login">
          <Header></Header>
          <Navbar :recive="recive"></Navbar>
        </div>
      </div>
    </div>
    <router-view :product="product" :reciveGoods="reciveGoods" :cartGoods="cartGoods"></router-view>
    <div v-if="!$route.meta.login">
      <Footer></Footer>
      <Bottom></Bottom>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer/index.vue";
import Bottom from "@/components/Bottom/index.vue";
export default {
  name: "App",
  components: { Header, Navbar, Footer, Bottom },
  data() {
    return {
      product:{},
      cartGoods:{}
    }
  },
  methods:{
    recive(x){
      this.product = x
    },
    reciveGoods(goods){
      this.cartGoods = goods
    }
  }
};
</script>

<style>

</style>
