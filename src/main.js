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
    pages: [
      "pages/list/main",
      "pages/user/main",
      '^pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#48B13C',
      navigationBarTitleText: '预言家',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "list": [
      {
        "pagePath": "pages/index/main",
        "text": "首页",
        "iconPath": "resources/images/home.png",
        "selectedIconPath": "resources/images/home-active.png"
      },
      {
        "pagePath": "pages/list/main",
        "text": "文章",
        "iconPath": "resources/images/list.png",
        "selectedIconPath": "resources/images/list-active.png"
      },
      {
        "pagePath": "pages/user/main",
        "text": "我的",
        "iconPath": "resources/images/user.png",
        "selectedIconPath": "resources/images/user-active.png"
      }
    ],
      "position": "bottom",
      "backgroundColor": "#fff",
      "color": "#2c2c2c",
      "selectedColor": "#009688"
    }
  }
}