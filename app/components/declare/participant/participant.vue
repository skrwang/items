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
                    img:"./app/assets/beike.png",
                    text:"麒麟 : 共生  之城",
                    name:"李贝壳+孙天艺",
                    btn:"给她投票"
                },
                {
                    img:"./app/assets/qianxi.png",
                    text:"启示：另类未来的召唤",
                    name:"刘倩兮",
                    btn:"给她投票"
                },
                {
                    img:"./app/assets/mengxi.png",
                    text:"药理学、赛博格与非物质劳动",
                    name:"姚 梦 溪",
                    btn:"给她投票"
                },
                {
                    img:"./app/assets/weiwei.png",
                    text:"“ 近未来 ” 的回旋",
                    name:"王慰慰",
                    btn:"给她投票"
                },
                {
                    img:"./app/assets/ying.png",
                    text:"未来演化",
                    name:"钱颖",
                    btn:"给她投票"
                },
                {
                    img:"./app/assets/xingru.png",
                    text:"撒谎的索菲亚和嘲讽的埃里克莎",
                    name:"龙晨如",
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
        outline: none;
    }
    i{font-weight: normal;}
    .html{color:rgb(236,221,210);}
    .TheCurator{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        font-family: "微软雅黑";
    }
    .headers{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding: 2rem 0;
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
            margin-bottom: 1rem;
        }
        .body_juese{
            width: 100%;
            height: 100%;
            ul {
                // width: 100%;
                overflow: hidden;
                li {
                    width:calc(100% / 3);
                    float: left;
                    position: relative;
                    box-sizing: border-box;
                    margin-bottom: 1rem;
                    height: 220px;
                    img {
                        width: 100%;
                        margin-bottom: 0.5rem;
                        margin-left: 1px;
                    }
                    span {
                        font-size: 1.1rem;
                        display: inline-block;
                    }
                    p {
                        font-size:.9rem;
                        margin-bottom: 1.4rem;
                    }
                    button {
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                    }
                }
                li:nth-child(1){
                    span {

                        padding-right: 17px;
                    }
                }
                li:nth-child(2){
                    span {
                        padding-right: 10px;
                    }
                }
            }
        }
    }
</style>

