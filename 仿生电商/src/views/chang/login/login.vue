<template>
    <div class="login">
        <div class="zhe"> </div>
        <!-- <van-icon name="arrow-left" @click="quafter" class="fan"/> -->
        <!-- <van-icon name="arrow-left" /> -->
        <div class="register">
        
        <form>

            <!-- 下面这个是输入电话号表单框 -->
            <div class="inputbox" ref="mybox">
                <div class="u-logo">
                    <div class="u-logo-img3"></div>
                </div>
                <div class="ipt1">
                    <input type="text" v-model="txt" maxlength="11" placeholder="请输入手机号" class="ipt" @input='shoujihao' @blur="shoujihao1" @focus="shoujihao2"/>
                </div>
                <div class="cha" v-show="flag" @click="xiao">×</div>
            </div>

            <!-- 下面这个是密码输入表单框 -->
            <div class="inputbox" ref="mybox1">
                <div class="u-logo">
                    <div class="u-logo-img2"></div>
                </div>
                <div class="ipt2">
                    <input type="password" v-model="password" maxlength="16" placeholder="8到16位密码，区分大小写" class="ipt01" @input='mima' @blur="mima1" @focus="mima2"/>
                </div>
                <div class="cha" v-show="flag01" @click="xiao01">×</div>
            </div>

            <div class="btn">
                <input v-model='count' type="text" class="count" >
                <button class="btn1" @click.prevent="btnclick">登录</button>
            </div>
        </form>
        </div>
    </div>
</template>
<style scoped>
/* .fan{
    font-size: 24px;
    margin: 10px
} */
*{
    padding: 0;
    margin: 0
}
.btn {
    margin-left: 0;
    color: #70788C;
}
.zhe{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
    background: #fff
}
.register{
    margin: 0 auto;
    width: 375px;
    position: relative;
    /* width: 420px; */
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
}
form{
    padding-top: 20px;
    box-sizing: border-box;
    width: 100%;
}
.inputbox{
    width: 333px;
    border-radius: 2px;
    height: 44px;
    line-height: 44px;
    z-index: 19;
    position: relative;
    height: 44px;
    margin-bottom: 0px;
    border: 1px solid #c5cddb;
    background: #fff;
    font-size: 12px;
   margin-left:20px;
    margin-top:40px 
}
.inputbox:last-of-type{
    margin-top:30px 
}
.u-logo{
    float: left;
    width: 21px;
    height: 46px;
    text-align: center;
    padding: 0 5px 0 10px;
}
.u-logo-img3{
    background: url(//nos.netease.com/edu-image/7A13709D12D506BA8CC110D88FFA1E68.png) no-repeat 0 -20px;
    background-position: 0 -70px;
    height: 36px;
}
.u-logo-img2{
   background: url(//nos.netease.com/edu-image/7A13709D12D506BA8CC110D88FFA1E68.png) -9999px -9999px no-repeat;
    background-position: 0 -34px;
    height: 36px;
}
.ipt1,.ipt2{
    display: block;
    position: relative;
    float: left;
    width: 267px;
    height: 44px;
}
.ipt01,.ipt{
    display: block;
    width: 257px;
    position: absolute;
    height: 44px;
    border: 0;
    z-index: 100;
    top: 0;
    left: 10px;
    /* color: #bdbdbd; */
    color:#000;
    font-size: 14px;
    font-weight: normal;
    cursor: text;
    /* height: 100%; */
}

/* 这个是输入框里面提示文字的默认样式改变 */
input::-webkit-input-placeholder {
        color: #ccc;
      }
.cha{
    width: 24px;
    height: 24px;
    float: right;
    color: #fff;
    font-size: 24px;
    text-align: center;
    background: #666;
    line-height: 24px;
    border-radius:50%;
    margin-top:10px;
    margin-right:5px   
}
.btn1{
    
    width: 335px;
    height: 44px;
    margin-top:0px;
    margin-left:20px;  
    background:#2CC17B;
    color: #fff;
    letter-spacing: 30px;
    font-size: 16px

}
.count{
    width: 200px;
    height: 24px;
    margin-top:10px;
    margin-left:-13px;
    color: red;
    border: 0;
    font-size: 12px;
    background: #fff 
}
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            txt:'',
            flag:false,
            password:'',
            flag01:'',
            count:''
        }
    },
    methods:{
        shoujihao(){
            if(this.txt==''){
                this.flag=false
            }else{
                this.flag=true
            }
        },
        xiao(){
            this.txt=''
            this.flag=false
        },
        mima(){
            if(this.password==''){
                this.flag01=false
            }else{
                this.flag01=true
            }
        },
        xiao01(){
            this.password='',
            this.flag01=false
        },
        shoujihao1(){
            this.$refs.mybox.style= 'border-color:#c5cddb'
            if(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.txt) || this.txt==''){
                // this.count=''
            }else{
                this.count='请输入正确的号码'
                //document.querySelectorAll('inputbox')[0].style.border='red'
                this.$refs.mybox.style= 'border-color:red'
            }
        },
        shoujihao2(){
            this.$refs.mybox.style= 'border-color:yellow'
            if(this.count=='请输入正确的号码'){
                this.count=''
                
            }
            
            
        },
        mima1(){
             this.$refs.mybox1.style= 'border-color:#c5cddb'
            // if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.password) || this.password==''){

            // }else{
            //     this.count='密码由6-16的字符组成，区分大小写'
            //     this.$refs.mybox1.style= 'border-color:red'
            // }
        },
        mima2(){
            this.$refs.mybox1.style= 'border-color:yellow'
            if(this.count=='密码不能为空'){
                this.count=''
            }
            // if(this.count=='密码由6-16的字符组成，区分大小写'){
            //     this.count=''
            // }else{

            // }
        },
        btnclick(){
            if(this.txt==''){
                this.count='请输入正确的号码'
            }else{
                if(this.password==''){
                    this.count='密码不能为空'
                }else{
                    if(this.count==''){
                        let data={
                        'userName':this.txt,
                        'password':this.password
                    }
                    axios.post('http://api.cat-shop.penkuoer.com/api/v1/auth/login',data).then(res=>{
                        console.log(res)
                        if(res.data.code=='success'){
                            this.$notify({ type: 'success', message: '登录成功',duration:1000});
                            localStorage.setItem('token',res.data.token)
                            this.$router.push({
                                name:'home'
                            })
                        }else{
                            this.count='请检查用户名或密码'
                        }
                        })
                    }
                    
                    
                }
            }
        }
       
        //     quafter(){
        //     this.$router.push({
        //     name:'after'
        //     })
        //  }
        
    }
}
</script>