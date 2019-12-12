<template>
  <div class="about">
  <van-tabs v-model="active">
  <van-tab title="我的课程" >
    <div class="concent1">
      <img class="img1" src="//swap.stu.126.net/res/images/wap/common/newBlank.png?7b6c25677a53976b44f4d028d9dc761f" alt="空结果">
    <div class="mw-myclass-empty_tip">未开始学习微哦~</div>
    <a class="button">去发现值得学习的课程</a>
    </div>
  </van-tab>
  <van-tab title="我的微专业">
    <div class="concent1">
      <img class="img1" src="//swap.stu.126.net/res/images/wap/common/newBlank.png?7b6c25677a53976b44f4d028d9dc761f" alt="空结果">
    <div class="mw-myclass-empty_tip">未学习微专业哦~</div>
    <a class="button">去发现值得学习的课程</a>
    </div>
  </van-tab>
</van-tabs>
  </div>
</template>
<script>
import axios from 'axios'

export default {
   data() {
    return {
      active: 0
    };
  },
  created(){
    console.log(this.$route.query.id)
  }
}
  </script>
<style>
 .van-tabs .van-tabs__line {
    background-color: #2cc17b;
}
html,body{
  width: 100%;
  height: 100%;
}

.concent1{
   text-align: center;
  margin-top: 10% ;
  height: 50%;
}
.img1{
      height: 2.61333rem;
    width: 3.73333rem
}
.mw-myclass-empty_tip {
    font-size: 14px;
    color: #99a4bf;
    margin-top: 0.32rem;
    margin-bottom: 1.06667rem;
}
.button{
      display: inline-block;
    height: 1.17333rem;
    width: 5.33333rem;
    border-radius: 0.08rem;
    line-height: 1.17333rem;
    text-align: center;
    font-size: 15px;
    color: #3c4a55;
    background: #2cc17b;
    margin: 0 auto;
    color: #fff;
    text-decoration: none;
}
</style>

