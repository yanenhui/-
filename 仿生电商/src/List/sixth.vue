<template>
    <div class="sixth">
    <!-- <router-view></router-view> -->
        <div class="center">
            <div class="btnTop"  v-if="btnFlag"  @click="backTop()"><van-icon name="ascending" /></div>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img class="swiper-img" src="http://edu-image.nosdn.127.net/a7a667db609541968b5a8c6cf1a7c3af.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="swiper-img" src="http://edu-image.nosdn.127.net/ba1b78464fd44d00bfd249b3dbc41e4e.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="swiper-img" src="http://edu-image.nosdn.127.net/98573c1b-dbaa-4f80-8b9d-7227ad8f79d2.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="swiper-img" src="http://edu-image.nosdn.127.net/7302d2f6e94f438ca33663f67aeae933.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="swiper-img" src="http://edu-image.nosdn.127.net/98573c1b-dbaa-4f80-8b9d-7227ad8f79d2.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 小标签 -->
        <div class="bq">
            <van-tag round>设计软件</van-tag>
            <van-tag round>UI设计</van-tag>
            <van-tag round>工业设计</van-tag>
            <van-tag round>平面设计</van-tag>
            <van-tag round>视频后期</van-tag>
            <van-tag round>手机摄影</van-tag>
            <van-tag round>摄影后期</van-tag>
        </div>

        <div class="mw-divide"></div>

        <div class="list">
            <div class="xbt">
                <span class="xbt_l">编程语言精选</span>
                <div class="xbt_r">
                <span class="xr_txt" @click="gengDuo(6)">更多</span>
                <van-icon name="arrow" />
                </div>
            </div>
            <van-grid :border="false" :column-num="2">
                <van-grid-item  v-for="(item,index) in products" :key="index" :to="{name: 'Xqing',query:{id:item._id}}">
                    <van-image class="sp" :to="{name: 'Xqing',query:{id:item._id}}" :src="reg.test(item.coverImg)?item.coverImg:'http://api.cat-shop.penkuoer.com'+item.coverImg" />
                    <van-grid-item :text="item.descriptions" :to="{name: 'adetails'}"/>
                </van-grid-item>
            </van-grid>
        </div>

        <div class="list">
            <div class="xbt">
                <span class="xbt_l">编程语言精选</span>
                <div class="xbt_r">
                <span class="xr_txt" @click="gengDuo(6)">更多</span>
                <van-icon name="arrow" />
                </div>
            </div>
            <van-grid :border="false" :column-num="2">
                <van-grid-item  v-for="(item,index) in products" :key="index" :to="{name: 'Xqing',query:{id:item._id}}">
                    <van-image class="sp" :to="{name: 'Xqing',query:{id:item._id}}" :src="reg.test(item.coverImg)?item.coverImg:'http://api.cat-shop.penkuoer.com'+item.coverImg" />
                    <van-grid-item :text="item.descriptions" :to="{name: 'adetails'}"/>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
import { products } from '../services/movie'

export default {
    name: 'home',
    data(){
        return {
            active:2,
            products:[],
            reg: /http/,
            btnFlag:false
        }
    },

    async created() {
        const result = await products(6);
        console.log(result);
        this.products = result.data.products;
    },

    //监听滚动事件
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollToTop)
    },

    methods: {
        gengDuo(pa) {
            this.$router.push({name:'Geng',query:{pa:pa}})
        },
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop() {
            let that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 6)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if(that.scrollTop === 0) {
                    clearInterval(timer)
                }
            }, 16)
        },
        // 为了计算距离顶部的高度，当高度大于200显示回顶部图标，小于200则隐藏
        scrollToTop() {
            let that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if(that.scrollTop >200) {
                that.btnFlag = true
            } else {
                that.btnFlag = false
            }
        }
    }
}

</script>
<style scoped>
    body,html{
        height: 100%;
        width: 100%;
    }
    .btnTop{
        text-align: center;
        display: block;
        position: fixed;
        bottom: 0.5rem;
        right: 0.5rem;
        width: 0.8rem;
        line-height: 0.5rem;
        border-radius: 50%;
        height: 0.5rem;
        z-index: 1000;
        font-size: 0.8rem;
}
    .van-swipe{
        height: 5.4rem;
    }
    .swiper-img {
        width: 100%;
        height: 5.4rem;
    }
    .nav{
        display: flex;
        width: 100%;
        height: 0.5rem;
        align-items: center;
        justify-content: space-between;
    }
    .nav img{
            height: 0.265rem;
            width: 1.26rem;
            margin-left: 0.2rem;
            margin-bottom: 0.03rem;
    }
    .fdj{
        font-size: 0.18rem;
        float: right;
        margin-right: 0.2rem;
    }
    .nav_a{
        text-align: center;
        font-size: 0.12rem;
        display: block;
        width: 0.7rem;
        height: 0.22rem;
        margin-left: -1rem;
        color: aquamarine;
        border-radius: 0.53333rem;
        border: 1px solid aquamarine;
    }
    .bq{
        width: 94%;
        margin: 0.2rem auto;
    }
    .bq .van-tag{
        max-width: 8.6rem;
        display: inline-block;
        margin: 0.25rem 0.2rem;
        padding: 0 0.331333rem;
        line-height: 0.8rem;
        border: 1px solid #D3D8E6;
        border-radius: 0.45333rem;
        font-size: 0.28rem;
        background-color: #fff;
        color: #8891a7;
    }
    .sp[data-v-27ccff44] {
        width: 95%;
        height: 5rem;
    }

    .mw-divide {
        width: 100%;
        height: 12px;
        background-color: #f2f4f7;
    }

    /* 列表标题 */
    .xbt{
        width: 90%;
        height: 0.5rem;
        margin: 0.2rem auto;
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
        font-size: 0.3rem;
        align-items: center;
    }
    .list:last-child{
        padding-bottom: 0.5rem;
    }
    .xbt_r{
        color: aquamarine;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>