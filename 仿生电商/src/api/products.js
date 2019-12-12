import {get, post , del }from '../utils/request'

export function products(page){
    return get('/api/v1/products',{
        page
    })
}
//添加指定商品到  购物车
export function creatProduct(id){
    return post('/api/v1/products'+id)
}

// 获取指定ID的商品
export function productDetail(id){
    return get( '/api/v1/products/' + id)
}


// 购物车列表
export function goodList() {
    return get("/api/v1/shop_carts", {
        headers: {
        authorization: "Bearer " + localStorage.getItem("token")
    }
});
}

//删除商品
// export function delProduct(){
//     return del( ' /api/v1/shop_carts/' + id,{
//         headers: {
//             authorization: "Bearer " + localStorage.getItem("token")
//         }
//     })
// }

