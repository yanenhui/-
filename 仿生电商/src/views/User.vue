<template>
    <div class="about">
    <!-- header-img -->
    <div><img src="../../img/3feccac4-f025-497e-b00e-f5bee6696671.jpg" alt="" srcset=""></div>
    <!-- 网格 -->
        <van-grid :border="false" :column-num="5">
           <!-- @click="backTop()" -->
        <van-grid-item icon="//edu-image.nosdn.127.net/db28491d-6a6b-461b-ac1c-e017f0e81bc1.png?imageView&quality=100&thumbnail=56y56" text="数据分析"/>
        <van-grid-item icon="//edu-image.nosdn.127.net/db28491d-6a6b-461b-ac1c-e017f0e81bc1.png?imageView&quality=100&thumbnail=56y56" text="人工智能" />
        <van-grid-item icon="//edu-image.nosdn.127.net/cc0a2904-51af-4dc0-9dd4-ccf8706d41e1.png?imageView&quality=100&thumbnail=56y56" text="技术开发" />
        <van-grid-item icon="//edu-image.nosdn.127.net/97ab6c18-a128-4447-add4-16f6eaa5b9a5.png?imageView&quality=100&thumbnail=56y56" text="设计&摄影" />
        <van-grid-item icon="//edu-image.nosdn.127.net/6c86436a-a020-4e58-bd5d-e03a9a876a39.png?imageView&quality=100&thumbnail=56y56" text="产品&运营" />
    </van-grid>
    <div class="seat"></div>
    <div class="micro-live-card-list">
        <div class="list-title">免费直播</div>


        <div class="assemble-micro-live-card" v-for="item in list" :key="item.id">
        <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
        <div class="micro-live-card-logo">
			<img :src="item.coverImg | glq">
		</div>
    <div class="card-body">
			<div class="micro-live-card-body-inner">
				<div class="content">
					<div class="micro-live-card-status">
						<!--Regular if58-->
						<div class="micro-live-card-live">
							<span class="live-icon">&nbsp;</span><span class="micro-live-card-live-text">直播中</span>
                            <div class="micro-live-card-status-text">
                                <span>进入直播</span>
                                <span class="ux-icon-caret-right"></span>
                            </div>
                        </div>
                    </div>
                        <div class="micro-live-card-title">{{item.name}}</div>
                        <div class="micro-live-card-lector f-thide" title="唐磊 网易前端高级讲师">{{item.descriptions}}</div>
                </div>
				<!--Regular if59-->
                <hr class="micro-live-card-line">
			</div>
        </div>
    </router-link>
    </div>
    </div>
    <div class="seat"></div>
    <!-- 限时优购 -->
    <div class="j-limit-coupon">
    <div class=" ux-cms-course-smart-card-list limit-coupon-list">
        <div class="list-name">限时优惠</div>
            <div class="ux-cms-course-smart-card-list-cards cards-list-3">
        <!--Regular list-->


<router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }" v-for="item in list1" :key="item.id">
            <a class="ux-cms-course-smart-card limit-coupon-card card-num-0" target="_self" href="//mooc.study.163.com/smartSpec/detail/1202852601.htm" data-log-act="click" data-log-data="{&quot;itemName&quot;:&quot;电商运营实战&quot;}">
    <img class="ux-cms-course-smart-card-image" style="opacity:0.6" :src="item.coverImg | glq">
    <div class="ux-cms-course-smart-card-desc">
        <p class="name" style="Z-index:1;color:#111">{{item.descriptions}}</p>
        <p class="description" style="Z-index:1;color:#333">{{item.price}}</p>

    </div>
    <div class="ux-cms-course-smart-card-badge">
        推荐
    </div>
</a>
</router-link>


    </div>
    </div>
    </div>
    <div class="j-rec-micro" id="j-rec-micro"><div class="ux-cms-course-smart-card-list rec-micro-list" data-log-id="web_item_click" data-log-data="{&quot;sceneLog&quot;:&quot;推荐微专业&quot;,&quot;logType&quot;:&quot;microspec&quot;}">
    <div class="ux-cms-course-smart-card-list-name">
        推荐微专业
    </div>
    <div class="ux-cms-course-smart-card-list-cards cards-list-6">
        <!--Regular list-->

    <a class="ux-cms-course-smart-card vvw rec-micro-card card-num-3" v-for="item in list2" :key="item.id">
    <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
    <img :src="item.coverImg | glq" class="ux-cms-course-smart-card-image" >
    <div class="ux-cms-course-smart-card-desc vvv">
      <p class="name1">{{item.name}}</p>
      <p class="description1">{{item.descriptions}}</p>
    </div>
    <div class="ux-cms-course-smart-card-badge" style="display: none;">
    </div>
     <div class="ux-cms-course-smart-card-badge" style="color:#fff">
        限时优惠
    </div>
    </router-link>
