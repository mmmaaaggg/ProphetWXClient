import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: 
    [
      "pages/combinelist/main",
      "pages/predictlist/main",
      "pages/createPredict/main",
      "pages/createCombine/main",
      "pages/detailcb/main",
      "pages/historylist/main",
      "pages/detailpred/main",
      "pages/manual/main",
      '^pages/index/main'  
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '预言家',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "list": [
      {
        "pagePath": "pages/index/main",
        "text": "首页",
        "iconPath": "static/resources/images/home.png",
        "selectedIconPath": "static/resources/images/home-active.png"
      },
      {
        "pagePath": "pages/predictlist/main",
        "text": "我的预测",
        "iconPath": "static/resources/images/list.png",
        "selectedIconPath": "static/resources/images/list-active.png"
      },
      {
        "pagePath": "pages/combinelist/main",
        "text": "我的组合",
        "iconPath": "static/resources/images/user.png",
        "selectedIconPath": "static/resources/images/user-active.png"
      }
    ],
      "position": "bottom",
      "backgroundColor": "#fff",
      "color": "#2c2c2c",
      "selectedColor": "#84B9E5"
    }
  }
}
