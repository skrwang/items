<template>
    <div class="box">
        <div class="head">
            <div></div>
            <p>"Future Humanity"</p>
            <p>"未来演化"</p>
        </div>
        <div class="character">
            <h1 class="year">2018</h1>
            <h1 class="fine">Hyundal&nbsp;Blue&nbsp;Prize</h1>
            <p class="title">未来演化”( Future Humanity) 是本届展览创作的灵感，结合现代汽车的Creative  Energy理念，意在激发和寻求人类与科技、文化以及我们自身相关的共同愿景和使命。通过本次大奖，在发现中国策展新力量的同时，激发出更多关注当下和未来社会发展的论题与大众共享。</p>
            <p class="title">
                本奖项分为“创意能量”( Creativity )和“创新未来”( Sustainability)两大奖项，专门授予那些具备多元化思维，能对中国当代社会现象和问题提出独到见解的创新型策展人才。
            </p>

        </div>
    </div>
</template>
<style scoped>
    .box{
        width: 100%;
        box-sizing: border-box;
    }
    .head{
        width: 80%;
        height: 13rem;
        background-color: #fff;
        margin: 0 auto;
        padding: 20% 0px;
    }
    .head p{
        color: rgb(82, 202, 236);
        text-align: center;
        font-size: 30px;
    }
    @media screen and (max-width: 320px){
        .head p {
            font-size: 20px;
        }
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
        padding-left: 30%;
    }
    .fine{
        width: 100%;
        color: #e4dcd3;
        font-weight: bold; 
        position: relative;
        padding-left: 30%;
    }
    .title{
        width: 100%;
        color: #e4dcd3;
        font-weight: bold;
        font-size: 15px;
        word-wrap: break-word; 
        word-break: normal; 
        letter-spacing:0.2rem;
        margin-bottom: 12px;
    }
</style>