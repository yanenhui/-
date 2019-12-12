<template>
    <div class="shezhi">
        <div class="zhe"> </div>
        <div class="tou" @click="btndian">
            <img href="#" class="zhu" :src="touxiang"/>
            <a href="#">{{name}}</a>
            <p class="bian" @click="flag=true">编辑</p>
        </div>
        <div v-show="flag" class="yin">
            <div class="xiu">
                <p>修改昵称</p>
                <input type="text" v-model="name"/>
                <div>
                    <button @click="qu">取消</button>
                    <button @click="que">确定</button>
                </div>
            </div>
        </div>
        <!-- <van-button type="danger" size="large">退出登录</van-button> -->
        <button class="btnOut" @click="logOut">退出登录</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            touxiang:'',
            name:'',
            flag:false
        }
    },
    methods:{
        btndian(){

        },
        logOut(){
            localStorage.removeItem('token')
            this.$router.push({
                name:'after'
            })
        },
        qu(){
            this.flag=false
            // this.$router.push({
            //     name:'shezhi'
            // })
        },
        que(){
            console.log(11)
            // this.name=name;
            // this.flag=false
            let token=localStorage.getItem('token')
            axios.get('http://api.cat-shop.penkuoer.com/api/v1/users/info',{
                headers:{
                'authorization': 'Bearer '+token, //这里有一个空格
                // name=this.name
                }   
            }).then(res=>{
                console.log(res)
               res.data.nickName=this.name
            //    localStorage.setItem('token',)
            })
            this.flag=false
        }
    },
    created(){
        let token=localStorage.getItem('token')
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
</script>
<style scoped>
.zhe{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
    background: #fff
}
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
/* .about{
  width: 10rem;
  position: relative;
} */
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
    color: #ace709;
    /* vertical-align: text-bottom; */
    margin-bottom:0.2rem;
    float: left;
    margin-left:0.2rem  
}
.bian{
    font-size: 20px;
    color: red;
    display: block;
    float:right;
    margin-right:0.5rem; 
}
.btnOut{
    width: 80%;
    height: 7%;
    background: transparent;
    position: fixed;
    left: 10%;
    bottom: 8%;
    /* margin-left:10%;
    margin-bottom:10%; */
    font-size: 0.5rem;
    border: 1px solid red;
    color: #ace709  
}
.yin{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ccc;
    opacity: 0.8;
    z-index: 10000000;
}
.xiu{
    width: 65%;
    height: 24.3%;
    background: #fff;
    margin-left:20%;
    margin-top:40%;
    font-size: 0.5rem;
    overflow: hidden;  
}
.xiu p{
    display: block;
    width: 60%;
    height: 20%;
    margin-top:0.5rem;
    margin-left:0.4rem  
}
.xiu input{
    width: 70%;
    height: 20%;
    margin-left:0.7rem;
    border: #ace709 solid 1px;
    margin-top:0.4rem;
    padding:0 0.4rem   
}
.xiu button{
    width: 50%;
    height: 1rem;
    margin-top:0.74rem;
    background: transparent;
    border: 0
}
.xiu button:first-of-type{
    background: #ccc;
    opacity: 0.6;
}
.xiu button:last-of-type{
    background: #ace709
}
</style>