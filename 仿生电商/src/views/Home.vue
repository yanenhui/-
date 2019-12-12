<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar>
      <img class="img" src="../../img/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png" alt="" slot="left" />
      <div slot="title" class="mw-header_app">App查看</div>
      <van-icon id="van-icon" name="search" slot="right"/>
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" :key="1">
      <van-swipe-item><img src="../../img/0b148605b7be4706b313ee2b6a50e154.webp" alt="" srcset=""></van-swipe-item>
      <van-swipe-item><img src="../../img/1141b871584b4dc28b984dd223c7a1e2.webp" alt="" srcset=""></van-swipe-item>
      <van-swipe-item><img src="../../img/61fcc16649404acc955930ae540d9a4f.webp" alt="" srcset=""></van-swipe-item>
      <van-swipe-item><img src="../../img/a849281ca176400ab5a2a9e55cc72a27.webp" alt="" srcset=""></van-swipe-item>
      <van-swipe-item><img src="../../img/f8568c7243fb4278b68b46705fea05df.webp" alt="" srcset=""></van-swipe-item>
      <van-swipe-item><img src="../../img/b33229dff75d437e884a82d1e5910ef4.webp" alt="" srcset=""></van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
  <van-grid :border="false">
    <van-grid-item to="/user" icon="https://edu-image.nosdn.127.net/fbbf1cfc-45f2-4a42-bcbb-df5cad63d3c2.png?imageView&quality=100&thumbnail=103y103" text="微专业" />
    <van-grid-item to="/Show" icon="https://edu-image.nosdn.127.net/23444883-fc1a-4972-8a22-591e5b790ee0.png?imageView&quality=100&thumbnail=103y103" text="职场提升" />
    <van-grid-item to="/Show" icon="https://edu-image.nosdn.127.net/b216231d-4b93-4d5c-8e7c-e22389f194b8.png?imageView&quality=100&thumbnail=103y103" text="编程开发" />
    <van-grid-item to="/Show" icon="https://edu-image.nosdn.127.net/55329cd44f7142c7b2eaaca1a68e2430.png?imageView&quality=100&thumbnail=103y103" text="人工智能" />
  </van-grid>
  <van-grid :border="false">
    <van-grid-item to="/Show" icon="https://edu-image.nosdn.127.net/8f2db166988542c2b720f418e6330500.png?imageView&quality=100&thumbnail=103y103" text="产品与运营" />
    <van-grid-item to="/Show" icon="https://edu-image.nosdn.127.net/dd3fdff7aeea4b37af8d623be3695331.png?imageView&quality=100&thumbnail=103y103" text="设计创意" />
    <van-grid-item to="/Show" icon="https://edu-image.nosdn.127.net/c0c090e1872748ff8cec40ed03b3e476.png?imageView&quality=100&thumbnail=103y103" text="电子商务" />
    <van-grid-item to="/Show" icon="https://edu-image.nosdn.127.net/fd322af24d8947a8961b99c42b8261e8.png?imageView&quality=100&thumbnail=103y103" text="语言学习" />
  </van-grid>
  <!-- 占位单元 -->
  <div class="seat"></div>
  <!-- 畅销好课 -->
  <div class="concent">
    <p class="seller">畅销好课</p>
    <div class="ba" >
      <!-- <div class="txt_left txt1  txt_margin" v-for="item in list" :key="item.id">
        <img :src="item.coverImg | glq" alt="">
        <div>{{item.name}}</div>
         <p><span>1</span><span>2</span></p>
      </div> -->
      <div class="udk" v-for="item in list" :key="item.id">
        <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
        <div class="imgcon">
        <img class="whing" :src="item.coverImg | glq" alt="">
        </div>
        </router-link>
        <div class="itemname">{{item.name}}</div>

      </div>
    </div>
  </div>
   <!-- 占位单元 -->
  <div class="seat"></div>
 <!-- 专题 -->
  <div class="concent">
    <p class="seller">专题</p>
    <div v-for="item in list1" :key="item.id">
       <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
    <div class="txt_">
      <img class="img4g" :src="item.coverImg | glq" alt="">
    </div>
       </router-link>

    </div>
  </div>
    <!-- 占位单元 -->
  <div class="seat"></div>
    <!-- 职场提升 -->
  <div class="concent">
    <p class="seller">职场提升</p>
    <div class="udk" v-for="item in list2" :key="item.id">
       <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
        <div class="imgcon">
        <img class="whing" :src="item.coverImg | glq" alt="">
        </div>
       </router-link>
        <div class="itemname">{{item.name}}</div>
      </div>
  </div>
      <!-- 占位单元 -->
  <div class="seat"></div>
  <!-- 办公效率 -->
  <div class="concent">
    <p class="seller">办公效率</p>
    <router-link :to="{
          name:'Xqing',
          query:{
            id:'5dee169976c5914f13dc02dd'
          }
        }">
    <div class="txt_">
      <img class="height" src="http://api.cat-shop.penkuoer.com/uploads/20191206/1575884428469.png" alt="">
      <p class="course-title"><span>漂亮的小小姐姐</span></p>
      <p class="course-title course-title_ "><span>60000</span></p>
    </div>
    </router-link>
    <div class="udk" v-for="item in list3" :key="item.id">
       <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
        <div class="imgcon">
        <img class="whing" :src="item.coverImg | glq" alt="">
        </div>
       </router-link>
        <div class="itemname">{{item.name}}</div>
      </div>
  </div>
        <!-- 占位单元 -->
  <div class="seat"></div>
   <!-- 语言留学 -->
  <div class="concent">
    <p class="seller">语言留学</p>
    <router-link :to="{
          name:'Xqing',
          query:{
            id:'5d844e82fe04943d5e5401b5'
          }
        }">
    <div class="txt_">
      <img class="height" src="https://img.alicdn.com/imgextra/i3/57347046/O1CN01zxIAkU21v7BKn4DUh_!!0-saturn_solar.jpg_250x250.jpg">
      <p class="course-title"><span>项链女纯银999锁骨链女</span></p>
      <p class="course-title course-title_ "><span>1092</span></p>
    </div>
    </router-link>
      <div class="udk" v-for="item in list4" :key="item.id">
         <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
        <div class="imgcon">
        <img class="whing" :src="item.coverImg | glq" alt="">
        </div>
         </router-link>
        <div class="itemname">{{item.name}}</div>
      </div>
  </div>
          <!-- 占位单元 -->
  <div class="seat"></div>
   <!-- 个人理财   -->
  <div class="concent">
    <p class="seller">个人理财</p>
    <router-link :to="{
          name:'Xqing',
          query:{
            id:'5d844e85fe04943d5e5401c9'
          }
        }">
    <div class="txt_">
      <img class="height" src="http://api.cat-shop.penkuoer.com/uploads/20191206/1575711797362.png" alt=""><p>韩国小姐姐</p>
    </div>
    </router-link>
      <div class="udk" v-for="item in list5" :key="item.id">
         <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
        <div class="imgcon">
        <img class="whing" :src="item.coverImg | glq" alt="">
        </div>
         </router-link>
        <div class="itemname">{{item.name}}</div>
      </div>
  </div>
          <!-- 占位单元 -->
  <div class="seat"></div>
  <!-- 摄影影视 -->
  <div class="concent">
    <p class="seller">摄影影视</p>
     <div class="udk" v-for="item in list6" :key="item.id">
        <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
        <div class="imgcon">
        <img class="whing" :src="item.coverImg | glq" alt="">
        </div>
        </router-link>
        <div class="itemname">{{item.name}}</div>
      </div>

  </div>
