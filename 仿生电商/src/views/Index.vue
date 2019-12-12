<template>
  <div class="index">
    <router-view></router-view>
      <van-tabbar  v-model='active'>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/about">我要学习</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/about1">账号</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
    name:'',
     data() {
    return {
      active: 0
    }
}
}
</script>
<style>
.index{
  margin-bottom:50px
}
</style>
