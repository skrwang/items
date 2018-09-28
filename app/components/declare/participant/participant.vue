<template>
    <div class="TheCurator">
        <header class="headers">
            <h4 class="headers_name html">策 展 人</h4>
        </header>
        <div class="body">
            <p class="body_text">
                感 谢 您 加 入 到 大 众 评 委 的 阵 营 中 : 大 众 评 委 的 选 票 将 占 到 权 重 的 15%
            </p>
            <p class="body_text">
                投 票 通 道 开 启 时 间：10 月 1 日 - 10 月 31 日
            </p>
            <p class="body_text">
                投 票 规 则: 每 天 可 获 得 两 次 投 票 机 会。
            </p>
            <div class="body_juese">
                <ul class="html">
                    <li v-for="item of list"> 
                        <img :src="item.img" alt="">
                        <span>{{item.text}}</span>
                        <p>{{item.name}}</p>
                        <button>{{item.btn}}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    img:"../../../assets/beike.png",
                    text:"麒 麟 : 共 生 之 城",
                    name:"李 贝 壳+孙 天 艺",
                    btn:"给她投票"
                },
                {
                    img:"../../../assets/qianxi.png",
                    text:"启 示 ： 另 类 未 来 的 召 唤",
                    name:"刘 倩 兮",
                    btn:"给她投票"
                },
                {
                    img:"../../../assets/mengxi.png",
                    text:"药 理 学 、 赛 博 格 与 非 物 质 劳 动",
                    name:"姚 梦 溪",
                    btn:"给她投票"
                },
                {
                    img:"../../../assets/weiwei.png",
                    text:"“ 近 未 来 ” 的 回 旋",
                    name:"王 慰 慰",
                    btn:"给她投票"
                },
                {
                    img:"../../../assets/ying.png",
                    text:"未 来 演 化",
                    name:"钱 颖",
                    btn:"给她投票"
                },
                {
                    img:"../../../assets/xingru.png",
                    text:"撒 谎 的 索 菲 亚 和 嘲 讽 的 埃 里 克 莎",
                    name:"龙 晨 如",
                    btn:"给她投票"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    button{
        color: rgb(236,221,210);
        width: 100%;
        background: none;
        border: 1px solid rgb(236,221,210);
    }
    i{font-weight: normal;}
    img{width: 100%;height: 100%;}
    .html{color:rgb(236,221,210);}
    .TheCurator{
        width: 100%;
        margin: 0 auto;
        font-family: "微软雅黑";
    }
    .headers{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding: 3rem 0;
        font-size: 1.5rem;
        h4 {
            font-weight: 400;
        }
    }
    .body{
        width: 80%;
        margin: 0 auto;
        .body_text {
            font-size: 1rem;
            color: #fff;
            margin-bottom: 1.2rem;
        }
    }
    .body_juese{
        width: 100%;
        height: 100%;
    }
    .body_juese ul{
        width: 100%;
        height: 100%;
    }
    .body_juese ul li{
        width:cale(100 / 3);
        height: 205px;
        float: left;
        margin-left: 0.5%;
        margin-top: 5%;
        position: relative;
    }
    .body_juese ul li span{
        font-size: 91%;
    }
    .body_juese ul li p{
        font-size: 70%;
    }
    button{
        position: absolute;
        bottom: -2%;
        font-size: 70%;
        line-height: 220%;
    }
</style>

