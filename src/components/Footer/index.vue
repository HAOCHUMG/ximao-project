<template>
  <div class="footer">
        <div class="container">
            <div class="footer-server">
                    <a href="#">
                        <div class="aaa">
                            <strong class="bbb">免運費</strong>
                            <span class="ccc">全場滿NT$800</span>
                        </div>
                    </a>
                    <a href="#">
                        <div class="aaaa">
                            <strong class="bbb">黑貓宅急便 x GOGOX</strong>
                            <span class="ccc">服務升級,限時送達</span>
                        </div>
                    </a>
                    <a href="#">
                        <div class="aaaaa">
                            <strong class="bbb">團購採購通道</strong>
                            <span class="ccc">採購小米好禮專屬通道</span>
                        </div>
                    </a>
                    <a href="#">
                        <div class="aaaaa">
                            <strong class="bbb">免運費</strong>
                            <span class="ccc">全場滿NT$800</span>
                        </div>
                    </a>

                    <!-- <li><a href=""><i class="el-icon-grape"></i>預約維修服務</a></li>
                    <li><a href=""><i class="el-icon-grape"></i>預約維修服務</a></li>
                    <li><a href=""><i class="el-icon-grape"></i>預約維修服務</a></li>
                    <li><a href=""><i class="el-icon-grape"></i>預約維修服務</a></li>
                    <li><a href=""><i class="el-icon-grape"></i>預約維修服務</a></li> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
/* *{
    outline: solid #f00 1px !important;
    background: #000 !important;
    color: #fff !important;
} */
/* footer start*/
.footer{
    background-color: #fff;
}
.footer-server>a{
    display:block;
    /* background-color: pink; */
    text-align: center;
    width: 306.5px;
    height:42px;
    float: left;
}
.footer-server{
    margin-bottom: 10px;
}
.footer-server .aaa{
    width: 40px;
    height: 40px;
    margin-left: 70px;
    /* border: 1px solid red; */
    background-image: url(@/assets/images/footer-service-1.png);
    background-repeat: no-repeat;
    background-position:-4.6px -2.5px;
}
.footer-server .aaaa{
    width: 50px;
    height: 40px;
    margin-left: 70px;
    /* border: 1px solid red; */
    background-image: url(@/assets/images/footer-service-1.png);
    background-repeat: no-repeat;
    background-position:-10px -43px;
}

.footer-server .aaaa .bbb{
    width: 150px;
    padding-left: 30px;
}
.footer-server .aaaa .ccc{
    padding-left: 20px;
}
.footer-server .aaaaa{
    width: 50px;
    height: 40px;
    margin-left: 70px;
    /* border: 1px solid red; */
    background-image: url(@/assets/images/footer-service-1.png);
    background-repeat: no-repeat;
    background-position:-105px -38px;
}
.footer-server .aaaaa .bbb{
    width: 100px;
    margin-left: 40px;
}
.footer-server .aaaaa .ccc{
    width: 150px;
    margin-left: 40px;
}
.footer-server .bbb{
    font-size: 14px;
    margin-left: 25px;
    display: block;
    width: 98.39px;
    height: 21px;
}
.footer-server .ccc{
    font-size: 14px;
    margin-left: 25px;
    display: block;
    width: 150px;
    height: 19px;
    color:#b0b0b0;
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
    height: 70px;
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
/* footer end */

</style>