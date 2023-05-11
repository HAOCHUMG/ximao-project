<template>
  <div class="wrap">
    <div class="container">
      <!-- cellphone start -->
      <!-- 手機大區 -->
      <div class="cellphone">
        <div class="home-banner-box">
          <a href="#">
            <img
              src="@/assets/images/409A42A5-27B2-01FB-6412-6033122DC244.jpg"
              alt=""
            />
          </a>
        </div>
        <!-- 手機 -->
        <h2 class="title">
          手機
          <a href="#" class="more">
            查看更多
            <i class="el-icon-arrow-right"></i>
          </a>
        </h2>
        <div class="phone-box">
          <div class="phone-box-main">
            <ul>
              <!-- 手機第一行 -->
              <li class="items">
                <a href="#">
                  <img src="@/assets/images/1114-65monitor-04.jpg" alt="" />
                </a>
              </li>
              <li class="items" v-for="(item, index) in item" :key="index">
                <a href="#">
                  <img class="img-goods" :src="item.itemUrl" alt="" />
                </a>
                <a href="#">{{ item.itemName }}</a>
                <p>{{ item.itemPrice }}</p>
              </li>
              <!-- 手機第二行 -->
              <li class="items">
                <a href="#">
                  <img src="@/assets/images/1114-12-books.jpg" alt="" />
                </a>
              </li>
              <li
                class="items"
                v-for="(item_sec,index) in item_sec"
                :key="index"
              >
                <a href="#">
                  <img class="img-goods" :src="item_sec.itemUrl" alt="" />
                </a>
                <a href="#">{{ item_sec.itemName }}</a>
                <p>{{ item_sec.itemPrice }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 家電區 -->
      <div class="cellphone">
        <h2 class="title">
          家電
          <a href="#" class="more">
            查看更多
            <i class="el-icon-arrow-right"></i>
          </a>
        </h2>
        <div class="phone-box">
          <div class="phone-box-main">
            <ul>
              <li class="items">
                <a href="#">
                  <img src="@/assets/images/1114-w10-ultra.jpg" alt="" />
                </a>
              </li>
              <li
                class="items"
                v-for="(appliances, index) in appliances"
                :key="index"
              >
                <a href="#">
                  <img
                    class="img-goods"
                    :src="appliances.appliancesUrl"
                    alt=""
                  />
                </a>
                <a href="#">
                  <a href="#">{{ appliances.appliancesName }}</a>
                  <p id="del">{{ appliances.appliancesPrice }}</p>
                </a>
              </li>

              <!-- <li class="item1">
                                <div>
                                    <a href="">
                                        <p class="items1-desc">
                                            <span>Redmi MAX 86 超大屏電視</span>
                                            <span class="items1-price">7999元</span>
                                        </p>
                                        <img class="items1-img" src="@/assets/images/pms_1621479160.6511830.png" alt="">
                                    </a>
                                </div>
                                <div>
                                   <a href="">
                                        <p class="items1-desc">
                                            <span>Redmi MAX 86 超大屏電視</span>
                                            <span class="items1-price">7999元</span>
                                        </p>
                                        <img class="items1-img" src="@/assets/images/pms_1621479160.6511830.png" alt="">
                                    </a>
                                </div>
                            </li> -->
            </ul>
            <ul>
              <li class="items">
                <a href="#">
                  <img src="@/assets/images/20230210-191017.jpg" alt="" />
                </a>
              </li>
              <li
                class="items"
                v-for="(appliances_sec, index) in appliances_sec"
                :key="index"
              >
                <a href="#">
                  <img
                    class="img-goods"
                    :src="appliances_sec.appliancesUrl"
                    alt=""
                  />
                </a>
                <a href="#">
                  <a href="#">{{ appliances_sec.appliancesName }}</a>
                  <p id="del">{{ appliances_sec.appliancesPrice }}</p>
                </a>
              </li>
              <!-- 最後一張 -->
              <li class="item1">
                <div>
                  <a href="">
                    <p class="items1-desc">
                      <span>Xiaomi 迷你無線風扇</span>
                      <span class="items1-price"> 745元</span>
                    </p>
                    
                    <img
                      class="items1-img"
                      src="@/assets/images/pms_1657075706.8183381.png"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a href="">
                    <p class="items1-desc">
                      <span>米家 LED 智慧燈泡 Lite 彩光版</span>
                      <span class="items1-price"> 395元</span>
                    </p>
                    <img
                      class="items1-img"
                      src="@/assets/images/pms_1584677598.85521573.png"
                      alt=""
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="video">
        <h2 class="title">
          影片
          <a href="#" class="more">
            查看更多
            <i class="el-icon-arrow-right"></i>
          </a>
          <div class="video-box">
            <ul>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </h2>
      </div>

      <!-- video start -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFirst",
  data() {
    return {
      item: [
        {
          itemUrl: require("@/assets/images/pms_1670399442.54691094.png"),
          itemName: "Xiaomi 30型電競曲面螢幕",
          itemPrice: "NT$ 8955",
        },
        {
          itemUrl: require("@/assets/images/pms_1665460092.32378525.png"),
          itemName: "Xiaomi 智慧顯示器 Q2 65 型",
          itemPrice: "NT$ 35999",
        },
        {
          itemUrl: require("@/assets/images/pms_1656059374.69853800.png"),
          itemName: "Xiaomi 智慧顯示器 A2 55型",
          itemPrice: "NT$ 19999",
        },
        {
          itemUrl: require("@/assets/images/pms_1621479160.6511830.png"),
          itemName: "小米27型電腦螢幕",
          itemPrice: "NT$5295",
        },
      ],
      item_sec: [
        {
          itemUrl: require("@/assets/images/pms_1626346503.08587000.png"),
          itemName: "小米34型曲面螢幕",
          itemPrice: "NT$ 12995",
        },
        {
          itemUrl: require("@/assets/images/pms_1626346767.79016104.png"),
          itemName: "小米23.8型電腦螢幕1C",
          itemPrice: "NT$ 4295",
        },
        {
          itemUrl: require("@/assets/images/pms_1642059129.29245338.png"),
          itemName: "Xiaomi 27型 2K 電競螢幕",
          itemPrice: "NT$ 11995",
        },
        {
          itemUrl: require("@/assets/images/pms_1656064284.60812631.png"),
          itemName: "Xiaomi Book S 12.4",
          itemPrice: "NT$ 20995",
        },
      ],
      appliances: [
        {
          appliancesUrl: require("@/assets/images/pms_1661156019.98216795.png"),
          appliancesName: "Xiaomi 無線洗地機 W10 Pro",
          appliancesPrice: "NT$ 15995",
        },
        {
          appliancesUrl: require("@/assets/images/pms_1664274071.83322732.png"),
          appliancesName: "Xiaomi 掃拖機器人 S10",
          appliancesPrice: "NT$ 7995",
        },
        {
          appliancesUrl: require("@/assets/images/pms_1656657594.61783139.png"),
          appliancesName: "Xiaomi 超輕量無線吸塵器",
          appliancesPrice: "NT$ 8995",
        },
        {
          appliancesUrl: require("@/assets/images/pms_1615866579.26555075.png"),
          appliancesName: "米家無線吸塵器 G9",
          appliancesPrice: "NT$ 5495",
        },
      ],
      appliances_sec: [
        {
          appliancesUrl: require("@/assets/images/pms_1650272106.17988049.png"),
          appliancesName: "Xiaomi智慧直流變頻電風扇 2 Pro",
          appliancesPrice: "NT$ 2995",
        },
        {
          appliancesUrl: require("@/assets/images/pms_1577167989.67723522.png"),
          appliancesName: "米家空氣淨化器濾芯 除甲醛增強版 S1",
          appliancesPrice: "NT$ 795",
        },
        {
          appliancesUrl: require("@/assets/images/pms_1651198060.64381173.png"),
          appliancesName: "Xiaomi 智慧無扇葉淨化風扇",
          appliancesPrice: "NT$ 7995",
        },
      ],
    };
  },
};
</script>

