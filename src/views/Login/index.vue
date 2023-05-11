<template>
  <div class="main">
    <div class="banner">
      <img class="img" src="@/assets/images/banner.png" alt="" />
    </div>
    <!-- header -->
    <div style="width: 100%; height: 950px; background-color: black">
      <div class="header">
        <div class="header-left">
          <img class="img1" src="@/assets/images/logo.png" alt="" />
          <span>小米帳號</span>
        </div>
        <div class="header-right">
          <a href="">用戶協議</a>
          <a href="">隱私政策</a>
          <a href="">幫助中心</a>
          <span>|</span>
          <a href="">中文(繁中)<i class="el-icon-caret-bottom"></i></a>
        </div>
      </div>
      <!--login and register -->
      <div class="section">
        <div class="box">
          <div class="qrcode"></div>
          <div class="box-header">
            <a href="#" :class="{ orange: true }">登入</a>
            <router-link target="" to="/register">註冊</router-link>
            <!-- <a href="#">註冊</a> -->
          </div>
          <!-- 帳號密碼 -->
          <div class="middlebox">
            <div class="middlebox-email">
              <input type="text" required v-model="email" />
              <label>信箱/手機號碼/小米ID</label>
            </div>
            <div class="middlebox-email">
              <input ref="input" type="password" v-model="pwd" required />
              <font-awesome-icon
                v-show="eyeclose"
                class="eye"
                @click="eyeoopen"
                icon="fa-solid fa-eye-slash"
              />
              <font-awesome-icon
                v-show="eyeopen"
                class="eye"
                @click="eyecclose"
                icon="fa-solid fa-eye"
              />
              <label>密碼</label>
            </div>
            <button @click="verify">登入</button>
            <button id="google">
              <img src="@/assets/images/google.png" alt="" />Google登入
            </button>
            <div class="forget">
              <a href="#">忘記密碼?</a>
            </div>
          </div>
          <!-- 帳號footer -->
          <div class="registerfooter">
            <div>其他登入方式</div>
            <div>
              <a href="#"><img src="@/assets/images/facebook.jpg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div>
          <span
            >小米公司版權所有-京ICP備10046444-京公網安備11010802020134號-京ICP證110507號</span
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "@/assets/css/flexLogin.css";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      pwd: "",
      eyeclose: true,
      eyeopen: false,
    };
  },
  methods: {
    verify() {
      if(this.email == JSON.parse(localStorage.getItem('email'))&&this.pwd == JSON.parse(localStorage.getItem('pwd'))){
          this.$message('登錄成功')
          this.$router.push('/')
      }else{
        this.$message('失敗')
      }
    },
    // 密碼查看
    eyeoopen() {
      if (this.$refs.input.type == "password") {
        this.$refs.input.type = "text";
        this.eyeclose = false;
        this.eyeopen = true;
      } else {
        if (this.$refs.input.type == "text") {
          this.$refs.input.type = "password";
          this.eyeclose = true;
          this.eyeopen = false;
        }
      }
    },
    //密碼隱藏
    eyecclose() {
      if (this.$refs.input.type == "password") {
        this.$refs.input.type = "text";
        this.eyeclose = false;
        this.eyeopen = true;
      } else {
        if (this.$refs.input.type == "text") {
          this.$refs.input.type = "password";
          this.eyeclose = true;
          this.eyeopen = false;
        }
      }
    },
    // 登入驗證
  },
};
</script>