</a>

    </div>
</div>
</div>

<van-tabs v-model="active" id="d1">
    <van-tab title="数据分析" name="a">

        <div class="shuju" v-for="item in list3" :key="item.id">
    <div class="uc-micro-list-wrap_content f-cb">
		<div class="uc-micro-list" id="j-micro-list">
		<!--Regular list-->
    <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
			<a class="uc-micro-list_aitem">
				<div class="uc-micro-list_item f-cb" >
					<img data-src="" alt="" class="uc-micro-list_img" :src="item.coverImg | glq">
					<div class="uc-micro-list_right">
						<h2 class="uc-micro-list_title">{{item.name}}</h2>
						<h3 class="uc-micro-list_oneDesc">{{item.descriptions}}</h3>
						<div class="uc-micro-list_courseNum">{{item.price}}</div>
					</div>
				</div>
			</a>
      </router-link>
</div>
	</div>
    </div>

    </van-tab>


    <van-tab title="人工智能" name="b" >
         <div class="shuju" v-for="item in list4" :key="item.id">
    <div class="uc-micro-list-wrap_content f-cb">
		<div class="uc-micro-list" id="j-micro-list">
		<!--Regular list-->
    <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
			<a class="uc-micro-list_aitem">
				<div class="uc-micro-list_item f-cb" >
					<img data-src="" alt="" class="uc-micro-list_img" :src="item.coverImg | glq">
					<div class="uc-micro-list_right">
						<h2 class="uc-micro-list_title">{{item.name}}</h2>
						<h3 class="uc-micro-list_oneDesc">{{item.descriptions}}</h3>
						<div class="uc-micro-list_courseNum">{{item.price}}</div>
					</div>
				</div>
			</a>
      </router-link>
</div>
	</div>
    </div>
    </van-tab>
    <van-tab title="技术开发" name="c" >
         <div class="shuju" v-for="item in list5" :key="item.id">
    <div class="uc-micro-list-wrap_content f-cb">
		<div class="uc-micro-list" id="j-micro-list">
		<!--Regular list-->
    <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
			<a class="uc-micro-list_aitem">
				<div class="uc-micro-list_item f-cb" >
					<img data-src="" alt="" class="uc-micro-list_img" :src="item.coverImg | glq">
					<div class="uc-micro-list_right">
						<h2 class="uc-micro-list_title">{{item.name}}</h2>
						<h3 class="uc-micro-list_oneDesc">{{item.descriptions}}</h3>
						<div class="uc-micro-list_courseNum">{{item.price}}</div>
					</div>
				</div>
			</a>
      </router-link>
</div>
	</div>
    </div>
    </van-tab>
    <van-tab title="设计&摄影" name="d" >
           <div class="shuju" v-for="item in list6" :key="item.id">
    <div class="uc-micro-list-wrap_content f-cb">
		<div class="uc-micro-list" id="j-micro-list">
		<!--Regular list-->
    <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
			<a class="uc-micro-list_aitem">
				<div class="uc-micro-list_item f-cb" >
					<img data-src="" alt="" class="uc-micro-list_img" :src="item.coverImg | glq">
					<div class="uc-micro-list_right">
						<h2 class="uc-micro-list_title">{{item.name}}</h2>
						<h3 class="uc-micro-list_oneDesc">{{item.descriptions}}</h3>
						<div class="uc-micro-list_courseNum">{{item.price}}</div>
					</div>
				</div>
			</a>
      </router-link>
</div>
	</div>
    </div>
    </van-tab>
    <van-tab title="产品&运营" name="e" >
         <div class="shuju" v-for="item in list7" :key="item.id">
    <div class="uc-micro-list-wrap_content f-cb">
		<div class="uc-micro-list" id="j-micro-list">
		<!--Regular list-->
    <router-link :to="{
          name:'Xqing',
          query:{
            id:item._id
          }
        }">
			<a class="uc-micro-list_aitem">
				<div class="uc-micro-list_item f-cb" >
					<img data-src="" alt="" class="uc-micro-list_img" :src="item.coverImg | glq">
					<div class="uc-micro-list_right">
						<h2 class="uc-micro-list_title">{{item.name}}</h2>
						<h3 class="uc-micro-list_oneDesc">{{item.descriptions}}</h3>
						<div class="uc-micro-list_courseNum">{{item.price}}</div>
					</div>
				</div>
			</a>
      </router-link>
