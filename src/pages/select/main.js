import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
     config: {
          "navigationBarBackgroundColor": "#FFFFFF",
          "navigationBarTextStyle": "black",
          "navigationBarTitleText": "添加股票",
          "backgroundColor": '#858181'
    }
}
