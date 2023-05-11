<template>
  <div>
    <!-- header start -->
    <div class="header">
      <div class="container-flex">
        <div class="container-left">
          <img src="@/assets/images/logo.png" alt="" />
          <h1>我的購物車</h1>
        </div>
        <ul class="container-right">
          <li><a href="#">註冊</a></li>
          <li><a href="#">立即登錄</a></li>
        </ul>
      </div>
    </div>
    <!-- header end -->
    <!-- shopping-step start -->
    <div class="shopping-step">
      <div class="container">
        <ul>
          <li class="first-li"><span>1</span>購物車</li>
          <li><i class="el-icon-arrow-right"></i></li>
          <li><span>2</span>提交訂單</li>
          <li><i class="el-icon-arrow-right"></i></li>
          <li><span>3</span>完成支付</li>
        </ul>
      </div>
    </div>
    <!-- shopping-step end -->
    <!-- main cart  -->
    <div class="main-cart">
      <!-- cart aside start -->
      <div class="aside">達到<strong> NT$800 </strong>免運費,特殊商品除外</div>
      <!-- cart aside end -->
      <!-- cart header start -->
      <div class="cart-header">
        <div><input type="radio" class="btn" /><label>選擇所有</label></div>
        <div>商品名稱</div>
        <div>單價</div>
        <div>數量</div>
        <div>總計</div>
      </div>
      <!-- cart header end -->
      <!-- section-cart start -->
      <section class="main-section" v-for="goods in goodsCurrent" :key="goods.id">
        <aside><input type="radio" /></aside>
        <!-- :checked="istrue" -->
        <section class="section-cart">
          <div>
            <img alt="" :src="goods.imgUrl" />
          </div>
          <div class="product-title">
            <h3>{{ goods.pname }}</h3>
          </div>
          <div class="product-price">
            <strong><small>NT$</small>{{ goods.price }}</strong>
          </div>
          <div class="plusAndMinus">
            <div>
              <button @click="countMinus"><i class="el-icon-minus"></i></button>

              <input type="text" v-model="goods.count" @change="changeCount" />

              <button @click="goods.count++">
                <i class="el-icon-plus"></i>
              </button>
            </div>
          </div>
          <div class="total-price">
            <strong>NT${{total}}</strong>
          </div>
          <div class="space"></div>
          <button class="cancel-btn" @click="goodsDelete(goods.id)">
            <i class="el-icon-close"></i>
          </button>
        </section>
      </section>
      <!-- section-cart end -->
      <section class="main-suggest">
        <h3 class="suggest-title">為你推薦</h3>
        <ul class="suggest-list">
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
          <li class="suggest-list-inner">
            <img src="@/assets/images/pms_1659697005.56169523.png" alt="" />
            <h4>小米電水壺 2</h4>
            <div>
              <strong><small>NT$</small>895</strong>
            </div>
          </li>
        </ul>
      </section>
      <!-- suggest end -->
      <!-- cart-total start -->
      <div class="cart-footer">
        <div class="cart-footer-container">
          <button class="cart-delete">刪除</button>
          <div class="cart-select">
            已選擇<strong>{{goodsCurrentCount}}</strong>件共<strong>{{goodsCurrentCount}}</strong>件
          </div>
          <div class="cart-space"></div>
          <div class="cart-total"><strong>總計NT${{total}}</strong></div>
          <button class="cart-pay">
            <span>去結算</span>
            <span>(0)</span>
          </button>
        </div>
      </div>
      <!-- cart-total end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["cartGoods"],
  data() {
    return {
      goods:JSON.parse(localStorage.getItem("goods")) || [],
      // asdad:1111,
      // price:this.$store.state.price,
      // istrue:true,
      // pname:this.$route.query.pname,
      // price:this.$route.query.price,
      // imgUrl:this.$route.query.imgUrl,
    };
  },
  methods: {
    // 商品個數減1
    countMinus() {
      // console.log(this.cartGoods[cartGoods.length].count);
      if (this.goods[0].count > 1) {
        this.goods[0].count--;
      } else {
        this.goods[0].count == 1;
      }
    },
    //手動輸入商品個數
    changeCount(e) {
      let value = e.target.value * 1;
      console.log(value);
      if (isNaN(value) || value < 1) {
        this.goods[0].count = 1;
      } else {
        this.goods[0].count = parseInt(value);
      }
    },
    //刪除單個商品
    goodsDelete(id) {
      console.log(id);
      this.goods.forEach((item) => {
        console.log(item.id);
        if (id == item.id) {
          localStorage.removeItem("goods");
          location.reload()
        }
      });
    },
    //重新刷新頁面
    // getData() {
    //   this.goods == JSON.parse(localStorage.getItem("goods")) || [];
    // },
  },
  computed: {
    goodsCurrent(){
      let goodslist = []
      this.goods.forEach((item)=>{
          goodslist.push(item)
      })
      return goodslist
    },
    total() {
      let sum = 0;
      this.goods.forEach((item)=>{
        console.log('asdasd.............'+item.price*item.count);
        sum += item.price*item.count
      })
      return sum
    },
    goodsCurrentCount(){
        let count = 0
       this.goods.forEach((item)=>{
        count += item.count
      })
      return count
    }

  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 90px;
  border-bottom: 1.5px solid #ff6700;
  /* background-color: pink; */
}
.container-flex {
  width: 1226px;
  height: 59px;
  padding: 15px 0px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
}
.container-left img {
  float: left;
  width: 56px;
  height: 56px;
}
.container-left h1 {
  display: block;
  width: 190px;
  line-height: 56px;
  height: 56px;
  font-size: 25px;
  margin: 0px 30px;
  margin-block-start: 3px;
  color: #424242;
  /* margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
}
.container ul {
  align-items: center;
}
.container-right li {
  float: right;
  width: 70px;
  height: 59px;
}
.container-right li a {
  display: block;
  align-items: center;
  font-size: 12px;
  margin-top: 20px;
  color: #757575;
}
/* <!-- shopping-step start --> */
.shopping-step {
  width: 100%;
  height: 100%;
  padding-bottom: 55px;
  padding-top: 25px;
  /* margin: 0px auto; */
  /* background-color: pink; */
}
.container {
  /* padding-left: 20px; */
}
.shopping-step .container li:nth-child(odd) {
  float: left;
  width: 188.23.px;
  height: 31px;
  line-height: 31px;
  margin: 0 90px;
  color: #b0b0b0;
  font-size: 17px;
}
.shopping-step .container .first-li {
  color: #ff6700 !important;
}
.shopping-step .container li > span {
  font-size: 17px;
  margin-right: 15px;
}
.shopping-step .container li:nth-child(even) {
  float: left;
  width: 128.922px;
  height: 31px;
  margin: 0 36px;
}
.shopping-step .container li > i {
  font-size: 21px;
  margin-top: 5px;
  color: #757575;
  font-weight: 200;
}
/* main cart start */

.main-cart {
  width: 100%;
  padding: 0px;
  padding-bottom: 35px;
  background-color: #f5f5f5;
}
.main-container {
  width: 1226px;
  margin: 0 auto;
}
/* aside start */
.main-cart .aside {
  /* background-color: pink; */
  width: 1226px;
  height: 20px;
  margin: 0px auto;
  margin-bottom: 15px;
  padding-top: 15px;
  line-height: 20px;
  font-size: 16px;
  color: #757575;
}

.main-cart .aside strong {
  color: #ff6700;
}
/* aside end */
/* cart-header start*/
.cart-header {
  width: 1130px;
  height: 23px;
  margin: 0px auto;
  padding: 10px 48px;
  background-color: #ffffff;
  display: flex;
}
.cart-header div:nth-child(1) {
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 192px;
  height: 23px;
  color: #b0b0b0;
  /* background-color: #ff6700; */
}
.cart-header label {
  margin-left: 30px;
}
.cart-header div:nth-child(2) {
  text-align: left;
  flex-shrink: 0;
  margin-left: 30px;
  font-size: 14px;
  width: 400px;
  height: 23px;
  color: #b0b0b0;
}
.cart-header div:nth-child(3) {
  font-size: 14px;
  width: 100px;
  height: 23px;
  margin-left: 30px;
  color: #b0b0b0;
}
.cart-header div:nth-child(4) {
  font-size: 14px;
  width: 134px;
  height: 23px;
  margin-left: 30px;
  color: #b0b0b0;
}
.cart-header div:nth-child(5) {
  font-size: 14px;
  width: 110px;
  height: 23px;
  text-align: center;
  color: #b0b0b0;
  margin-left: 30px;
}
.cart-header .btn {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #b0b0b0;
}
/* cart-header end */
/* main-section start */
.main-section {
  display: flex;
  width: 1130px;
  height: 146px;
  padding: 25px 48px;
  margin: 10px auto;
  background-color: #fff;
}
.main-section aside {
  align-items: center;
  flex-flow: column nowrap;
  flex-shrink: 0;
  justify-content: center;
  width: 18px;
  height: 144px;
  margin-right: 30px;
  /* background-color: #ff6700; */
  display: flex;
}
.main-section aside input {
  width: 18px;
  height: 18px;
}
.main-section .section-cart {
  display: flex;
  width: 1082px;
  height: 146px;
  align-items: center;
  /* background-color: pink; */
}
.section-cart img {
  width: 144px;
  height: 144px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  object-fit: contain;
  padding: 5px;
  border: 1px solid #f0eded;
}
.section-cart .product-title {
  width: 400px;
  height: 22px;
  margin-left: 30px;
}
.section-cart h3 {
  width: 400px;
  height: 22px;
  line-height: 22px;
  text-align: left;
  font-size: 18px;
  color: #757575;
  cursor: pointer;
}
.section-cart .product-price {
  width: 100px;
  height: 22px;
  margin-left: 30px;
  font-size: 16px;
}
.section-cart .product-price strong {
  width: 53.81px;
  height: 22px;
  color: #424242;
}
.plusAndMinus {
  width: 134px;
  height: 32px;
  border: 1px solid #eee;
  margin-left: 30px;
  display: flex;
}
.plusAndMinus div {
  width: 132px;
  height: 30px;
  border: 1px solid #eee;
  display: flex;
}
.plusAndMinus button:nth-child(1) {
  width: 31px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  border-right: 1px solid #eee;
  background-color: transparent;
  font-size: 14px;
  font-style: normal;
  color: #424242;
}
.plusAndMinus button:nth-child(3) {
  width: 31px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  border-left: 1px solid #eee;
  background-color: transparent;
  font-size: 14px;
  font-style: normal;
  color: #424242;
}
.plusAndMinus input {
  width: 68px;
  height: 28px;
  font-size: 16px;
  border: 0;
  display: flex;
  text-align: center;
}
.total-price {
  width: 110px;
  height: 22px;
  margin-left: 30px;
}
.total-price strong {
  color: #ff6700;
  font-weight: 400;
}
.space {
  width: 60px;
}
.cancel-btn {
  width: 12px;
  height: 14.8px;
  background-color: transparent;
  border: 0px;
  margin-bottom: 7px;
}
.cancel-btn i {
  width: 12px;
  height: 13px;
  font-size: 18px;
  color: #757575;
  font-style: normal;
  cursor: pointer;
}
/* <!-- shopping-step end --> */
/* suggest start */
.main-suggest {
  width: 1226px;
  height: 1324px;
  margin: 90px auto 30px !important;
  background-color: #f5f5f5;
}
.suggest-title {
  width: 1226px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  color: #757575;
}
.suggest-title::before {
  content: url(https://i01.appmifile.com/webfile/globalimg/i18n_frontend/cart/cart-recommend-title.svg);
}
.suggest-title::after {
  background-image: url(https://i01.appmifile.com/webfile/globalimg/i18n_frontend/cart/cart-recommend-title.svg);
  content: "";
  background-size: contain;
  display: inline-block;
  width: 40px;
  height: 24px;
  transform: rotateY(180deg);
}

.suggest-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1226px;
}
.suggest-list-inner {
  /* width: 144px;
    height: 232px;
    padding: 40px 45px 30px;
    margin-top: 14px;
    margin-right: 14px;
    background-color: #fff; */
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-right: 1px;
  margin-top: 14px;
  height: 300px;
  overflow: hidden;
  padding: 40px 45px 30px;
  text-align: center;
  width: 234px;
}
.suggest-list-inner img {
  width: 144px;
  height: 144px;
  cursor: pointer;
  display: block;
}
.suggest-list-inner h4 {
  color: #424242;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  margin: 18px 0 0;
}
.suggest-list-inner div {
  color: #ff6700;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  line-height: 16px;
  margin: 10px 0 0;
}
/* suggest end */
/* cart-footer start */
.cart-footer {
  /* width: 100%;
    height: 100%; */
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
  box-sizing: border-box;
  position: sticky;
  bottom: 0px;
}
.cart-footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1226px;
  height: 68px;
  margin: 0px auto;
  /* background-color: #eee; */
}
.cart-footer-container .cart-delete {
  margin-left: 10px !important;
  border: 0px;
  font-size: 18px;
  color: #ff6700;
}
.cart-footer-container .cart-select {
  width: 156.078px;
  height: 22px;
  margin-left: 20px;
  border-left: 1px solid #eee;
  font-size: 18px;
  color: #727272;
}
.cart-footer-container .cart-select strong {
  color: #ff6700;
}
.cart-space {
  width: 634.281px;
}
.cart-footer-container .cart-total {
  font-size: 22px;
  font-weight: 400;
  line-height: 27px;
  text-align: right;
  color: #ff6700;
}
.cart-footer-container .cart-pay {
  width: 202px;
  height: 68px;
  padding: 0 24px;
  margin-left: 10px;
  border: 0px;
  background-color: #ccc;
  cursor: not-allowed;
}
.cart-footer-container .cart-pay span {
  color: #ffffff;
  font-size: 22px;
  z-index: 900;
  font-weight: bold;
}
/* cart-footer end */
/* main-section end */
</style>