<template>
    <div>
        <!-- <h1>这是订单详情页面</h1> -->
        <img :src="pimg | Img" alt='图片加载失败' class="aaa"/>
        <div class="title">{{title}}</div>
    </div>
</template>
<style scoped>
.aaa{
    width: 100%;
    height: 300px;
}
.title{
    width: 70%;
    height: 55px;
    font-size:18px;
    line-height: 55px;
    padding-left:27px ;
}
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return {
           pimg:'',
           title:''
        }
    },
    created(){
        // console.log(this.$route)
        console.log(this.$route.query.id)
        let pid=this.$route.query.id
        axios.get('http://api.cat-shop.penkuoer.com/api/v1/products/'+pid).then(res=>{
            console.log(res)
           this.pimg=res.data.coverImg 
           this.title=res.data.descriptions
        })
    },
    filters:{
            Img(res){
                    return res.startsWith('http')?res:'http://api.cat-shop.penkuoer.com'+res
                    // return img.startsWith('http') ? img :'server'+img
            }
        }
   
}
</script>