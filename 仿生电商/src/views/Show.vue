<template>
    <div class="show">
    <div class="nav">
        <span @click="gatoMenu" class="fdj"> 返回</span>
        <a class="nav_a" href="">App查看</a>
        <van-icon class="fdj" name="search"/>
    </div>
        <!-- <div class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
            我是来测试的、哇咔咔
        </div> -->
    <!-- 滚动导航 -->
        <van-tabs sticky>
            <van-tab title="职场提升"  name="a"><bf></bf></van-tab>
            <van-tab title="编程与开发" name="b" ><fs></fs></van-tab>
            <van-tab title="AI/数据科学" name="c" ><se></se></van-tab>
            <van-tab title="产品与运营" name="d" ><tht></tht></van-tab>
            <van-tab title="电商运营" name="e" ><fi></fi></van-tab>
            <van-tab title="设计创意" name="f" ><sx></sx></van-tab>
        </van-tabs>
    </div>
</template>
<style scoped>

    .nav{
        display: flex;
        width: 100%;
        height: 1rem;
        align-items: center;
        justify-content: space-between;
    }
    .van-swipe{
        height: 3.4rem;
    }
    .van-swipe .swiper-img {
        width: 100%;
        height: 3.4rem;
    }
    .nav_a {
    text-align: center;
    font-size: 0.12rem;
    display: block;
    height: 20px;
    width: 60px;
    line-height: 0.4rem;
    margin-left: -1.rem;
        color: #2CC17B;
    line-height: 16px;
    text-align: center;
    border-radius: 0.53333rem;
    font-size: 12px;
    border: 1px solid #2CC17B;
}.btnTop[data-v-984419a4] {
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
}.fdj{
    margin: .4rem
}
</style>
<script>
import bf from '../List/befor'
import fs from '../List/frist'
import se from '../List/second'
import tht from '../List/third'
import fi from '../List/fifth'
import sx from '../List/sixth'
export default {
    name:"show",
    components: {bf,fs,se,tht,fi,sx},
    data(){
        return {
            // isFixed: false,
            // offsetTop:0
            }

    },
    methods: {
        gatoMenu(){
            this.$router.push({name:'home'})
        },
    },
}
</script>
