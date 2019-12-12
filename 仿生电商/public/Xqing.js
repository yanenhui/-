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
        loading: true

        };
    },
    // 获取图片的ID
    async created(){
        this.id=this.$route.query.id
        const result=await productDetail(this.id);
        this.product=result.data;
        console.log(this.product)

        // 判断图片的样式
        this.imageUrl = this.product.coverImg.startsWith('http')? this.product.coverImg: server + this.product.coverImg
    },
    methods:{
        // 点击购物车图标跳转到购物车
        onClickIcon() {
            this.$router.push({
                name: "Cart"
            });
        },
    //点击小图标
        onClickIcon(id) {
        //     this.$router.push({
        //     name:'cart',
        //     query:{
        //         id
        //     }
        // })
        },
         //点击购物车，传ID到购物车
        onClickButton(id) {

            this.$router.push({
            name:'cart',
            query:{
                id
            }
        })

        },
    //点击加入购物车

    },
}