<style scoped>
/* *{
    outline: solid #f00 1px !important;
    background: #000 !important;
    color: #fff !important;
} */
.orange {
  border-bottom: 5px solid #ff5c00;
  border-radius: 1%;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.container-one {
  width: auto;
  height: auto;
  background-color: aqua;
  display: block;
}
.slide-banner {
  display: block;
  width: 375px;
  height: 100%;
  background-color: pink;
  background-position: 50%;
  background-size: cover;
}
.img {
  float: left;
  width: 375px;
  height: 100%;
  overflow: hidden;
}
.container-two {
  width: 100%;
  height: 100px;
  background-color: black;
}
/* ========================= */
/* width: 100%; */
/* height: 100%; */
/* background-color: #fff */
/* display: flex; */
/* justify-content: space-between; */
.banner {
  width: 375px;
  @media screen and (min-width: 1000px) /* background-color: blue; */;
}
.img {
  display: block;
  width: 375px;
  height: 100%;
  @media screen and (min-width: 1000px);
}
.img1 {
  margin-left: 10px;
  width: 40px;
  height: 40px;
}
.header {
  width: 100%;
  height: 80px;
  /* background-color: orange; */
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  padding: 20px;
  display: flex;
  align-items: center;
}
.header-left span {
  color: #333;
  font-size: 26px;
  font-weight: 500;
  margin-left: 10px;
  font-family: Arial;
}
.header-right a {
  margin: 0 5px;
  color: #838383;
  font-size: 14px;
}
.header-right a:nth-child(5) {
  margin-left: 10px;
}
.header-right span {
  margin-left: 10px;
}
.header-right a:hover {
  color: #ff6900;
}
/* login and register */
.section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 787px;
  /* background-color: yellowgreen; */
  background-color: #fff;
}
.box {
  position: relative;
  width: 360px;
  height: 612.703px;
  padding: 40px 45px;
  /* background-color: #ff6900; */
}
.qrcode {
  position: absolute;
  border-top: 26px solid #ff5c00;
  border-left: 26px solid transparent;
  border-right: 26px solid #ff5c00;
  border-bottom: 26px solid transparent;
  border-radius: 10%;
  /* z-index: 999; */
  top: 0px;
  right: 0px;
}
.box-header {
  width: 360px;
  height: 41px;
  /* background-color: red; */
}
.box-header a {
  height: 41px;
  line-height: 41px;
  float: left;
  color: #333;
  font-weight: 500;
  font-size: 22px;
  font-family: MiSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  cursor: pointer;
}
.box-header a:nth-child(2) {
  margin-left: 10px;
}
.middlebox {
  padding: 20px 2px;
  width: 356px;
  height: 330px;
  /* background-color:skyblue; */
}
.middlebox-email {
  position: relative;
}
.middlebox-email .eye {
  position: absolute;
  top: 49%;
  right: 10px;
}
.middlebox input {
  position: relative;
  padding: 30px 20px 10px 20px;
  width: 314px;
  height: 20px;
  border: none;
  background-color: rgb(246, 243, 243);
  margin-top: 15px;
  border-radius: 5px;
}
.middlebox-email label {
  position: absolute;
  text-align: left;
  width: 100%;
  top: 37px;
  left: 10px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 17px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  pointer-events: none;
  transition: all 0.3s;
}
.middlebox-email input:focus ~ label {
  transition: all 0.3s;
  transform: translateY(-50%);
  font-size: 12px;
}
.middlebox-email input:focus {
  outline: 0;
  transition: all 0.6s;
  border: 1px solid #ff6900;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
}
.middlebox-email input:valid ~ label {
  transition: all 0.3s;
  transform: translateY(-50%);
  font-size: 12px;
}
#google {
  position: relative;
  width: 356px;
  height: 60px;
  background-color: #fff;
  color: #333;
  line-height: 30px;
  border: none;
  box-shadow: 0 1px 2px 1px #ddd;
  cursor: pointer;
}
#google img {
  left: 24px;
  top: 5px;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #fff;
  color: #333;
}
.forget {
  margin-top: 20px;
  float: left;
}
.forget a {
  color: #ff6900;
  font-size: 17px;
}
.middlebox .notice {
  float: left;
  font-size: 16px;
}
.agree {
  display: inline-block;
  float: left;
}
.agree input {
  width: 20px;
  float: left;
  /* margin-right:50px; */
}
.agree label {
  line-height: 50px;
  height: 50px;
  font-size: 14px;
  color: #aaaaaa;
}
.middlebox button {
  width: 356px;
  height: 60px;
  /* padding: 0px 20px; */
  margin-top: 20px;
  margin-bottom: -10px;
  background: #f7a474;
  font-size: 18px;
  color: #fff;
  border: none;
  border-radius: 5px;
}
.cellphoneresigter {
  width: 333px;
  height: 36.7px;
}
.cellphoneresigter a {
  float: right;
  font-size: 17px;
  color: #ff5c00;
}
.registerfooter {
  width: 360px;
  height: 96px;
  /* background-color: aqua; */
}
.registerfooter div {
  height: 40px;
  line-height: 40px;
  color: #aaaaaa;
  font-size: 17px;
}
.registerfooter :last-child {
  width: 360px;
  height: 52px;
}
.registerfooter :last-child a > img {
  width: 70px;
  height: 70px;
  margin: 0px 10px;
  cursor: pointer;
}
.footer {
  position: relative;
  width: 100%;
  height: 83px;
  background-color: #faf7f7;
  text-align: center;
}
.footer span {
  /* position: absolute;
      top: 40px;
      left: 250px; */
  color: #999999;
  padding: 20px 0;
}
</style>

