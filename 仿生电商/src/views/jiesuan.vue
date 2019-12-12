<template>
    <div class="jiesuan">
        <!-- <h1>这是结算页面</h1> -->
        <div class="top">
            <div>
                <img :src="pimg"/>
                <p>{{nickName}}</p>
                <button @click="huan">更换账号</button>
            </div>
        </div>
        <van-card
            :price="price"
            :desc="desc"
            :title="name"
            :thumb="img | glq"
        />

        <div class="zhi">
            <ul>
                <li>
                    <p class="fang">支付方式</p>
                    <div class="xian" v-show="xin">
                        <span class="iconfont icon-weixinzhifu"></span>
                        <p>微信支付</p>
                    </div>
                    <div class="xian" v-show="bao">
                        <span class="iconfont icon-umidd17"></span>
                        <p>支付宝</p>
                    </div>
                    <span class="iconfont icon-arrow-left" v-show="jian" @click="jian0"></span>
                    <span class="iconfont icon-shangjiantou" v-show="!jian" @click="jian1"></span>
                </li>
                <li v-show="cun">
                    <span class="iconfont icon-weixinzhifu"></span>
                    <p>微信支付</p>
                    <span class="iconfont icon-yuanquanduihao" v-show="dui" @click="dui=!dui"></span>
                    <span class="iconfont icon-39" v-show="!dui" @click="dui=!dui"></span>
                    </li>
                <li v-show="cun">
                    <span class="iconfont icon-umidd17"></span>
                    <p>支付宝</p>
                    <span class="iconfont icon-yuanquanduihao" v-show="!dui" @click="dui=!dui"></span>
                    <span class="iconfont icon-39" v-show="dui" @click="dui=!dui"></span>
                </li>
                <!-- <li>花呗支付</li> -->
            </ul>
        </div>
        <div class="you">
            <button class="quan" @click="zhuan">优惠码兑换></button>
        </div>
        <div class="wen">
            <p>注意:订单不支持退款、转让、提交订单表示你同意《用户付费协议》</p>
        </div>
        <van-submit-bar
        label="实付金额"
            :price="price"
            button-text="立即支付"
            @submit="ti"
        />
    </div>
</template>
<style scoped>
.wen{
    width: 90%;
    margin-left:5%;
    font-size: 14px;
    color: #999 
}
.you{
    width: 100%;
    height: 40px;
    margin-top:20px 
}
.you button{
    float: right;
    background: #fff;
    border: 0;
    margin-right:20px;
    font-size: 14px 
}
.zhi li .xian{
    width: 160px;
    height: 40px;
    float: left;
    margin-left:40px 
}
.xian p{
    float: left;
}
.xain .icon-weixinzhifu{
    float: left;
    color: rgb(0, 255, 76);
    font-size: 20px;
    margin-left:10px;
    margin-right:5px  
}
.xian .icon-umidd17{
    color: rgb(3, 125, 173);
     float: left;
      font-size: 20px;
    margin-left:10px;
    margin-right:5px  
}
.icon-umidd17{
    float: left;
    color: rgb(3, 125, 173);
    margin-left:35px;
    margin-right: 10px; 
    font-size: 20px;
    

}
.icon-39{
float: right;
margin-right:10px;
font-size: 20px 
}
.icon-yuanquanduihao{
    float: right;
    color: red;
    margin-right:10px;
    font-size: 20px 
}
.icon-weixinzhifu{
    float: left;
    color: rgb(0, 255, 76);
    font-size: 20px;
   margin-right: 10px; 
    margin-left:35px 
}
.zhi li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px
}
.fang{
    margin-left:20px 
}
*{
    margin: 0;
    padding: 0
}
.zhi li p{
    float: left;
    
}
.icon-arrow-left{
    font-size: 22px;
    float: right;
    margin-right:10px 
}
.icon-shangjiantou{
    font-size: 22px;
    float: right;
    margin-right:10px 
}
.van-submit-bar__price {
    color: #ee0a24;
    font-size: 20px;
    margin-right:80px;
    margin-left:20px 
}
.top{
    width: 100%;
    height: 110px;
}
.top div button{
    height: 30px;
    width: 100px;
    float: right;
    font-size:14px;
    margin-top:35px;
    background: #fff;
    color: #ee0a24;
    border: 0  
}
.top p{
    margin: 0;
    padding: 0;
    display: block;
    float: left;
    width:100px;
    height: 100px;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
    color: chartreuse
}
.top img{
    display: block;
    width: 50px;
    height: 50px;
    float:left;
    border-radius:50%;
    margin-top:25px;
    margin-left:25px   
}
.van-card__title {
    max-height: 32px;
    font-weight: 500;
    line-height: 20px;
    font-size: 13px;
}
.van-card__price {
    display: inline-block;
    color: #ee0a24;
    font-weight: 500;
    margin-left: 100px;
    margin-top: 30px;
}
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            name:'',
            desc:'',
            img:'',
            price:'',
            nickName:'',
            pimg:'',
            dui:true,
            jian:true,
            bao:false,
            xin:false,
            cun:true
        }
    },
    methods:{
        huan(){
            this.$router.push({
                name:'after'
            })
        },
        ti(){
           this.$notify({ type: 'success',duration:1000, message: '暂未开启支付功能' });
        },
        jian0(){
            this.jian=!this.jian
            this.cun=false
            if(this.dui==true){
                this.xin=true
                this.bao=false
            }else{
                this.bao=true
                this.xin=false
            }
        },
        jian1(){
            this.jian=!this.jian
            this.cun=true
            this.xin=false
            this.bao=false
        },
        zhuan(){
            this.$router.push({
                name:'youhui'
            })
        }
    },
     filters:{
            glq(res){
                    return res.startsWith('http')?res:'http://api.cat-shop.penkuoer.com'+res
                    // return img.startsWith('http') ? img :'server'+img
            }
        },
    created(){
        //获取用户信息
        let token=localStorage.getItem('token')
        axios.get('http://api.cat-shop.penkuoer.com/api/v1/users/info',{
            headers:{
                authorization:'Bearer '+token
            }
        }).then(res=>{
            console.log(res)
            this.nickName=res.data.nickName
            this.pimg=res.data.avatar
        })

        //根据id获取商品详情
        console.log(this.$route)


        let pid=this.$route.query.id
        //console.log(pid)
        // this.price=this.$route.query.price
        axios.get('http://api.cat-shop.penkuoer.com/api/v1/products/'+pid).then(res=>{
            // console.log(res)
            this.name=res.data.descriptions
            this.desc=res.data.name
            this.img=res.data.coverImg
            this.price=res.data.price
        })
    }
}
</script>