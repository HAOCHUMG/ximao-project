<template>
  <div class="footer-sec">
        <div class="container">
            <div class="footer-links">
                <ul>
                    <li>產品與配件</li>
                    <li><a href="">熱門商品分類</a></li>
                    <li><a href="">全部商品分類</a></li>
                    <li><a href="">官方翻新機</a></li>
                    <li><a href="">F 碼通道</a></li>
                    <li><a href="">保值換新</a></li>
                </ul>
                <ul>
                    <li>幫助中心</li>
                    <li><a href="">購物指南</a></li>
                    <li><a href="">付款幫助</a></li>
                    <li><a href="">PayPal 使用幫助</a></li>
                    <li><a href="">分期付款</a></li>
                    <li><a href="">常見 Q&A</a></li>
                    <li><a href="">線上填寫折讓單入口</a></li>
                    <li><a href="">退款資料補充</a></li>
                </ul>
                <ul>
                    <li>客戶支援</li>
                    <li><a href="">服務條款及細則</a></li>
                    <li><a href="">維修站地點</a></li>
                    <li><a href="">服務進度查詢</a></li>
                    <li><a href="">售後服務政策</a></li>
                    <li><a href="">退貨須知</a></li>
                    <li><a href="">配送規範</a></li>
                    <li><a href="">尊享服務</a></li>
                </ul>
                <ul>
                    <li>關於小米</li>
                    <li><a href="">瞭解小米</a></li>
                    <li><a href="">管理團隊</a></li>
                    <li><a href="">隱私條款</a></li>
                    <li><a href="">誠信規範​</a></li>
                    <li><a href="">投資者關係</a></li>
                    <li><a href="">信任中心</a></li>
                </ul>
                <ul>
                    <li>小米哪裡買</li>
                    <li><a href="">小米之家/小米專賣店</a></li>
                    <li><a href="">官方授權通路</a></li>
                    <li><a href="">聯絡我們</a></li>
                </ul>
                <div class="contact">
                    <p class="tel">02-77255376</p>
                    <p class="time">服務時間 09:00-18:00 含節假日</p>
                </div>
            </div>
        </div>
        <div class="footer-th">
        <div class="container">
            <p>
                © 2010 - 2023 Xiaomi 版權所有 旗下網站：    
                <a href=""> 小米商城</a>
                <a href=""> MIUI</a>
            </p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'Bottom'
};
</script>

<style>
.footer{
    background-color: #fff;
}
.footer-server{
    width: 100%;
    height: 25px;
    padding: 27px 0;
} 
.footer-server li{
    float: left;
    width: 19.8%;
}
.footer-server a{
    color:#616161;
    transition: all .2s;
}
.footer-server i{
    font-size: 27px;
    margin-right: 6px;
}
.footer-server a:hover{
    color:#ff6700
}
.footer-links{
    width: 100%;
    height: 172.5;
    padding:40px 0   
}
.footer-sec{
    background-color: #212121;
}
.footer-links{
    border-bottom: 1px solid #4b4b4b;
    width: 100%;
    height: 258px;
    margin-right:6px ;
}
.footer-links > ul{
    float: left;
    width: 180px;
    text-align: left;
}
.footer-links a{
    color:#b0b0b0
}
.footer-links a:hover {
    color: #ff6700;
}
.footer-links ul li{
   display: flex;
}
.footer-links li {
    color: #b0b0b0;
    font-size: 14px;
    margin-top: 10px;
}
.footer-links li:first-child{
    line-height: 1.25;
    margin:-1px 0 26px
}
.contact{
    font-family: 'Avenir Next Condensed',Arial,sans-serif;
    float: right;
    width: 251px;
    height: 111px;
    border-left: 1px solid #e0e0e0;
}
.contact .tel {
    font-size: 30px;
    font-weight: 600;
    margin: 0px 0px 5px;
    color:#ffffff
}
.contact .time{
    font-size: 12px;
    color: #b0b0b0;
    
}
.footer-th{
    background-color: #212121;
    text-align: left;
    width: 100%;
    height: 0px;
    padding-top: 35px;
    padding-bottom: 55px;
    
}
.footer-th p {
    text-align: left;
    color: #b0b0b0;
    font-size: 12px;
}
.footer-th a {
    color: #b0b0b0;
    font-size: 12px;
}
</style>