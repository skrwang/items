<template>
    <div class="box">
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
                <a href="javascript:" class="massBtn">
                    <i></i>
                    大众评审
                </a>
                <a href="javascript:" class="mediaBtn">
                    <i></i>
                    媒体评审
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    .box {
        width: 100%;
        height: 100%;
        background-color: rgb(82,202,236);
    }
    .box .content {
        width: 80%;
        margin:0 auto;
        /* background-color: #fff; */
        color: rgb(228, 220, 211);
        padding-top:5rem;
    }
    .box .content h1 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 42px;
        letter-spacing:3px;
        font-weight: 500;
    }
    .box .content p {
        margin-bottom: 35px;
        font-size: 1.2rem;
        letter-spacing: 1.5px;
    }
    .box .content .btn {
        width: 100%;
        height: 50px;
        margin: 0 auto;
    }
    .box .content .btn a {
        display: inline-block;
        width: 100%;
        height: 55px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: rgb(228,220,211);
        line-height: 55px;
        color: rgb(82,202,236);
        // font-family: "黑体";
        font-weight: 700;
        letter-spacing: 2px;
    }
</style>

