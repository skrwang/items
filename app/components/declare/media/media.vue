<template>
    <div class="media">
        <div class="top">
            <i class="iconfont icon-buoumaotubiao20"></i>
        </div>
        <div class="content">
            <div class="context">
                <h4>投票验证</h4>
                <div class="aisle">
                    <h1>媒 体 评 审</h1>
                    <h1>投 票 通 道</h1>
                    <div class="inp">
                        <p>
                            <input type="text" class="phone">
                            <label for="">请输入您的手机号获得邀请码</label>
                        </p>
                        <div class="code">
                            <p>
                                <input type="text" class="Invitation-code">
                            </p>
                            <p>
                                <button class="codeBtn">
                                    <img src="../../../assets/Invitation-code.png" alt="">
                                    获取邀请码
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    input,button {
        outline: none;
    }
    .media {
        width: 100%;
        height: 100%;
        // background-color: rgb(82,202,236);
        position: relative;
    }
    .media .top {
        width: 80%;
        margin:0 auto;
        height: 8rem;
        position: relative;
        .icon-buoumaotubiao20 {
            position: absolute;
            right: 10px;
            bottom: 10px;
            font-size: 3rem;
            color: #fff;
        }
    }
    .media .content {
        width: 80%;
        margin:0 auto;
        border: 3px solid #fff;
        .context {
            width: 100%;
            color: rgb(228, 220, 211);
            h4 {
                font-weight: 400;
                height: 4rem;
                line-height: 4rem;
                font-size: 1.5rem;
                text-align: center;
                border-bottom: 1px solid rgb(228,220,211);
            }
            .aisle {
                width: 80%;
                margin:0 auto;
                margin-top: 2.5rem;
                h1 {
                    text-align: center;
                    font-weight: 500;
                    font-size: 2rem;
                }
                .inp {
                    margin-top: 3rem;
                    p{
                        position: relative;
                        label {
                            position: absolute;
                            width: 100%;
                            height: 4rem;
                            line-height: 4rem;
                            color: rgb(228,220,211);
                            left: 0;
                            top: 0;
                            font-size: 1.15rem;
                            letter-spacing: .27rem;
                        }
                    }
                    .phone {
                        background-color: transparent;
                        border: 0;
                        border-bottom: 1px solid rgb(228,220,211);
                        border-top: 1px solid rgb(228,220,211);
                        width: 100%;
                        height: 4rem;
                        line-height: 4rem;
                        position: relative;
                        z-index: 555;
                    }
                    .code {
                        margin-top: 5rem;
                        p {
                            margin-bottom: 1rem;
                            .Invitation-code {
                                width: 100%;
                                height: 4rem;
                                line-height: 4rem;
                                background-color: transparent;
                                border: 1px solid rgb(228,220,211);
                            }
                            .codeBtn {
                                margin-bottom: 3rem;
                                width: 100%;
                                height: 4rem;
                                line-height: 4rem;
                                border: 0;
                                background-color: rgb(228,220,211);
                                color: rgb(82,202,236);
                                font-size: 1.2rem;
                                img {
                                    width: 4.5rem;
                                    vertical-align: middle;
                                    margin-right: .5rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