</div>
</template>
<script>
import axios from 'axios'
// import { log } from 'util';
export default{
  data(){
    return {
      list:[],
      list1:[],
      list2:[],
      list3:[],
      list4:[],
      list5:[],
      list6:[],
    }
  },
  created () {
    axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:6,
          page:1
        }
      })
      .then((res)=> {
    let y = res.data.products;
    this.list=y
      }),
      /////////////////////////
      axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:4,
          page:2
        }
      })
      .then((res1)=> {
    let y1 = res1.data.products;
    this.list1=y1
      }),
      ///////////////////////////////
      axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:6,
          page:3
        }
      })
      .then((res2)=> {
    let y2 = res2.data.products;
    this.list2=y2
      }),
      ////////////////////////////////
      axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:4,
          page:4
        }
      })
      .then((res3)=> {
    let y3 =res3.data.products;
    this.list3=y3
      }),
      //////////////////////////
      axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:4,
          page:5
        }
      })
      .then((res4)=> {
    let y4 = res4.data.products;
    this.list4=y4
      }),
      //////////////////////////
      axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:4,
          page:6
        }
      })
      .then((res5)=> {
    let y5 = res5.data.products;
    this.list5=y5
      }),
      //////////////////////////
      axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:6,
          page:7
        }
      })
      .then((res6)=> {
    let y6 = res6.data.products;
    this.list6=y6
      })
  },
  filters:{
    glq:function(res){
      if(res){
        return res.startsWith('http')?res:'http://api.cat-shop.penkuoer.com'+res
      }
    }
  },filters:{
    glq:function(res1){
      if(res1){
        return res1.startsWith('http')?res1:'http://api.cat-shop.penkuoer.com'+res1
      }
    }
  },filters:{
    glq:function(res2){
      if(res1){
        return res2.startsWith('http')?res2:'http://api.cat-shop.penkuoer.com'+res2
      }
    }
  }
  ,filters:{
    glq:function(res3){
      if(res3){
        return res3.startsWith('http')?res3:'http://api.cat-shop.penkuoer.com'+res3
      }
    }
  },filters:{
    glq:function(res4){
      if(res4){
        return res4.startsWith('http')?res4:'http://api.cat-shop.penkuoer.com'+res4
      }
    }
  },filters:{
    glq:function(res5){
      if(res5){
        return res5.startsWith('http')?res5:'http://api.cat-shop.penkuoer.com'+res5
      }
    }
  },filters:{
    glq:function(res6){
      if(res6){
        return res6.startsWith('http')?res6:'http://api.cat-shop.penkuoer.com'+res6
      }
    }
  },
  methods:{
    }
}
</script>
<style>
.height{
  height: 5rem;
}
.imgcon{
  width: 100%;
height: 3.5rem;
}
.udk{
  height: 5rem;
  float: left;
  width: 46%;
  margin:.15rem
}
.ba{
  overflow: auto;
}.img4g{
  height: 5rem;
}
.itemname{
  height: auto;
      margin-top: 0.2rem;
    font-size: 16px;
    line-height: 22px;
    color: #3c4a55
}
/* 占位单元 */
.seat{
  overflow: hidden;
    width: 100%;
    height: 12px;
    background-color: #f2f4f7;
}
.whing{
  height: 100%;
}
/* 导航栏 */
.img{
  width:111px;
  height: auto;
  position: absolute;
  top: -34px;
}
.van-nav-bar__right {
    right: 35px;
}
.mw-header_app {
  left: 134px;
    top: 13px;
    position: absolute;
    height: 20px;
    width: 60px;
    box-sizing: border-box;
    color: #2CC17B;
    line-height: 16px;
    text-align: center;
    border-radius: 0.53333rem;
    font-size: 12px;
    border: 1px solid #2CC17B;
    margin: 0;
    padding: 0;
}
#van-icon {
    color: #999;
}
.van-grid-item .van-icon__image {
    margin: 0 auto;
    width: 1.01333rem;
    height: 1.01333rem;
}
.van-nav-bar .van-nav-bar__right {
    right: 36px;
}
/* 轮播图 */
img{
  width: 100%;
  height: auto;
}
/* 宫格 */
.van-grid-item__content .van-grid-item__text {
    color: #000;
}
/* 畅销好课 */
.concent{
  padding-top: 0.53333rem;
  /* display: table; */
  margin: 0 auto;
  width: 92%;
  /* padding:20px 15px 0 15px; */
  height: auto;
}
.seller{
  margin-bottom: 0.4rem;
  width: 100%;
    /* line-height: 21px; */
    font-size: 17px;
    font-weight: bold;
    color: #3c4a55;
}
.txt{
  box-sizing: border-box;
  display:flex;
  flex: direction;
}
.txt1{
  /* margin-bottom: 0.6rem; */
  width: 48%;
}
.txt1 img{
      width: 100%;
    height: 55%;
}
.txt_{
  margin-bottom: 16px;
  width: 100%;
}
.txt1 div {
    margin-top: 0.2rem;
    font-size: 16px;
    line-height: 22px;
    color: #3c4a55;
}
/* .txt1{
      margin-bottom: 0.8rem;
} */
.course-title{
    margin-top: 0.2rem;
    font-size: 16px;
    line-height: 22px;
    color: #3c4a55;
}
.course-title_{
    margin-top: 0.2rem;
    font-size: 16px;
    line-height: 22px;
    color: #ff632a;
}
.txt_margin{
  margin-right: .3rem
}
</style>
