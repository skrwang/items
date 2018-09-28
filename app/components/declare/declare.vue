<template>
    <div class="box">
        <router-view></router-view>
        <img src="../../assets/paopao.png" alt="" class="paopao">
        <div class="content">
            <h1>投票说明</h1>
            <p>
                2018 Hyundai Blue Prize 诚挚的邀请您加入本届赛事的评委阵营，您的一票或许将决定最终的大赛结果。
            </p>
            <p>
                投票时间：10月1日 - 10月31日
            </p>
            <p>
                投票分<b>大众投票</b>和<b>媒体投票</b>
            </p>
            <p>
                所有的线上网友均可为您喜欢的参展人投票，分值权重分15%。
            </p>
            <p>
                受邀的专业媒体投票通道，分值权重85%。
            </p>
            <div class="btn">
                <router-link class="massBtn" :to="list[0].url" >
                    <img src="../../assets/dazhong.png" alt="">
                    大众评审
                </router-link>
                <router-link class="mediaBtn" :to="list[1].url" >
                    <img src="../../assets/meiti.png" alt="">
                    媒体评审
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import media from './media/media'
import participant from './participant/participant'
export default {
  data(){
      return {
          list:[
              {
                url:"/declare/media"
              },
              {
                url:"/declare/participant"
              }
          ],
          isShow:true
      }
  },
  methods:{
      c(){
          this.isShow = !this.isShow;
      }
  }
}
</script>

<style lang="scss" scoped>
    .box {
        width: 100%;
        height: 100%;
        background-color: rgb(82,202,236);
        position: relative;
        .paopao {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
        }
    }
    .box .content {
        width: 80%;
        margin:0 auto;
        /* background-color: #fff; */
        color: rgb(228, 220, 211);
        padding-top:5rem;
    }
    .box .content {
        h1 {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 2.5rem;
            letter-spacing:3px;
            font-weight: 500;
        }
        p {
            margin-bottom: 2rem;
            font-size: 1.2rem;
            letter-spacing: 1.5px;
        }
         .btn {
            width: 100%;
            height: 50px;
            margin: 0 auto;
            a {
                display: inline-block;
                width: 100%;
                height: 4rem;
                text-align: center;
                margin-top:0.75rem;
                margin-bottom: 0.75rem;
                background-color: rgb(228,220,211);
                line-height: 4rem;
                color: rgb(82,202,236);
                // font-family: "黑体";
                font-weight:500;
                letter-spacing: 2px;
                font-size: 1.4rem;
                img {
                    width: 6.75rem;
                    vertical-align: middle;
                    margin-right: 15px;
                }
            }
        }
    } 
</style>

