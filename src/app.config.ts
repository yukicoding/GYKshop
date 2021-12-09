export default {
  pages: ['pages/shop/index','pages/index/index',"pages/help/index","pages/me/index"],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '松田超市',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/shop/index",
        iconPath: "./assets/images/tab-bar/shop.png",
        selectedIconPath: "./assets/images/tab-bar/active-shop.png",
        text: "送货上门"
      }, {
        pagePath: "pages/help/index",
        iconPath: "./assets/images/tab-bar/help.png",
        selectedIconPath: "./assets/images/tab-bar/active-help.png",
        text: "跑腿接单"
      }, {
        pagePath: "pages/me/index",
        iconPath: "./assets/images/tab-bar/user.png",
        selectedIconPath: "./assets/images/tab-bar/user-active.png",
        text: "个人信息"
      },]
  }
};
