import axios from "axios";

const instance = axios.create({
  timeout: 5000, // 超时时间
  baseURL: "http://api.cat-shop.penkuoer.com" // 表示web服务器的根地址
});

export function get(url, config) {
  return instance.get(url, config);
}

export function post(url, data, config) {
  return instance.post(url, data, config);
}

//根据ID删除商品
export function del(url){
  return service.delete(url)
}