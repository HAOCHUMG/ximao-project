<template>
  <div class="banner">
    <div class="container">
      <div class="banner-box">
        <!-- 輪播圖 -->
        <div class="logo">
          <!-- 左側箭頭 -->
          <a
            href="javascript:void(0);"
            class="arrow-left"
            @click="clickPageLeft()"
            @mouseenter="enter"
            @mouseleave="go"
          >
            <a href="javascript:void(0);" class="arrow-l"></a>
          </a>
          <!-- 右側箭頭 -->
          <a
            href="javascript:void(0)"
            class="arrow-right"
            @click="clickPageRight()"
            @mouseenter="enter"
            @mouseleave="go"
          >
            <a href="javascript:void(0)" class="arrow-r"></a>
          </a>
          <!-- 輪播圖 -->
          <ul>
            <li>
              <a href="#">
                <img
                  v-for="(item, index) in imageurl"
                  :key="index"
                  :src="item"
                  v-show="n == index"
                  @mouseenter="enter"
                  @mouseleave="go"
                />
              </a>
            </li>
          </ul>
        </div>
        <!-- 小圓圈 -->
        <div class="pager">
          <div class="pager-item" v-for="(v, i) in imageurl" :key="i">
            <a href="#" :class="n == i ? 'pager-link-model' : 'pager-link'"></a>
          </div>
        </div>
        <!-- 側邊欄 -->
        <div class="slide">
          <ul>
            <li>
              <a href="">手機</a><i class="el-icon-arrow-right"></i>
              <div class="slide-list">
                <ul>
                  <li v-for="(cellphone, index) in CellphoneName" :key="index">
                    <a href="">
                      <img :src="cellphone.imgSrc" alt="" />
                      <span>{{ cellphone.cellphoneName }}</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li v-for="(cellphone, index) in CellphoneName" :key="index">
                    <a href="">
                      <img :src="cellphone.imgSrc" alt="" />
                      <span>{{ cellphone.cellphoneName }}</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li v-for="(cellphone, index) in CellphoneName" :key="index">
                    <a href="">
                      <img :src="cellphone.imgSrc" alt="" />
                      <span>{{ cellphone.cellphoneName }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="">視聽娛樂</a><i class="el-icon-arrow-right"></i></li>
            <li><a href="">智慧家電</a><i class="el-icon-arrow-right"></i></li>
            <li><a href="">旅行穿戴</a><i class="el-icon-arrow-right"></i></li>
            <li><a href="">智慧科技</a><i class="el-icon-arrow-right"></i></li>
            <li>
              <a href="">電源3C配件</a><i class="el-icon-arrow-right"></i>
            </li>
            <li><a href="">耳機音箱</a><i class="el-icon-arrow-right"></i></li>
            <li><a href="">健康護理</a><i class="el-icon-arrow-right"></i></li>
            <li><a href="">生活周邊</a><i class="el-icon-arrow-right"></i></li>
            <li><a href="">全部配件分類</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  data() {
    return {
      imageurl: [
        require("@/assets/images/pocom5-pc.jpg"),
        require("@/assets/images/G10Ppc.jpg"),
        require("@/assets/images/20230407-175743.jpg"),
        require("@/assets/images/C400-PC.jpg"),
      ],
      CellphoneName: [
        {
          imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
          cellphoneName: "Xiaomi 13 系列",
        },
        {
          imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
          cellphoneName: "Xiaomi 13 Lite",
        },
        {
          imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
          cellphoneName: "Xiaomi 12T 系列",
        },
        {
          imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
          cellphoneName: "Xiaomi 12 系列",
        },
        {
          imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
          cellphoneName: "Xiaomi POCO X5 5G 系列",
        },
        {
          imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
          cellphoneName: "Xiaomi POCO F4系列",
        },
        // {
        //   imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
        //   cellphoneName: "Xiaomi POCO X4 GT",
        // },
        // {
        //   imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
        //   cellphoneName: "Xiaomi POCO M5 系列",
        // },
        // {
        //   imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
        //   cellphoneName: "Xiaomi POCO C40",
        // },
        // {
        //   imgSrc: require("@/assets/imagesCellphone/M2-Black.png"),
        //   cellphoneName: "Xiaomi Redmi Note 12 系列",
        // },
        // {
        //   imgSrc:require('@/assets/imagesCellphone/M2-Black.png'),
        //   cellphoneName:"Xiaomi Redmi Note 11 Pro 5G"
        // },
        // {
        //   imgSrc:require('@/assets/imagesCellphone/M2-Black.png'),
        //   cellphoneName:"Xiaomi Redmi Note 11S 系列"
        // },
        // {
        //   imgSrc:require('@/assets/imagesCellphone/M2-Black.png'),
        //   cellphoneName:"Xiaomi Redmi 12C"
        // },
        // {
        //   imgSrc:require('@/assets/imagesCellphone/M2-Black.png'),
        //   cellphoneName:"Xiaomi Redmi 10 2022"
        // },
        // {
        //   imgSrc:require('@/assets/imagesCellphone/M2-Black.png'),
        //   cellphoneName:"POCO官方網站"
        // },
      ],
      n: 1,
      interId: null,
    };
  },
  methods: {
    go() {
      this.interId = setInterval(() => {
        this.n++;
        if (this.n == this.imageurl.length) {
          this.n = 0;
        }
      }, 1000);
    },
    enter() {
      clearInterval(this.interId);
    },
    // clickPage(str){
    //     if(str=='up'){
    //         this.n--
    //     }
    // }
    clickPageLeft() {
      if (this.n == 0) {
        this.n = this.imageurl.length;
      }
      this.n--;
    },
    clickPageRight() {
      this.n++;
      if (this.n == this.imageurl.length) {
        this.n = 0;
      }
    },
  },

  mounted() {
    this.go();
  },
};
</script>

