import { post } from "../utils/request";

/**
 * 获取所有的热映信息
 */
export function allHotMovies() {
  return post("/api/v2/proxy", {
    url: "https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290"
  });
}

import { get } from "../utils/request";

export function products(page = 1) {
    return get("/api/v1/products", {
      params:{
        per:8,
        page
      }
    });
}
export function oneProducts(id) {
    return get("/api/v1/products/" + id);
}



/**
 * 根据id获取影片详情
 * @param {*} id
 */
export function movie(id) {
  return post("/api/v2/proxy", {
    url:
      "https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=" +
      id
  });
}
