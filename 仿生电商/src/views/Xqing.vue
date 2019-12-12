<template>

<!-- 图片 -->
<div class="xqing" >
    <van-image width="100%" height="9rem"  :src="product.coverImg | glq" />
<!--悬浮加介绍  -->
    <van-sticky >
        <van-tabs v-model="activeName" ref="ruleform" >
            <van-tab title="简介"  >
                <!-- 名字 -->
                <van-row style="overflow-y:auto;flex:1">
                    <van-col span="16" class="jian1">
                        <p>{{product.name}}（视频+辅导）</p>
                        <van-rate v-model="value" :count="6" class="jian1-1"/><i>4.9分</i>
                        <p >￥{{product.price}}</p>
                        
                    </van-col>
                    <div class="content">
                        <div>
                            <h1>
                                商品介绍
                            </h1>
                        </div>
                            <h3>
                                一、基本介绍
                            </h3>
                            <p  class="p">
                                如果你是有一点点的PPT基础，但做出来的PPT不好看的初学者，那么这套课程就是你的菜！这是一套你一听就能懂，一懂就能用，一用你的PPT水平就会变好看的设计课程。
                            </p>
                            <h3>
                                二、独具特色
                            </h3>
                            <p class="p">
                            报名这套课程后，你可以通过大白的新浪微博（PPT演讲师大白）联系到大白，申请进入学员专属的QQ群和微信群继续学习。在听课过程中有任何听不懂的地方都可以向大白一对一的提问。 </p>    
                     <h3>
                                二、独具特色
                            </h3>
                             <p class="p">
                            指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，
                        </p>
                    </div>
                </van-row>
            </van-tab>
            <!-- 目录的内容 -->
            <van-tab title="目录" >
                <div class="content">
                     <div>
                            <h1>
                                商品目录
                            </h1>
                        </div>
                            <h3>
                                一、基本介绍
                            </h3>
                            <p class="p">
                                如果你是有一点点的PPT基础，但做出来的PPT不好看的初学者，那么这套课程就是你的菜！这是一套你一听就能懂，一懂就能用，一用你的PPT水平就会变好看的设计课程。
                            </p>
                            <h3>
                                二、独具特色
                            </h3>
                            <p  class="p">
                            报名这套课程后，你可以通过大白的新浪微博（PPT演讲师大白）联系到大白，申请进入学员专属的QQ群和微信群继续学习。在听课过程中有任何听不懂的地方都可以向大白一对一的提问。 </p>    
                    <h3>
                                二、独具特色
                            </h3>
                        <p class="p">
                            指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，
                        </p>
                </div>
            </van-tab>
            <van-tab title="评价" >
                <div class="content">
                    <div>
                            <h1>
                                商品评价
                            </h1>
                        </div>
                            <h3>
                                一、基本介绍
                            </h3>
                            <p class="p">
                                如果你是有一点点的PPT基础，但做出来的PPT不好看的初学者，那么这套课程就是你的菜！这是一套你一听就能懂，一懂就能用，一用你的PPT水平就会变好看的设计课程。
                            </p>
                            <h3>
                                二、独具特色
                            </h3>
                            <p class="p">
                            报名这套课程后，你可以通过大白的新浪微博（PPT演讲师大白）联系到大白，申请进入学员专属的QQ群和微信群继续学习。在听课过程中有任何听不懂的地方都可以向大白一对一的提问。 </p>    
                    <h3>
                                二、独具特色
                            </h3>
                        <p class="p">
                            指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，
                        </p>
                </div>
            </van-tab>
        </van-tabs>
    </van-sticky>
<!-- 加入购物车 -->
    <van-goods-action style="z-index:999">
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" info=""  />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton(product._id)" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton1(product._id)" :to="{
          name:'jiesuan',
          query:{
            id:product._id
          }
        }"/>
    </van-goods-action>
</div>
</template>
<script>
import {creatProduct} from'../api/products'
import {productDetail} from'../api/products'
import {server} from'../utils/config'
import '../../public/Xqing.css'
import axios from "axios";
export default {
    data() {
    return {
        id:"",
        product:{
            name:'',
            coverImg:'',
            price:''
        },
        activeName: 'a',
        value:6,
        loading: true,
        time: 30 * 60 * 60 * 1000
        };

    },
    // 获取图片的ID
    async created(){
        this.id=this.$route.query.id
        const result=await productDetail(this.id);
        this.product=result.data;
        // 判断图片的样式
        // this.imageUrl = this.product.coverImg.startsWith('http')? this.product.coverImg: server + this.product.coverImg
    let res = this.product
    },
    filters:{
    glq:function(res1){
        if(res1){
            return res1.startsWith('http')?res1:'http://api.cat-shop.penkuoer.com'+res1
            }
        }
    },
    methods:{
    //点击小图标 跳转到购物车
        onClickIcon(id) {
            this.$router.push({
            name:'cart',
            query:{
                id
            }
        })
        },
        onClickButton1(id){

        },
         //点击购物车，传ID到购物车
        onClickButton(id) {
            this.$notify({ type: 'success', message: '成功加入购物车',duration:1000});
            query:{
                name:'jiesuan',
                    id
                }

    axios({
        method: "post",
        url: "http://api.cat-shop.penkuoer.com/api/v1/shop_carts",
        data: {
        product:this.$route.query.id,
        quantity: 1
        },
        headers: {
        authorization: "Bearer " + localStorage.getItem("token")
        }
    }).then(function(res) {
        let quantity=res.quantity;
        console.log(quantity)
        if(quantity==1){
            this.$notify({ type: 'success', message: '成',duration:1000});
        }else{
        }
    });
        },
    //点击加入购物车

    },
}
</script>
<style>
.xqing{
    margin-bottom: 2rem
}
.van-row .van-col--16 {
 width: 100%;
}
.content{
    padding: 10px 10px
}
h1{
    line-height: 1rem;
    font-size: .5rem;
    color: #000
}
h3{
     line-height: .7rem;
    font-size: .4rem;
    color: #000
}
.p{
    margin-left: .7rem;
    color:#70788c
}
</style>
