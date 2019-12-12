<template>
  <div class="about1">
    <div class="tou" @click="dian">
      <img href="#" class="zhu" :src="touxiang"/>
      <a href="#">{{name}}</a>
    </div>
    <ul>
      <a href="">
        <li @click.prevent="ding">
          <span class="iconfont icon-qian"></span>
          我的订单
          <span class="iconfont icon-iconfontxiangxia1copy19"></span>
        </li>
      </a>
      <a href="">
        <li @click.prevent="you">
          <span class="iconfont icon-yhq"></span>
          我的优惠券
          <span class="iconfont icon-iconfontxiangxia1copy19"></span>
        </li>
      </a>
      <a href="">
        <li @click.prevent="gou">
          <span class="iconfont icon-qicheqianlian-"></span>
          我的购物车
          <span class="iconfont icon-iconfontxiangxia1copy19"></span>
        </li>
      </a>
      <a href="">
        <li @click.prevent="xue">
          <span class="iconfont icon-xuexiqia"></span>
          我的学习卡
          <span class="iconfont icon-iconfontxiangxia1copy19"></span>
        </li>
      </a>
      <a href="">
        <li @click.prevent="fen">
          <span class="iconfont icon-xiaolaba02"></span>
          分享赚学费
          <span class="iconfont icon-iconfontxiangxia1copy19"></span>
        </li>
      </a>
    </ul>
    <!-- <router-link :to="{name:'youhui'}">我的订单</router-link><van-icon name="arrow" /><hr/>
    <router-link :to="{name:'youhui'}">我的优惠劵</router-link><van-icon name="arrow" /><hr/>
    <router-link :to="{name:'youhui'}">我的购物车</router-link><van-icon name="arrow" /><hr/>
    <router-link :to="{name:'youhui'}">我的学习卡</router-link><van-icon name="arrow" /><hr/>
    <router-link :to="{name:'youhui'}">分享赚学费</router-link><van-icon name="arrow" /><hr/> -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      touxiang:"//edu-image.nosdn.127.net/7c5a8d29-ce20-4f97-a3a6-49872772667d.png?imageView&quality=100&thumbnail=100y100",
      name:'登录/注册'
    }
  },
  methods:{
    dian(){
      let token=localStorage.getItem('token')
      if(token){
        this.$router.push({
          name:'shezhi'
        })
      }else{
        this.$router.push({
        name:'after'
      })
      }
     
    },
    you(){
       this.$router.push({
        name:'youhui'
      })
    },
    ding(){
      this.$router.push({
        name:'dingdan'
      })
    },
    gou(){
      this.$router.push({
        name:'cart'
      })
    },
    xue(){
      this.$router.push({
        name:'xuexika'
      })
    },
    fen(){
      this.$router.push({
        name:'fenxiang'
      })
    }
  },
  created(){
    let token=localStorage.getItem('token')
    if(token){
      console.log(token)
      axios.get('http://api.cat-shop.penkuoer.com/api/v1/users/info',{
        headers:{
          'authorization': 'Bearer '+token //这里有一个空格
        }
      }).then(res=>{
        console.log(res)
        this.touxiang=res.data.avatar
        this.name=res.data.nickName
      })
    }
  }
}
</script>
<style>
*{
  margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
html{
  font-size: 37.5px;
}
.about1{
  width: 100%;
  position: relative;
}
.tou{
  height: 2.08rem;
    text-align: left;
    box-sizing: border-box;
    padding: 0.37333rem 0 0.37333rem 0.32rem;
    line-height: 1.33333rem;
    background: #fff;
}
.tou .zhu{
  display: block;
  width: 1.33333rem;
    height: 1.33333rem;
    border-radius: 1.33333rem;
    margin-right: 0.32rem;
    float: left;
}
.tou a{
 display: block;
 font-size: 0.52667rem;
    color: #074f80;
    /* vertical-align: text-bottom; */
    margin-bottom:0.2rem;
    float: left;
    margin-left:0.2rem  

}
ul{
  margin-top: 0rem;
  list-style: none;
  background: #fff;
}
ul a{
  text-decoration: none;
  margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
ul a:last-of-type li{
  margin-top:0.2rem 
}
ul a li{
  border-top: none;
  height: 1.33333rem;
    line-height: 0.53333rem;
    font-size: 0.4rem;
    color: #333333;
    box-sizing: border-box;
    padding: 0.4rem 0;
    border-bottom: 1px solid #ddd;
    margin-left: 1.13333rem;
    width: 88%;
    /* width: 100% */
}
.icon-qian,.icon-yhq,.icon-qicheqianlian-,.icon-xuexiqia,.icon-xiaolaba02

{
    color: #999;
    display: inline-block;
    vertical-align: -2px;
    width: 0.50667rem;
    margin-left: -0.74667rem;
    margin-right: 0.2rem;
    /* border-top: none; */
}
.icon-iconfontxiangxia1copy19 {
    color: #ccc;
    margin-right: 0.32rem;
    margin-top: 0.05333rem;
    float: right;
}


</style>
