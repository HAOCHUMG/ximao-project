<template>
  <div>
    <!-- header start -->
    <div class="header">
      <div class="container">
        <img src="@/assets/images/logo.png" alt="" />
        <a href="">了解更多關於 小米電水壺 2 的商品訊息</a>
      </div>
    </div>
    <!-- header end -->
    <!-- product start -->
    <main class="product">
      <div class="container" v-for="goods in goods" :key="goods.id">
        <!-- 圖片 -->
        <section class="product-left">
          <img class="img" :src="goods.imgUrl" alt="" />
        </section>
        <article class="product-right">
          <!-- <section class="slideBox" ref="slide" @click="slidebox" ></section> -->
          <section class="section-first">
            <h1>
              <span>{{ goods.pname }}</span>
            </h1>
            <div>白色</div>
            <div>NT${{ goods.price }}</div>
          </section>
          <section class="section-second">
            <h3>顏色</h3>
            <ul class="btn-grid">
              <li>
                <button>
                  <i></i>
                  <span>白色</span>
                </button>
              </li>
            </ul>
          </section>
          <section class="section-third">
            <h3 @click='asdasdas'>數量</h3>
            <div class="quantity">
              <div>
                <button @click="countMinus">
                  <i class="el-icon-minus"></i>
                </button>
                <!-- count>1?count--:count=1 -->
                <input
                  type="text"
                  v-model.number="goods.count"
                  @change="countChange"
                />
                <button @click="goods.count++">
                  <i class="el-icon-plus"></i>
                </button>
              </div>
            </div>
          </section>
          <section class="section-fourth">
            <ul>
              <li class="fourth-first">
                <span>{{ goods.pname }}</span
                ><strong>NT${{ goods.price }}</strong>
              </li>
              <li class="fourth-second">
                <span>總計:</span><strong>NT${{total}}</strong>
              </li>
            </ul>
          </section>
          <button class="btn" @click="goCart">立即購買</button>
        </article>
      </div>
    </main>
    <div class="desktop"></div>
    <!-- product end -->
  </div>
  <!-- product end -->
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      goods: [
        {
          id: this.$route.query.id,
          pname: this.$route.query.pName,
          count: 1,
          price: this.$route.query.price,
          sum: 0,
          imgUrl: this.$route.query.imgUrl,
        },
      ],
      // goodsFirst:[]
    };
  },

  methods: {
    countMinus() {
      if (this.goods[0].count > 1) {
        this.goods[0].count--;
      } else {
        this.goods[0].count == 1;
      }
    },
    countChange(e) {
      let value = e.target.value * 1;
      if (isNaN(value) || value < 1) {
        this.goods[0].count = 1;
      } else {
        this.goods[0].count = parseInt(value);
      }
    },
    goCart() {
      // 添加數據進本地存儲,並且跳轉頁面至購物車
      // this.$bus.$emit('ProductInfo',this.price,this.pname,this.imgUrl,this.hello)
      this.$attrs.reciveGoods(this.goods);
      let goodsItem = {
        id: this.$route.query.id,
        pname: this.$route.query.pName,
        count: this.goods[0].count,
        price: this.$route.query.price,
        imgUrl: this.$route.query.imgUrl,
      };
      
      let goodsFirst = []

      goodsFirst.push(goodsItem);

      localStorage.setItem('goods',JSON.stringify(goodsFirst));
      
      this.$router.push({
        name: "cart",query: {},});
    },
    asdasdas(){
      
    }
  },
  computed: {
    total() {
      let sum = 0;
      sum = this.goods[0].price * this.goods[0].count;
      return sum;
    },
  },
};
</script>

<style scoped>
/* header start */
.img {
  position: absolute;
  /* position: sticky; */
  top: -100px;
  left: 30px;
}
.btn-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 58px;
}
.btn-grid li {
  width: 160px;
  height: 58px;
  margin-left: 0;
  margin-right: 10px;
}
.btn-grid li button {
  align-items: center;
  justify-content: center;
  display: flex;
  /* justify-content: space-evenly; */
  background-color: rgb(255, 255, 255);
  line-height: 20px;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  border: 1px solid #ff6700;
}
.btn-grid li button i {
  /* line-height: 20px; */
  border-radius: 50%;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  /* box-shadow: 0 2px 8px 0 var(--shadow-black-a10); */
  display: inline-block;
  flex-shrink: 0;
  height: 30px;
  margin-right: 10px;
  width: 30px;
}
.btn-grid li button span {
  width: 32px;
  height: 20px;
  color: #424242;
  font-size: 16px;
}

