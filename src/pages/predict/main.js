import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	config: {
	  "navigationBarBackgroundColor": "#010101",
	  "navigationBarTextStyle":"#fff",
	  "navigationBarTitleText": "我的预测",
	  "backgroundColor": '#040404',
	  "enablePullDownRefresh": true,
	  usingComponents: {    
          'wxc-icon': "../../../static/@minui/wxc-icon/index/index"
        } 
	}
}