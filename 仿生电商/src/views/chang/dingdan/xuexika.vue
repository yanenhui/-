<template>
    <div>
        <van-search placeholder="请输入搜索关键词" v-model="value" />
        <van-tabs type="card">
            <van-tab title="全部">
                <van-card
                    v-for="item in list"
                    :key="item._id"
                    :num="item.quantity"
                    :price="item.price"
                    :desc="item.name"
                    :title="item.descriptions"
                    :thumb="item.coverImg | glq"
                    @click="ggg(item._id)"
                />
            </van-tab>
            <van-tab title="已学习">
                <van-card
                    v-show="flag"
                    v-for="item in list"
                    :key="item._id"
                    :num="item.quantity"
                    :price="item.price"
                    :desc="item.name"
                    :title="item.descriptions"
                    :thumb="item.coverImg | glq"
                    @click="ggg(item._id)"
                >
                <div slot="footer">
                        <van-button size="mini" type="primary" @click.stop="kai">开始学习</van-button>
                        <van-button size="mini" type="warning" @click.stop="wan">学习完成</van-button>
                </div>
                </van-card>
            </van-tab>
            <van-tab title="待学习">
                <van-card
                    v-show="!flag"
                    v-for="item in list"
                    :key="item._id"
                    :num="item.quantity"
                    :price="item.price"
                    :desc="item.name"
                    :title="item.descriptions"
                    :thumb="item.coverImg | glq"
                    @click="ggg(item._id)"
                >
                <!-- <div slot="tags">
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </div> -->
                    <div slot="footer">
                        <van-button size="mini" type="primary" @click.stop="kai">开始学习</van-button>
                        <van-button size="mini" type="warning" @click.stop="wan(item._id)">学习完成</van-button>
                    </div>
                 </van-card>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            value:'',
            list:[],
            flag:''
        }
    },
    methods:{
        ggg(id){
            this.$router.push({
                name:'xiangqing',
                query:{
                    id
                }
            })
        },
        wan(id){
            this.flag=true
        },
        kai(){
            this.flag=false
        }
    },
    created(){
        axios.get('http://api.cat-shop.penkuoer.com/api/v1/products',{
            params:{
                per:8,
                page:6
            }
        }).then(res=>{
            console.log(res)
            this.list=res.data.products
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