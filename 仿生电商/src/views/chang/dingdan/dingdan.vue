<template>
    <div class="dingdan">
        <!-- <div class="top">
            <router-link :to="{name:'quanbu'}" @click="quan" ref="suo">全部订单</router-link>
            <router-link :to="{name:'daizhifu'}">待支付</router-link>
            <router-link :to="{name:'chenggong'}">交易成功</router-link>
            <router-link :to="{name:'guanbi'}">交易关闭</router-link>
        </div> -->
        <van-tabs v-model="active">
            <van-tab title="全部订单" id="top" ref="top1">
                <div v-for="item in list" :key="item._id">
                    <p v-show="flag"  class="bottom">你还没有订单</p>
                    <!-- <div v-show="flag001" v-for="item in list" :key="item.id">
                        <div class="box">
                            <p>{{item.name}}</p>
                            <img :src="item.img" class="tu"/>
                            <span>{{item.prisc}}</span>
                        </div> 
                    </div> -->
                    <router-link :to="{name:'Xqing',query:{
                        id:item._id
                    }}">
                    <van-card v-show="!flag"
                                :num="item.quantity"
                                :price="item.price"
                                :desc="item.name"
                                :title="item.descriptions"
                                :thumb="item.coverImg | glq"
                                />
                    </router-link>
                </div>
            </van-tab>
            <van-tab title="待支付" class="top">
                <div class="bottom">
                    <p>你还没有待支付订单</p>
                </div>
            </van-tab>
            <van-tab title="交易成功" class="top">
                <div class="bottom">
                    <p>你还没有交易成功的订单</p>
                </div>
            </van-tab>
            <van-tab title="交易关闭" class="top">
                <div class="bottom">
                    <p>你还没有交易关闭订单</p>
                </div>
            </van-tab>
        </van-tabs>
        <!-- <div class="bottom">
            <router-view></router-view>
        </div> -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            flag:false,
            list:[],
            active:''
        }
    },
    methods:{
        // xiang(){
        //     this.$router.push({
        //         name:'xiangqing',
        //         query:{
        //             id:this.item.id
        //         }
        //     })
        // }
    },
    created(){
        let token=localStorage.getItem('token')
        //这个是访问订单详情的列表，但是我们没有钱去买，所以我们就来拿商品列表吧
        // axios.get('http://api.cat-shop.penkuoer.com/api/v1/orders',{
        //     headers:{
        //         authorization:'Bearer '+token
        //     }
        // })

        axios.get('http://api.cat-shop.penkuoer.com/api/v1/products',{
            params:{
                per:6, // 商品数量
                page:39 // 商品页面
            }
        })
        .then(res=>{
            console.log(res)
            this.list=res.data.products
        //     this.list.push(
        //         {
        //             _id:1,
        //             quantity:3,
        //             descriptions:"这是一直小狗狗",
        //             name:'小狗',
        //             price:300,
        //             coverImg:"https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1067412999,107277101&fm=5"
        //         },
        //         {
        //             _id:2,
        //             quantity:5,
        //             descriptions:"这是一直小猫猫",
        //             name:'小猫',
        //             price:900,
        //             coverImg:'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1855682282,311511202&fm=5'
        //         }
        // )
            if(this.list.length==0){
                this.flag=true
                
            }else{
                this.flag=false
                this.$refs.top1.style='background-color:#fff'
                
            }
        })
        },
        filters:{
            glq(res){
                    return res.startsWith('http')?res:'http://api.cat-shop.penkuoer.com'+res
                    // return img.startsWith('http') ? img :'server'+img
                
            }
        }

        
    
}
</script>
<style scoped>
.van-tabs .van-tabs__line {
    background-color: #2cc17b;
}

.bottom{
    height: 300px;
    background: url('//edu-image.nosdn.127.net/D5953949E6CDF0A006E1DE80C025FBB4.png') no-repeat center center;
    text-align: center;
    line-height: 550px;
    color: rgb(177, 6, 6);
    font-size: 18px
}
/* .bottom .you{
    width: 100%;
    height: 60px;
    line-height: 20px
} */
/* .van-tabs{
    title-active-color: blue
} */
/* html{
    font-size: 37.5px
} */
/* .top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    height: 1.4rem;
    border-bottom:1px solid #ccc 
}
.top a{
    color: #000 
} */
/* .bottom{
    height: 10rem;
    background: url('//edu-image.nosdn.127.net/D5953949E6CDF0A006E1DE80C025FBB4.png') no-repeat center center;
    text-align: center;
    line-height: 16rem;
    color: rgb(177, 6, 6);
    font-size: 18px
} */
</style>