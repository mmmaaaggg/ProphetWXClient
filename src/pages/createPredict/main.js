import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
    config: {
      "navigationBarBackgroundColor": "#646363",
      "navigationBarTextStyle":"#fff",
      "navigationBarTitleText": "建立预测"
    },
}