<style>
/* *{
    outline: solid #f00 1px !important;
    background: #000 !important;
    color: #fff !important;
} */
.wrap {
  width: 100%;
  /* background-color: pink; */
  background-color: #f5f5f5;
  padding: 4px 0 12px;
}
.home-banner-box {
  width: 100%;
  height: 120px;
  background-color: red;
  margin: 22px 0px;
}
.title {
  color: #333;
  font-size: 22px;
  font-weight: 200;
  text-align: left;
  line-height: 58px;
  /* margin-top: 20px; */
}
.more {
  float: right;
  color: #424242;
  font-size: 16px;
  transition: all 0.4s;
}
.more > i {
  display: inline-block;
  width: 20px;
  height: 22px;
  background-color: #b0b0b0;
  border-radius: 50%;
  text-align: center;
  line-height: 22px;
  color: #fff;
  font-size: 12px;
  transition: all 0.4s;
}
.more:hover {
  color: #ff6700;
}
.more:hover > i {
  background-color: #ff6700;
}
.phone-box {
  width: 100%;
  height: 614px;
  /* background-color: skyblue; */
}
.phone-box-main {
  width: 1240px;
  height: 614px;
  /* background-color: #FF6700; */
}
.items {
  float: left;
  width: 234px;
  height: 299px;
  background-color: #fff;
  margin-left: 14px;
  margin-bottom: 14px;
  transition: all 0.2s linear;
}
.items:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.items > a {
  display: block;
  /* padding-top: 8px; */
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #212121;
}
.img-goods {
  width: 160px;
  margin-top: 20px;
}
.items > p {
  color: #ff6700;
}

#del {
  color: #ff6700;
}

.item1 {
  float: left;
  width: 234px;
  height: 300px;
  /* background-color: #FF6700; */
  margin-left: 14px;
  margin-bottom: 14px;
}
.item1 div:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.item1 div {
  width: 234px;
  height: 134px;
  /* background-color: aqua; */
  background-color: #fff;
  margin-bottom: 14px;
  transition: all 0.2s linear;
}
.items1-desc {
  float: left;
  width: 94px;
  height: 63px;
  margin-left: 30px;
  margin-top: 40px;
  font-size: 14px;
  text-align: left;
}
.items1-img {
  float: left;
  margin-top: 25px;
  margin-left: 10px;
  width: 80px;
  height: 80px;
}
.items1-price {
  color: #ff6700;
  font-size: 12px;
}
.item1 div:nth-child(2) {
  margin-top: 31.5px;
}
/* main end */
</style>