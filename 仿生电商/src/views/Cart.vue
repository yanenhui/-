<template>
  <div class="cart">
    <div class="header">
      <van-row type="flex" justify="space-between" @click="onClickLeft()">
        <van-col span="6">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="6">购物车</van-col>
        <van-col span="6">
          <van-icon name="search" />
        </van-col>
      </van-row>
    </div>
    <div class="tag">
      <!-- *********************商品循环展示***************************** -->
      <div class="cart_list" v-for="item in carList" :key="item._id">
        <div class="item">
          <van-checkbox-group v-model="result">
            <van-checkbox checked-color="orange" v-model="result" :name="item._id" ></van-checkbox>
          </van-checkbox-group>
        <!-- 放置图片 -->
          <div class="imgProduct">
            <img class="item_img" :src="item.product.coverImg | glq" />
          </div>
          <div class="info">
          <!-- 名字和价格 -->
            <h3>{{item.product.name}}</h3>
            <span class="price_g">售价: {{item.product.price}}元</span>
            <i @click="dele(item._id)"
            :to="{query:{id:item.product._id}}">删除</i>、

            <!-- 点击加号，点击减号的时候，价格改变 -->
            <div class="num">
              <!-- <div class="sub" @click="sub(index)">
                <span style="font-size:26px">-</span>
              </div>
              <span class="jishu">{{item.quantity}}</span>
              <div class="add" style="font-size:26px" @click="add(index)">
                <span>+</span>
              </div> -->
              <div class="dan" > 
                单价{{result.indexOf(item._id)>-1?item.product.price:0}}
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
    <!-- 支付 -->
    <div class="footer">
      <van-submit-bar :price="100*totalPrice"  button-text="立即结算" @submit="jiesuan">
        <van-checkbox

          v-model="checked"
          checked-color="#FF734C"
          
          @click="checkedAll"
        >全选</van-checkbox>
        <!-- <span>总价:{{totalPrice}}</span> -->
      </van-submit-bar>
    </div>
  </div>
</template>
<style>

.item{
  padding: 10px
}
</style>
<script>
import axios from "axios"
import { goodList } from "../api/products";
import { server } from "../utils/config";
import '../../public/Cart.css'
import { Dialog } from 'vant';
export default {
  created() {
    if (this.checked == false) {
      this.result = [];
    } else {
      this.carList.forEach(v => {
        this.result.push(v._id);
      });
    }
  },
   data() {
    return {
      active: 0,
      checked: false,
      carList: [], //购物车商品
      result: [] ,//选中的商品id
      price:'0'

    };
  },
  filters:{
            glq(res){
                    return res.startsWith('http')?res:'http://api.cat-shop.penkuoer.com'+res
                    // return img.startsWith('http') ? img :'server'+img
            }
        },
  computed: {
    //点击结算的时候，总价加
    totalPrice() {
      let totalPrice = 0;

      for (let i = 0; i < this.carList.length; i++) {
        if (this.result.indexOf(this.carList[i]._id) > -1) {
          totalPrice +=
            this.carList[i].product.price * this.carList[i].quantity;
        }
      }
      return totalPrice;
    },
    //单价
    danjia(){
      let danjia=0;


    }

  },
  // 接口请求
  async created() {
    const result = await goodList();
   // console.log(result);
    // this.carList = result.data;
    result.data.forEach(item => {
      if (item.product) {
        if(item.quantity=1){
          this.carList.push(item);
        }
      }
    });
    //console.log(this.carList);
  },
  methods: {
    //点击减的临界值
    // sub(index) {
    //   if (this.carList[index].quantity <= 0) {
    //     this.carList[index].quantity == 1;
    //   }else{
    //     this.carList[index].quantity--;
    //   }
    // },
    // add(index) {//加
    //   // console.log(this.carList[index]);
    //   this.carList[index].quantity++;
    // },
    // onClickLeft() {
    //   this.$router.go(-1);
    //   //console.log(111);
    // },
    //全选
    checkedAll() {
      this.checked = !this.checked;
      let arr = [];
      if (this.checked == false) {
        this.result = [];
        console.log(111111);

      } else {
        this.carList.forEach(v => {
          arr.push(v._id);
        });
        this.result = arr;
      }
    },

    //点击删除按钮删除商品
    dele(id){
      let that=this
        Dialog.confirm({
          message: '是否要删除改商品'
        }).then(() => {
          axios({
            method: "delete",
            url: "http://api.cat-shop.penkuoer.com/api/v1/shop_carts/" + id,
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }).then(function(res) {
            console.log(res);
            if(res ===1){
              that.$toast('删除成功');
              that.carList.splice(index,1);
              //加一个局部刷新属性
              // this.reload()
              
            }
              // this.loadData();
              window.location.reload()
          });

        }).catch(() => {
            that.$toast('已取消');
        });
    },
    //点击结算去结算页面
    jiesuan(id){
      this.$notify({ type: 'success', message: '暂未开启支付功能',duration:1000});
      // console.log(this.totalPrice)
      // this.$router.push({
      //        name:'about',
      //       query:{
      //         price:this.totalPrice
      //       }
      //   })
    },


  },

  watch: {
    // 全选
    result: function(newvalue) {
      if (newvalue.length == this.carList.length) {
        this.checked = true;
        
      } else {
        this.checked = false;
      }

    }
  }
};
</script>