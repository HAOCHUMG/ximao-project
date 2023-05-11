import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const actions = {
    //
};
const state = {
  price: 875,
  email:'',
  pwd:'',
  repwd:'',
  product: [
    {
      id: "001",
      pName: "小米電水壺 2 白色",
      price: "875",
      imgUrl: require("@/assets/images/pms_1659697005.56169523.png"),
      imgUrlSec: require("@/assets/images/pms_1659697005.56169523.png"),
    },
    {
      id: "002",
      pName: "小米延長線 套裝(任選2個)",
      price: "695",
      imgUrl: require("@/assets/images/pms_1656658475.90537032.png"),
      imgUrlSec: require("@/assets/images/pms_1656658475.90537032.png"),
    },
    {
      id: "003",
      pName: "小米智慧投影機 2 白色",
      price: "14995",
      imgUrl: require("@/assets/images/pms_1630296437.53798138.png"),
      imgUrlSec: require("@/assets/images/pms_1630296437.53798138.png"),
    },
    {
      id: "004",
      pName: "小米戶外藍芽喇叭(16W) 紅色",
      price: "1195",
      imgUrl: require(`@/assets/images/pms_1656064170.12135221.jpg`),
      imgUrlSec: require("@/assets/images/pms_1656064170.12135221.jpg"),
    },
    {
      id: "005",
      pName: "小米多功能運動休閒胸包 黑色",
      price: "495",
      imgUrl: require("@/assets/images/pms_1627893234.12551662.png"),
      imgUrlSec: require("@/assets/images/pms_1627893234.12551662.png"),
    },
    {
      id: "006",
      pName: "小米電動打氣機 1S 黑色",
      price: "1095",
      imgUrl: require("@/assets/images/pms_1633675764.75855247.png"),
      imgUrlSec: require("@/assets/images/pms_1633675764.75855247.png"),
    },
    {
      id: "007",
      pName: "小米智慧氣炸鍋 3.5L 白色",
      price: "1995",
      imgUrl: require("@/assets/images/pms_1633751777.51673296.png"),
      imgUrlSec: require("@/assets/images/pms_1633751777.51673296.png"),
    },
    {
      id: "008",
      pName: "小米門窗感應器 2 白色",
      price: "245",
      imgUrl: require("@/assets/images/pms_1630294515.7418119.png"),
      imgUrlSec: require("@/assets/images/pms_1630294515.7418119.png"),
    },
    {
      id: "009",
      pName: "小米 27 型電腦螢幕 黑色",
      price: "4595",
      imgUrl: require("@/assets/images/pms_1621479160.6511830.png"),
      imgUrlSec: require("@/assets/images/pms_1621479160.6511830.png"),
    },
    {
      id: "010",
      pName: "小米智慧顯示器 65型",
      price: "16999",
      imgUrl: require("@/assets/images/pms_1613445002.13879491.png"),
      imgUrlSec: require("@/assets/images/pms_1613445002.13879491.png"),
    },
  ],
};
const getters = {
    email:(state) => state.email,
    pwd:(state) =>state.pwd,
    repwd:(state) =>state.repwd
}

const mutations = {
    setEmail(state,newEmail){
        state.email = newEmail
    },
    setPwd(state,newPwd){
        state.pwd = newPwd
    },
    setRepwd(state,newRepwd){
        state.repwd = newRepwd
    },
  };
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
