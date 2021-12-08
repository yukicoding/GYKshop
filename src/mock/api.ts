var Mock = require('mockjs')

// 定义数据类型
export default Mock.mock('/api',{
  // 20条数据
  "data|20": [{
    // 商品种类
    "goodsClass": "女装",
    // 商品Id
    "goodsId|+1": 1,
    //商品名称
    "goodsName": "@ctitle(10)",
    //商品地址
    "goodsAddress": "@county(true)",
    //商品等级评价★
    "goodsStar|1-5": "★",
    //商品图片
    "goodsImg": "@Image('100x100','@color','小甜甜')",
    //商品售价
    "goodsSale|30-500": 30

  }]
})