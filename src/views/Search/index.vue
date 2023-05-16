<template>
  <div>
    <!-- searchline start -->
    <div class="searchline">
      <div class="container">
        <h2>搜尋『<span>小米</span>』的結果</h2>
      </div>
    </div>
    <!-- searchline end -->

    <!-- dividingline start -->
    <div class="dividingline">
      <div class="container"></div>
    </div>
    <!-- dividingline end -->

    <!-- orderlist start -->
    <div class="orderlist">
      <div class="container">
        <div class="orderline">
          <ul class="orderline-left">
            <li>
              <a href="#">推薦<span>|</span></a>
            </li>
            <li>
              <a href="#">新品<span>|</span></a>
            </li>
            <li><a href="#">價格</a></li>
          </ul>
          <ul class="orderline-right">
            <li>
              <input type="checkbox" />
              <a href="#">僅顯示有貨商品</a>
            </li>
            <li><input type="checkbox" /><a href="#">僅顯示特惠商品</a></li>
          </ul>
        </div>
        <div class="container-flex">
          <div
            class="good-item"
            v-for="p in aaa"
            :key="p.id"
            @click="queryProduct(p.id)"
          >
            <div class="buynow">立即購買</div>
            <img :src="p.imgUrl" />
            <a href="#">{{ p.pName }}</a>
            <p>NT${{ p.price }}</p>
            <img class="img2" :src="p.imgUrlSec" alt="" />
          </div>
          <!-- pagnation start-->
          <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :total="60"
          >
          </el-pagination>
          <!-- pagnation end -->
        </div>
      </div>
    </div>

    <!-- orderlist end -->
  </div>
</template>

<script>

export default {
  name: "Search",
  components: {},
  props: ["product"],
  data() {
    return {
      aaa:JSON.parse(localStorage.getItem('goodss'))
    };
  },
  methods: {
    queryProduct(id) {
      this.aaa.forEach((item) => {
        if (id == item.id) {
          item == this.aaa;
          this.$router.push({ name: "product", query: item });
        }
      });
    },
    //模糊查詢
    // queryData() {
    //   if (!this.gName) return this.product;
    //   let newgoods = [];
      
    //   this.product.forEach((item) => {
    //     if (item.pName.indexOf(this.gName) != -1) {
    //       newgoods.push(item);
    //       console.log(newgoods);
    //     }
    //   });
    //   localStorage.setItem('goods',JSON.stringify(newgoods))
    //   return newgoods; 
      //      if (!this.gName) {
      //   localStorage.setItem("goods", JSON.stringify(this.product));
      //   return this.product;
      // } else {
      //   let newgoods = [];
      //   this.product.forEach((item) => {
      //     if (item.pName.indexOf(this.gName) != -1) {
      //       newgoods.push(item);
      //       console.log("newgoodssssss", newgoods);
      //     }
      //   });
      //   return newgoods;
      // }
    // },
  },
};
</script>

<style scoped>
.pagination {
  width: 1226px;
  height: 30px;
  padding: 15px 0px;
  /* background-color: pink; */
}
.xm-conten {
  width: 1903px;
  height: 2880px;
}
/* searchline start */
.searchline {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #f7f2f2;
}
.searchline .container h2 {
  display: block;
  float: left;
  font-size: 16px;
  font-weight: 400;
}
.container {
  width: 1226px;
  margin: 0px auto;
  height: 100%;
}
.searchline .container h2 span {
  color: #ff6700;
}
/* searchline end */

/* dividingline start */
.dividingline {
  width: 100%;
  height: 36px;
  line-height: 36px;
}
/* dividingline end */

/* orderline start */
.orderlist {
  padding-top: 20px;
  width: 100%;
  height: 100%;
  background-color: #f7f2f2;
}
.orderline {
  margin: 20px 0;
}
.orderline-left {
  float: left;
}
.orderline-left span {
  padding-left: 30px;
  font-weight: bold;
  color: #e0e0e0;
}
.orderline-left li {
  float: left;
  font-size: 14px;
  padding-right: 30px;
  font-weight: bold;
  /* box-sizing: border-box; */
}
.orderline-left a {
  font-weight: bold;
  color: black;
}

.orderline-right {
  float: right;
}
.orderline-right input {
  margin-right: 8px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: none;
}
.orderline-right a {
  color: #212121;
  font-weight: bold;
  height: 18px;
  line-height: 18px;
  font-size: 14px;
}
.orderline-right li {
  float: right;
}
/* orderline end */

/* goodlist start */
.container-flex {
  width: 1300px;
  margin: 0 auto;
  justify-content: start;
  flex-wrap: wrap;
  display: flex;
}
.container-flex .good-item {
  width: 296px;
  height: 383px;
  padding-top: 47px;
  margin-top: 14px;
  margin-right: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
}
.container-flex .good-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}
.good-item .buynow {
  display: none;
}
.good-item .buynow:hover {
  display: block;
}
.container-flex .good-item img {
  width: 200px;
  height: 200px;
}
.container-flex .good-item a {
  margin-top: 15px;
  display: block;
  width: 296px;
  height: 42px;
  line-height: 42px;
  color: #424242;
  font-weight: bold;
  font-size: 14px;
  font-family: "Microsoft Yahei", "Hiragino Sans GB", sans-serif;
}
.container-flex .good-item p {
  width: 296px;
  height: 21px;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: #ff6700;
  font-family: "Microsoft Yahei", "Hiragino Sans GB", sans-serif;
}
.container-flex .good-item .img2 {
  width: 34px;
  height: 34px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
}
.container-flex .good-item .img2:hover {
  border: 1px solid #ff6700;
}
/* goodlist end */
</style>