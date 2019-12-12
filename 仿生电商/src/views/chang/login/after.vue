<template>
    <div class="after">
        <img src="../../../../img/c26ea87a-f364-4b52-97d0-dce9851d7761.png"/>
        <van-button type="primary" id="login" size="large" @click="login">手机号登录</van-button>
        <van-button id="register" size="large" @click="register">手机号快速注册</van-button>
        <div class="fenxiang">
            <div class="xian">
                <div class="line"></div>
                <div class="huo">其他方式登录</div>
                <div class="line"></div>
            </div>
            <div class="tubiao">
                <a href="https://mail.163.com/">
                    <span class="tu" style="background-image: url(//edu-image.nosdn.127.net/8d0ce296-9f92-4f3b-b6fe-8d727a323064.png?imageView&quality=100)"></span>
                    <p>邮箱</p>
                </a>
                <a href="https://weibo.com/">
                    <span class="tu" style="background-image: url(//edu-image.nosdn.127.net/15c811d3-6a3d-459b-b100-3f4eb776b2c2.png?imageView&quality=100)"></span>
                    <p>微博</p>
                </a>
                <a href="https://im.qq.com/">
                    <span class="tu" style="background-image: url(//edu-image.nosdn.127.net/9bd019b4-f657-4674-8550-212d47128d60.png?imageView&quality=100)"></span>
                    <p>QQ</p>
                </a>
                <a href="http://www.renren.com/">
                    <span class="tu" style="background-image: url(//edu-image.nosdn.127.net/84c18e49-200b-440d-a15c-db363e4b132d.png?imageView&quality=100)"></span>
                    <p>人人</p>
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>

.after{
    z-index: 1000;
     background:url('../../../../img/85c3396e-3851-4c1a-ad4b-d1e062ad53f2.png') repeat-y center top;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    padding: 2.17rem 5% 0;
    background-size: 100% 100%;
    bottom: 0;
    top: 0;
}
img{
    height: 90px;
    width: 90px;
    max-width: 57%;
    margin: 120px 40% 0
}
#login{
    /* font-size: 14px; */
    color: aliceblue;
    margin-top:20px;
    background: #2CC17B
}
#register{
    color: #2CC17B;
    margin-top:20px;
    border:#2CC17B solid 1px;
    background: transparent
}
.fenxiang{
    height: 160px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}
.xian{
    display: flex;
    width: 80%;
    margin: 0 auto 20px;
}
.line{
    height: 1px;
    background: #A4A9B2;
    -webkit-box-flex: 1;
    flex: 1;
    margin-top: 8px;
}
.huo{
    color: #A4A9B2;
    padding: 0 20px;
    font-size: 13px;
}
.tubiao{
    display: flex;
    width: 87%;
    margin: 0 auto;
}
.tubiao a{
    flex: 1;
    text-align: center;
}
.tubiao span{
    display: inline-block;
    background-image:url('../../../../img/ren.png');
    background-size: 100% 100%;
    height: 42px;
    width: 42px;
    margin-bottom: 5px;
    text-align: center
}
.tubiao p{
    margin: 0;
    padding: 0;
    color: #3C4A55;
    font-size: 12px;
}
</style>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        register(){
            this.$router.push({
                name:'register'
            })
        },
        login(){
            this.$router.push({
                name:'login'
            })
        }
    }
}
</script>