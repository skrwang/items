<template>
    <div class="box">
        <p class="tit">终 极 评 委</p>
        <ul>
            <li v-for="item of lis">
                <img :src="item.img">
                <div class="pl">
                    <b>{{item.name}}</b>
                    <span></span>
                    <p>{{item.jieshao}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lis:[
                {
                    img:'dist/logo.png',
                    name:'李正华',
                    jieshao:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
                },
                {
                    img:'dist/logo.png',
                    name:'李正华',
                    jieshao:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
                },
                {
                    img:'dist/logo.png',
                    name:'李正华',
                    jieshao:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
                },
                {
                    img:'dist/logo.png',
                    name:'李正华',
                    jieshao:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
                },
                {
                    img:'dist/logo.png',
                    name:'李正华',
                    jieshao:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
                },
                {
                    img:'dist/logo.png',
                    name:'李正华',
                    jieshao:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    .box{
        width: 100%;
        height: 100%;
        background-color: rgb(82,202,236);
        .tit{
            height: 150px;
            line-height: 150px;
            text-align: center;
            font-weight: 900;
            color: lightgray;
            font-size: 18px;
            color: rgb(219,218,212);
            margin: 0 auto;
        }
        ul{
            list-style: none;
            width: 80%;
            margin: 0 auto;
            overflow: hidden;
            li{
                font-size: 14px;
                float: left;
                width: calc(100% / 3);
                text-align: center;
                img{
                    width: 100%;
                    margin-left: 1px;
                }
                .pl{
                    color: rgb(174,214,221);
                    text-align: left;
                    padding: 10px;
                    box-sizing: border-box;
                    span{
                        margin-top: 5px;
                        margin-bottom: 15px;
                        width:60%;
                        height: 3px;
                        display:block;
                        background-color: rgb(174,214,221);
                    }
                }
            }
        }
    }
</style>

