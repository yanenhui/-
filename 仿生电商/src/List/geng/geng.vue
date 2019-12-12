<template>
    <div class="geng">
        <!-- <div class="list">
            <van-grid :border="false" :column-num="2">
                <van-grid-item  v-for="(item,index) in products" :key="index" :to="{name: 'adetails',query:{id:item._id}}">
                    <van-image class="sp" :src="reg.test(item.coverImg)?item.coverImg:'http://api.cat-shop.penkuoer.com'+item.coverImg"/>
                    <van-grid-item :text="item.descriptions" :to="{name: 'adetails',query:{id:item._id}}"/>
                </van-grid-item>
            </van-grid>
        </div> -->
        <div class="gnav">
            <span @click="fanHui"><van-icon name="arrow-left" />返回</span>
            <span>更多商品</span>
            <span></span>
        </div>
        <van-card   v-for="(item,index) in products" :key="index" @click="xiAng(item._id)"
            :num="item.quantity+'件'"
            :price="item.price"
            :desc="item.descriptions"
            :title="item.name"
            :thumb="reg.test(item.coverImg)?item.coverImg:'http://api.cat-shop.penkuoer.com'+item.coverImg"
        />
    </div>
</template>
<script>
import { products } from '../../services/movie'
export default {
    name: 'befor',
    data(){
        return {
            active:2,
            products:[],
            reg: /http/,
            btnFlag:false
        }
    },
    async created() {
        // const result = await products(1);
        const result = await products(this.$route.query.pa);

        console.log(result);
        this.products = result.data.products;
    },
    methods: {
        fanHui() {
            this.$router.go(-1)
        },
        xiAng(id) {
            this.$router.push({name:'Xqing',query: {id:id}})
        }
    }
}

</script>

<style scoped>
    .gnav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 1rem;
        margin: 0 auto;
    }
</style>