</div>
	</div>
    </div>
    </van-tab>
</van-tabs>
<div class="seat"></div>
<div>
<div class="h1">
我们的学院在这工作
</div>
<div class="image">
    <img src="//edu-image.nosdn.127.net/20ca861c-f8e9-4ff5-bad1-6249f6d984ba.png?imageView&amp;quality=100">
</div>
</div>
<div class="seat"></div>
<div class="footer">
    <a class="footer_">
       <span class="ux-icon-service uc-im-service_icon"></span>
       <span class="uc-im-service_txt">有问题，立即咨询</span>
    </a>
</div>
</div>
</template>
 <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<script>
import axios from 'axios'
    export default {
        name: 'shuju',
    data() {
    return {
    active: 1,
      list:[],
      list1:[],
      list2:[],
      list3:[],
      list4:[],
      list5:[],
      list6:[],
      list7:[],
    }
},
 created () {
    axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:3,
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
          per:12,
          page:40
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
          page:60
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
          page:70
        }
      })
      .then((res6)=> {
    let y6 = res6.data.products;
    this.list6=y6
      })
       axios
      .get('http://api.cat-shop.penkuoer.com/api/v1/products',{
        params:{
          per:10,
          page:10
        }
      })
      .then((res7)=> {
    let y7 = res7.data.products;
    this.list7=y7
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
  },filters:{
    glq:function(res7){
      if(res7){
        return res7.startsWith('http')?res7:'http://api.cat-shop.penkuoer.com'+res7
      }
    }
  },
// methods:{
//     backTop() {
//         document.documentElement.scrolltop = 900
//         }
//     }
}
</script>
<style>
/* 占位单元 */
html{
  font-size: 36px
}
.seat{
    width: 100%;
    height: 12px;
    background-color: #f2f4f7;
}
.van-grid .van-grid-item__content{
  padding: 16px 0
}
/* 免费直播 */
.assemble-micro-live-card {
    padding: 0.53333rem 0 0 0.42667rem;
    overflow: hidden;
}
.content {
    padding-right: 0.42667rem;
}
.list-title{
  font-size: 0.45333rem;
    color: #333;
    margin: 0.53333rem 0 0 0.42667rem;
    font-weight: bold;
}
.micro-live-card-logo{
  display: inline-block;
}
.micro-live-card-logo img {
  height: 1.92rem;
    width: 1.92rem;
    border-radius: 1.92rem;
}
.card-body {
    width: calc(100% - 1.92rem);
    float: right;
}
.micro-live-card-body-inner {
    margin-left: 0.42667rem;
}
.assemble-micro-live-card-list .assemble-micro-live-card .micro-live-card-status > div {
    display: inline-block;
}
.live-icon {
    width: 0.53333rem;
    display: inline-block;
    color: #2cc17b;
    line-height: 0.53333rem;
    height: 0.53333rem;
    background: url(//swap.stu.126.net/res/images/wap/ui/micro/live_wap.gif?67bb399…) no-repeat;
    background-size: 0.42667rem;
    vertical-align: top;
}
.micro-live-card-live-text {
    font-size: 0.37333rem;
    color: #36b378;
    line-height: 0.53333rem;
    height: 0.53333rem;
    vertical-align: middle;
}
.micro-live-card-status-text {
    color: #999;
    float: right;
    height: 0.53333rem;
    line-height: 0.53333rem;
}
.micro-live-card-title {
    font-size: 0.42667rem;
    color: #333;
    margin-top: 0.21333rem;
    word-break: break-word;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 0.58667rem;
}
.micro-live-card-lector {
    color: #999;
    font-size: 0.32rem;
    margin-top: 0.21333rem;
    margin-bottom: 0.53333rem;
}
hr {
    background-color: #ddd;
    opacity: 0.4;
    height: 1px;
    border: none;
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
}
/* 限时优购 */
.j-limit-coupon {
    width: 100%;
    box-sizing: border-box;
}
.list-name {
    padding-left: 0.33333rem;
    margin-top: 0.53333rem;
    margin-bottom: 0.45333rem;
    font-size: 0.45333rem;
    color: #333333;
    font-weight: bold;
}
.ux-cms-course-smart-card-list-cards {
    width: 100%;
}
.j-limit-coupon .ux-cms-course-smart-card-list-cards .ux-cms-course-smart-card {
    width: 93%;
    height: 3.2rem;
    display: block;
    margin: 0 auto 0.56rem auto;
    padding-bottom: 0.18667rem;
    overflow: hidden;
    border-radius: 3px;
    background-size: contain;
    background-repeat: no-repeat;
}
.ux-cms-course-smart-card {
    display: inline-block;
    position: relative;
    width: 8rem;
    height: 5.3333333333rem;
    z-index: 2;
    text-decoration: none;
    color: #ffffff;
}
.ux-cms-course-smart-card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #eeeeee;
}
.j-limit-coupon .ux-cms-course-smart-card-list-cards .ux-cms-course-smart-card-desc {
    width: 100%;
    height: 100%;
    padding-top: 0.8rem;
    box-sizing: border-box;
    background-size: contain;
}
.j-limit-coupon .ux-cms-course-smart-card-list-cards .ux-cms-course-smart-card-desc .name {
    font-weight: bold;
    font-size: 0.56rem;
    line-height: 0.78667rem;
    width: 90%;
    height: 0.8rem;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-align: center;
}
.description {
    font-size: 0.4rem;
    line-height: 0.54667rem;
    margin-top: 0.26667rem;
    width: 90%;
    height: 0.54667rem;
    margin: 0.26667rem auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-align: center;
}
.ux-cms-course-smart-card-badge {
    top: .2rem;
    left: -.7rem;
    transform: rotate(-45deg);
    width: 1.89333rem;
    height: 0.53333rem;
    font-size: 0.34667rem;
    line-height: 0.53333rem;
    background-image: linear-gradient(to right, #FF6B43, #FF303D);
    text-align: center;
    background-color: #999999;
    padding: 0 0.2666666667rem;
    position: absolute;
}
/* 推荐微专业 */
.j-rec-micro .ux-cms-course-smart-card-list {
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    margin-top: 0.21333rem;
}
.j-rec-micro .ux-cms-course-smart-card-list-name {
    padding-left: 0.33333rem;
    margin-top: 0.53333rem;
    margin-bottom: 0.45333rem;
    font-size: 0.45333rem;
    color: #333333;
    font-weight: bold;
}
.j-rec-micro .ux-cms-course-smart-card-list-cards {
    font-size: 0;
    width:98%;
    margin: 0 auto;
}
.j-rec-micro .ux-cms-course-smart-card-list-cards .ux-cms-course-smart-card:nth-child(odd) {
    margin-right: 0.2667rem;
}
.vvw {
    display: block;
    float: left;
    width: 48%;
    height: auto;
    overflow: hidden;
    margin-bottom: 0.74667rem;
}
.j-rec-micro .ux-cms-course-smart-card-list-cards .ux-cms-course-smart-card-image {
    width: 100%;
    height: 2.82667rem;
    border-radius: 0.08rem;
}
.vvv{
    margin-top: 2.82667rem;
}
 .name1 {
    width: 100%;
    max-height: 1.2rem;
    font-size: 0.42667rem;
    line-height: 0.58667rem;
    color: #333333;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.j-rec-micro .ux-cms-course-smart-card-list-cards .ux-cms-course-smart-card-desc .description {
    width: 100%;
    max-height: 0.8rem;
    margin-top: 0.16rem;
    font-size: 0.32rem;
    line-height: 0.38667rem;
    color: #999999;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.j-rec-micro .ux-cms-course-smart-card-list-cards .ux-cms-course-smart-card-desc .description1 {
    width: 100%;
    max-height: 0.8rem;
    margin-top: 0.16rem;
    font-size: 0.32rem;
    line-height: 0.38667rem;
    color: #999999;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0.26667rem auto;
}
.h1{
    font-size: 0.53333rem;
    font-weight: bold;
    text-align: center;
    padding-left: 0.13333333333333333rem;
    min-height: 0.7466666666666667rem;
    width: 98%;
    padding-top: 0.6666666666666666rem;
}
.image{

    padding-top: 0rem;
    width: 93%;
    min-height: 8.106666666666667rem;
    padding-left: 0.26666666666666666rem;

}
.image img{
width: 100%;
height: 100%;
}
.footer{
        padding: 0.8rem 0;
    width: 100%;
    text-align: center
}
.footer_{
    display: inline-block;
    background-color: #2196f3;
    color: #fff;
    border-radius: 1.33333rem;
    width: 5.6rem;
    height: 1.17333rem;
    font-size: 0.4rem;
    line-height: 1.17333rem;
}
.uc-im-service_icon {
    font-size: 0.56rem;
    position: relative;
    top: 0.14667rem;
}
/* .ux-icon-service:before {
    content: "\EAD2";
} */
</style>