<style scoped>
/* *{
    outline: solid #f00 1px !important;
    background: #000 !important;
    color: #fff !important;
} */
.pager-link-model {
  display: block;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border: 2px solid #fff;
  border-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  text-align: left;
  text-indent: -9999px;
  overflow: hidden;
  background: #f5f5f5;
  transition: all 0.2s;
}
.logo ul li {
  display: flex;
}
.logo ul li a img {
  width: 1226px;
  height: 438px;
}
.logo ul {
  /* width: 400%; */
}
.logo {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  top: -22px;
}
.pager {
  position: absolute;
  display: block;
  left: auto;
  right: 30px;
  width: 400px;
  text-align: right;
  right: 25px;
  bottom: 25px;
}
.pager .pager-item {
  display: inline-block;
}
.pager .pager-item .pager-link {
  display: block;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border: 2px solid #fff;
  border-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  text-align: left;
  text-indent: -9999px;
  overflow: hidden;
  background: #f5f5f5;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.2s;
}
.pager .pager-item .pager-link:hover {
}
.arrow-left {
  float: left;
  position: absolute;
  top: 50%;
  left: 234px;
  width: 41px;
  height: 69px;
  margin-top: -35px;
  background-image: url(https://i01.appmifile.com/webfile/globalimg/zh/2014/public/icon-slides.png);
  background-position-x: 82px;
}
.arrow-right {
  float: right;
  position: absolute;
  right: 0%;
  top: 50%;
  width: 41px;
  height: 69px;
  margin-top: -40px;
  background-image: url(https://i01.appmifile.com/webfile/globalimg/zh/2014/public/icon-slides.png);
  background-position-x: 42px;
}
.arrow-right:hover {
  background-color: #333;
}
.arrow-left:hover {
  background-color: #333;
}
.container {
  width: 1226px;
  height: 100%;
  margin: 0 auto;
}
.banner {
  /* margin-left:338px; */
  width: 100%;
  height: 460px;
  background-color: none;
}
.banner-box {
  position: relative;
  width: 100%;
  height: 460px;
  /* background-color: pink; */
}
.banner-box img {
  width: 100%;
}
/* slide */
.slide {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 234px;
  height: 420px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 9.2px 0px;
}
.slide > ul > li {
  display: block;
  text-align: left;
  height: 42px;
  line-height: 42px;
  padding-left: 30px;
}
.slide > ul > li > a {
  color: #fff;
}
.slide i {
  float: right;
  padding-right: 20px;
  padding-top: 12px;
  color: #fff;
}
.slide > ul > li:hover {
  background-color: #ff6700;
}
.slide-list {
  display: none;
  position: absolute;
  top: 0px;
  left: 234px;
  width: 992px;
  height: 437px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-left: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
}
.slide > ul > li:hover > .slide-list {
  display: block;
}
.slide-list ul {
  float: left;
  position: relative;
  width: 248px;
  height: 437px;
  
}
.slide-list ul > li {
  width: 100%;
  height: 73px;
  padding: 18px 20px 18px 20px;
  box-sizing: border-box;
  float: left;  
}
.slide-list ul li a img {
  position: absolute;
  left: 10px;
  margin-left: 12px;
  width: 40px;
  height: 40px;
}
.slide-list span {
  position: absolute;
  font-size: 14px;
  left: 65px;

}
.slide-list li:hover span {
  color: #ff6700;
}
/* 輪播圖箭頭(左側) */
</style>