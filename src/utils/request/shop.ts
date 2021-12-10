import request from './request'


 export const getShopList = ()=>{
  return request({
    url:'/api/shop/list',
    method:'get'
  })
}

