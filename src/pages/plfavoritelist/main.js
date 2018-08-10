import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	 config: {
	      "navigationBarBackgroundColor": "#FFFFFF",
	      "navigationBarTextStyle": "black",
	      "navigationBarTitleText": "待验证",
	      "backgroundColor": '#858181',
	      "enablePullDownRefresh": true,
	      usingComponents: {    
	        'wxc-icon': "../../../static/@minui/wxc-icon/index/index"
	      } 
    }
}