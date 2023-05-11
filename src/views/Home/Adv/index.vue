<template>
<div class="dav">
        <div class="container">
            <div class="adv-aside">
                <ul>
                    <li class="row col"><a href="#"><i class="el-icon-truck">
                                <p>米粉卡</p>
                            </i></a></li>
                    <li class="row col"><a href="#"><i class="el-icon-truck">
                                <p>米粉卡</p>
                            </i></a></li>
                    <li class="row"><a href="#"><i class="el-icon-truck">
                                <p>米粉卡</p>
                            </i></a></li>
                    <li class="col"><a href="#"><i class="el-icon-truck">
                                <p>米粉卡</p>
                            </i></a></li>
                    <li class="col"><a href="#"><i class="el-icon-truck">
                                <p>米粉卡</p>
                            </i></a></li>
                    <li><a href="#"><i class="el-icon-truck">
                                <p>米粉卡</p>
                            </i></a></li>
                </ul>
            </div>
            <div class="adv-img">
                <a href="">
                    <img src="@/assets/images/20230209-140732.jpg" alt="">
                </a>
            </div>
            <div class="adv-img">
                <a href="">
                    <img src="@/assets/images/20221009-175620.jpg" alt="">
                </a>
            </div>
            <div class="adv-img">
                <a href="">
                    <img src="@/assets/images/20220811-170352.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Adv'
};
</script>

<style>
.dav{
    width: 100%;
    height: 170px;
    background-color: #fff;
    margin:14px 0 26px
}
.adv-aside{
    float: left;
    width: 228px;
    height: 164px;
    padding: 3px;
    background-color: #5f5750;
    margin-top: 15px;
}
.adv-img{
    float: left;
    width: 316px;
    height: 170px;
    margin-left: 14.66px;
    transition: all .2s linear;
    margin-top: 15px;
}
.adv-img:hover{
    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
}
.adv-img img{
    width: 317px;
    height: 170px;
}
.adv-aside li {
    position: relative;
    float: left;
    width: 76px;
    height: 82px;
}
.adv-aside a {
    display: block;
    opacity: 0.7;
    color:#fff;
    font-size: 12px;
    transition: all .2s;
    
}
.adv-aside a:hover{
    opacity: 1;
}
.adv-aside i {
    font-size: 16px;
    margin-bottom: 4px;
    display: block;
    margin-top: 18px;
    
}
.row::after{
    position: absolute;
    bottom: 0;
    left: 6px;
    content: '';
    width: 64px;
    height: 1px;
    background-color: #665e57;
}
.col::before{
    position: absolute;
    content: '';
    right: 0px;
    top: 6px;
    width: 1px;
    height: 70px;
    background-color: #665e57;
}
</style>