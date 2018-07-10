import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	 config: {
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "历史调仓",
      "backgroundColor": '#E9EBEC',
      "enablePullDownRefresh": true
    }
}