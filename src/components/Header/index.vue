/<template>
  <div class="topbar">
    <div class="container">
      <ul class="container-left">
        <li><a herf="#">MIUI</a><span>|</span></li>
        <li><a herf="#">下載小米商城</a><span>|</span></li>
        <li><a herf="#">小米積分中心</a><span>|</span></li>
        <li><a herf="#">登陸送活動</a><span>|</span></li>
        <li><a herf="#">小米團購</a><span>|</span></li>
      </ul>
      <ul v-show="!$store.state.token" class="container-right">
        <li>
          <router-link target="_blank" to="/login">登入</router-link>
          <span>|</span>
        </li>
        <li>
          <router-link target="_blank" to="/register">註冊</router-link>
          <span>|</span>
        </li>
        <li class="cart">
          <i class="el-icon-shopping-cart-1"></i><a href="#">購物車(0)</a>
          <div class="cart-list">
            <i>購物車中還沒有商品,趕緊添加吧</i>
          </div>
        </li>
      </ul>
      <!-- ============================登入後的ul============================= -->
      <ul v-show="$store.state.token" class="container-right">
        <li class="myNotification">
          <router-link to="" class="myNotification-sec">{{$store.state.token}}</router-link>
          <div class="email-list">
            <ul>
              <li><a class="change-color" href="">個人中心</a></li>
              <li><a class="change-color" href="">小米帳號</a></li>
              <li><a class="change-color" href="">我的評價</a></li>
              <li @click="loginOut"><a class="change-color" href="">退出登入</a></li>
            </ul>
          </div>
        </li>
        <!-- <span class="li-span">|</span> -->

        <li>
          <router-link to="">收件匣</router-link>
          <span>|</span>
        </li>
        <li>
          <router-link to="">我的訂單</router-link>
          <span>|</span>
        </li>
        <li class="cart">
          <i class="el-icon-shopping-cart-1"></i><a href="#">購物車(0)</a>
          <div class="cart-list">
            <i>購物車中還沒有商品,趕緊添加吧</i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods:{
    loginOut(){
      localStorage.removeItem('token')
      this.$route.push({name:'/'})
    }
  }
};
</script>

<style>
.email-list li {
  width: 160px;
  height: 30px;
  float: left;
  text-align: left;
  margin-left: 20px;
}
.email-list li:hover > .change-color {
  color:#ff6700
}

.email-list li a {
  color: #424242;
}
.container-right .myNotification-sec {
  margin-left: 20px;
  color: #b0b0b0;
  font-size: 12px;
  font-weight: 400;
}
.container-right .myNotification:hover > .myNotification-sec {
  color: #ff6700;
}
.container-right .li-span {
  margin-left: 10px;
  color: #424242;
}
.container-right .myNotification:hover > .email-list {
  /* display: block; */
  height: 130px;
}
.myNotification {
  text-align: center;
  padding-right: 30px;
  /* align-content: center;。 */
}
.myNotification:hover {
  background-color: #fff;
}
.email-list {
  /* display: none; */
  overflow: hidden;
  transition: height 0.3s;
  box-shadow: 0 3px 4px rgba(0,0,0,.18);
  position: absolute;
  width: 160px;
  height: 0px;
  padding: 0px 0px 0px 0px;
  background-color: #fff;
  top: 40px;
  left: 0px;
  z-index: 9999;
}
.topbar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #212121;
  font-size: 12px;
}
.container {
  width: 1226px;
  margin: 0 auto;
  /* background-color: #212121; */
}
.container-left {
  float: left;
}
.container-left li a {
  cursor: pointer;
}
.container-right {
  position: relative;
  float: right;
}

.topbar li {
  float: left;
}
.topbar a {
  color: #b0b0b0;
}

.topbar a:hover {
  color: #fff;
}
.topbar span {
  margin: 0 20px;
  color: #424242;
}
a {
  text-decoration: none;
  background-color: transparent;
}
.cart i {
  color: #b0b0b0;
  margin-right: 10px;
}
.cart {
  position: relative;
  width: 120px;
  height: 40px;
  color: #424242;
}
.cart:hover {
  background-color: #fff;
}
.cart:hover > a {
  color: #ff6700;
  cursor: pointer;
}
.cart-list {
  /* display: none; */
  position: absolute;
  right: 0px;
  height: 0px;
  top: 40px;
  line-height: 100px;
  overflow: hidden;
  width: 316px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  z-index: 9999;
}
.cart:hover > .cart-list {
  height: 100px;
}
</style>