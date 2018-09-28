<template>
    <div>
        <div class="box1" @touchstart.prevent="touchstartHandle" @touchmove="touchmoveHandle" @touchend="touchendHandle" v-show="ishow1">
            <div class="screen1">
            
            </div>
            <div class="character">
                <h1 class="year">2018</h1>
                <h1 class="fine">Hyundal&nbsp;Blue&nbsp;Prize</h1>
                <h1 class="Chinese">助力中国青年策展人的</h1>
                <h1 class="Chinese2" style="border-bottom:1px solid #e4dcd3;padding-bottom: 15px;">多领域艺术实践平台</h1> 
                <p class="Chinese2 title">入围作品线上投票</p>
                <p class="Chinese2 tit">正式开启</p>
            </div>
            <div class="logo">
                <i class="up"></i>
                <p class="tit topup">向上滑动</p>
            </div>
        </div>
        <footer v-show="ishow">
            <ul class="flexbox">
                <li v-for="item of tabNav" :class="{cur:$route.path.indexOf(item.url) != -1}">
                    <!-- 做跳转 -->
                    <router-link :to='item.url' class="app-item">
                        <i class="iconfont item-icon" :class="item.icon"></i>
                        <span class="name" >{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </footer>
        <router-view v-show="ishow"></router-view>   
    </div>
</template>

<script>
export default {
    data () {
        return {
            windowHeight:document.documentElement.clientHeight || document.body.clientHeight,
            startY:0,
            distanceY:0,
            ishow:false,
            ishow1:true,
            tabNav:[
              {
                title:'介绍',
                icon:"icon-jieshao",
                url:'/introduce'
              },
              {
                title:'评委',
                icon:"icon-renqun",
                url:'/jury'
              },
              {
                title:'评审',
                icon:"icon-navicon-tp",
                url:'/declare'
              }
            ],
        }
    },
    methods:{
            //信号量
            touchstartHandle(event) {
                if (event.touches.length > 1) {
                    return;
                }
                //记录开始值
                this.startY = event.touches[0].clientY;
            },
            touchmoveHandle(event) {
                //计算手指的移动距离
                this.distanceY = event.touches[0].clientY - this.startY;
                //判断如果是最上边的那一页和最下边的那一页均不作处理
                if (this.distanceY > 0) {
                    return;
                } else if (this.distanceY < 0) {
                    return;
                }
                if (this.distanceY > 0) {
                   return;
                } else if (this.distanceY < 0) {
                    return;
                }
            },
            touchendHandle(event) {
                if (this.distanceY > 0) {
                    console.log(5555)
                } else if (this.distanceY < 0) {
                    this.ishow=true;
                    this.ishow1=false;
                }
                //根据this.distanceY判断是否滑动成功
                if (this.distanceY < -this.windowHeight / 4) {
                    this.ishow=true;
                    this.ishow1=false;
                } else if (this.distanceY > this.windowHeight / 4) {
                    //手指向下滑动成功
                    console.log(11111,'成功');
                } else {

                }
            }
    }
}
</script>

<style lang="scss" scoped>
    .box1{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .screen1{
        width: 100%;
        height: 140px;
        position: relative;
        border-bottom: 1px solid #e1dcd3;
        border-radius: 50%;
    }
    .character{
        width: 80%;
        height: 237px;
        margin: 0 auto;
        margin-top: 45px;
    }
    .year{
        width: 100%;
        color: #e4dcd3;
        font-weight: bold;
        position: relative;
    }
    .fine{
        width: 100%;
        color: #e4dcd3;
        font-weight: bold; 
        position: relative;
        
    }
    .Chinese{
        width: 100%;
        color: #e4dcd3;
        font-weight: bold;
        white-space:nowrap;
        position: relative;
    }
    .Chinese2{
        width: 100%;
        color: #e4dcd3;
        font-weight: bold;
        white-space:nowrap;
        position: relative;
        letter-spacing:0.3rem;
    }
    .year{
        animation-name:year;
	    animation-duration:1s;
	    animation-timing-function:linear;
	    animation-delay:0s;
	    animation-iteration-count:1;
	    animation-direction:alternate;
	    animation-play-state:running;
	    animation-fill-mode: both;
    }
    .fine{
        animation-name:fine;
	    animation-duration:1s;
	    animation-timing-function:linear;
	    animation-delay:0s;
	    animation-iteration-count:1;
	    animation-direction:alternate;
	    animation-play-state:running;
	    animation-fill-mode: both;
    }
    .Chinese,.Chinese2{
        animation-name:Chinese;
	    animation-duration:1s;
	    animation-timing-function:linear;
	    animation-delay:0s;
	    animation-iteration-count:1;
	    animation-direction:alternate;
	    animation-play-state:running;
	    animation-fill-mode: both;
    }
    @keyframes year{
        0%{
            left: -150px;
        }
        100%{
            left: 0;
        }
    }
    @keyframes fine{
        0%{
            transform: scale(3)
        }
        100%{
            transform: scale(1)
        }
    }
    @keyframes Chinese{
        0%{
            top: 25rem;
        }
        100%{
            top: 0;
        }
    }
    .title{
        border: none;
        letter-spacing:0.8rem;
        font-size:25px;
    }
    .tit{
        width:100%;       
        text-align: center;
        margin: 0 auto;
        margin-top:10px; 
        font-size: 30px;
        letter-spacing:0.8rem;
    }
    @media screen and (max-width: 320px){
        h1,.title {
            font-size: 20px;
        }
    }
    .logo{
        width: 100%;
        height: 193px;
        position: relative;
        margin-top: 50px;
        -webkit-animation: logo 1.5s infinite;
        animation: logo 1.5s infinite;
        background:url(assets/01.png);
        background-size: 100% 100%;
    }
    .logo .up{
        position: absolute;
        top: 90px;
        left: 35%;
        width: 100px;
        height: 40px;
        background: url(assets/shang.png);
        background-size: 100% 100%;
    }
    .topup{
        position: absolute;
        bottom: 20px;
        font-size: 25px;
        color: #e4dcd3;
        font-weight: bold;
    }
    @keyframes logo{
        0% {
            transform: translate(0, 30%);
        }
        50% {
            transform: translate(0, 0%);
        }
        100% {
            transform: translate(0, 30%);
        }
    }
    footer {
        background: #fff;
        border-top: .1rem solid #d0d0d0;
        border-bottom: .1rem solid #d0d0d0;
        bottom: 0;
        height: 5.3rem;
        left: 0;
        padding: 0;
        position: fixed;
        width: 100%;
        z-index: 111;
        ul{
          display: flex;
          list-style: none;
          li{
            text-align: center;
            width: 33%;
            a{
              color: #666;
              text-decoration: none;
              i{
                font-size: 30px;
                display: block;
                height: 3.3rem;
                margin: 0 auto;
                width: 5.0rem;
                color: #666;
                line-height: 50px;
              }
              span{
                color: #555;
                display: block;
                text-align: center;
                font-size: 1.28rem;
              }
            }
          }
          li.cur{
            color: green;
            a{
              color: green;
              text-decoration: none;
              span{
                color:green;
              }
              i{
                font-size: 30px;
                display: block;
                height: 3.3rem;
                margin: 0 auto;
                width: 5.0rem;
                line-height: 50px;
                color: green; 
              }
            }

          }
        }
    }
</style>
