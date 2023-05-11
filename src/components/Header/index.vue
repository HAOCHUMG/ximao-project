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
      <ul class="container-right">
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
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
};
</script>

<style>
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