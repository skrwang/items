<template>
    <div class="TheCurator">
        <header class="headers">
            <span class="headers_name html">策 展 人</span>
        </header>
        <div class="body">
            <div class="body_one_div html">
                <span>
                    感 谢 您 加 入 到 大 众 评 委 的 阵 营 中 : 大 众 评 委 的 选 票 将 占 到 权 重 的 15%
                </span>
            </div>
            <div class="body_two_div html">
                <span>
                    投 票 通 道 开 启 时 间：10 月 1 日 - 10 月 31 日
                </span>
            </div>
            <div class="body_two_div html">
                <span>
                    投 票 规 则: 每 天 可 获 得 两 次 投 票 机 会。
                </span>
            </div>
            <div class="body_juese">
                <ul class="html">
                    <li>
                        <!-- <p><img src="../../assets/cat.jpg" alt=""></p> -->
                        <span>麒 麟 : 共 生<br>之 城</span>
                        <p>李 贝 壳+孙 天 艺</p>
                        <button>给她投票</button>
                    </li>
                    <li>
                        <!-- <p><img src="../../assets/cat.jpg" alt=""></p> -->
                        <span>启 示 ： 另 类 未 来 的 召 唤</span>
                        <p>刘 倩 兮</p>
                        <button>给她投票</button>
                    </li>
                    <li>
                        <!-- <p><img src="../../assets/cat.jpg" alt=""></p> -->
                        <span>药 理 学 、 赛 博 格 与 非 物 质 劳 动</span>
                        <p>姚 梦 溪</p>
                        <button>给她投票</button>
                    </li>
                    <li>
                        <!-- <p><img src="../../assets/cat.jpg" alt=""></p> -->
                        <span>“ 近 未 来 ” 的 回 旋</span>
                        <p>王 慰 慰</p>
                        <button>给她投票</button>
                    </li>
                    <li>
                        <!-- <p><img src="../../assets/cat.jpg" alt=""></p> -->
                        <span>未 来 演 化</span>
                        <p>钱 颖</p>
                        <button>给她投票</button>
                    </li>
                    <li>
                        <!-- <p><img src="../../assets/cat.jpg" alt=""></p> -->
                        <span>撒 谎 的 索 菲 亚 和 嘲 讽 的 埃 里 克 莎</span>
                        <p>龙 晨 如</p>
                        <button>给她投票</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
        width: 85%;
        height: 100%;
        margin: 0 auto;
    }
    .headers{
        width: 100%;
        text-align: center;
        line-height: 360%;
        font-size: 165%;
    }
    .body{
        width: 100%;
        height: 100%;
    }
    .body_one_div{
        width: 100%;
        font-size: 111%;
    }
    .body_two_div{
        width: 100%;
        font-size: 111%;
        margin-top: 4.1%;
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
        width: 32.5%;
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