.header {
  width: 100%;
  height: 90px;
  line-height: 90px;
  border-bottom: 2px solid #ff6700;
  /* background-color: aquamarine; */
  box-sizing: border-box;
}
.container {
  position: relative;
  width: 1226px;
  margin: 0px auto;
  /* padding: 15px 0px;  */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: palevioletred; */
}
.header img {
  width: 56px;
  height: 56px;
}
.header a {
  font-size: 12px;
  color: #666;
  font-family: "Courier New", Courier, monospace;
}
/* header end */
/* product start */
.product-left {
  background-color: initial;
  height: 500px;
  margin-left: 20px;
  position: sticky;
  text-align: center;
  top: 0;
  transition: background-color 0.25s ease;
  width: 550px;
  /* background-color: pink; */
}
.product-left img {
  display: block;
  height: 550px;
  max-width: 550px;
  object-fit: contain;
}
.product-right {
  width: 510px;
  height: 667px;
  margin-bottom: 60px;
  padding: 48px 48px 40px;
  background-color: #fafafa;
}
.product-right .section-first {
  width: 510px;
  height: 112px;
  padding: 20px 0px;
}
.product-right .section-first h1 {
  width: 510px;
  height: 48px;
}
.product-right .section-first h1 span {
  text-align: left;
  font-size: 40px;
  display: block;
  width: 510px;
  height: 48px;
  line-height: 48px;
}
.product-right .section-first div {
  margin-top: 8px;
  width: 510px;
  height: 24px;
  line-height: 24px;
  text-align: left;
  display: block;
  float: left;
  font-size: 20px;
  color: #757575;
}
.product-right .section-first div:nth-child(3) {
  margin-top: 8px;
  color: #ff6700;
  font-weight: bold;
}
.product-right .section-first {
  border-bottom: 1px solid #ebe4e4;
}
.product-right .section-second h3 {
  width: 510px;
  height: 24px;
  color: #757575;
  margin-top: 56px;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: left;
}
.section-third {
  width: 510px;
  height: 112px;
  /* background-color: #ff6700; */
}
.section-third h3 {
  width: 510px;
  height: 24px;
  color: #757575;
  margin-top: 56px;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: left;
}
.quantity {
  align-items: center;
  justify-content: start;
  display: flex;
  width: 510px;
  height: 38px;
}
.quantity div {
  display: flex;
  width: 136px;
  height: 36px;
  border: 1px solid #eee;
}
.quantity div button {
  width: 36px;
  height: 36px;
  color: #424242;
  background-color: #fff;
  border: 0;
  cursor: pointer;
}
.quantity div input {
  display: flex;
  border: 0;
  color: #757575;
  color: var(--content-light-variant);
  display: inline-flex;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 20px;
  height: 100%;
  line-height: 1;
  outline: none;
  padding: 0;
  text-align: center;
  width: 64px;
  border-right: 0.5px solid #ebe4e4;
  border-left: 0.5px solid #ebe4e4;
}
.section-fourth {
  width: 470px;
  height: 84px;
  padding: 20px;
  margin-top: 30px;
  background-color: #ffffff;
}
.section-fourth .fourth-first {
  display: flex;
  width: 460px;
  height: 20px;
  margin-bottom: 15px;
  /* background-color: #666; */
  justify-content: space-between;
}
.section-fourth .fourth-first span {
  width: 460px;
  height: 18.39px;
  text-align: left;
  font-size: 16px;
  color: #757575;
}
.section-fourth .fourth-first strong {
  color: #757575;
  font-size: 16px;
}
.section-fourth .fourth-second {
  display: flex;
  width: 460px;
  height: 20px;
  margin-bottom: 15px;
  /* background-color: #666; */
  justify-content: space-between;
}

.section-fourth .fourth-second span {
  width: 60px;
  height: 23px;
  /* background-color: aqua; */
  font-size: 20px;
  line-height: 23px;
  text-align: left;
  color: #ff6700;
  margin-top: 7px;
}
.section-fourth .fourth-second strong {
  width: 81.672px;
  height: 34.5px;
  line-height: 34.5px;
  font-size: 30px;
  margin-right: 17px;
  color: #ff6700;
}
.btn {
  width: 506px;
  height: 46px;
  border: 1.5px solid #ff6700;
  background-color: #ff6700;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
}
.desktop {
  width: 100%;
  height: 101px;
  background-color: #f5f5f5;
}
</style>