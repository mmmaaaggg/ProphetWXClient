import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	config: {
	  "navigationBarBackgroundColor": "#FFFFFF",
	  "navigationBarTextStyle": "black",
	  "navigationBarTitleText": "组合列表",
	  "backgroundColor": '#040404',
	  "enablePullDownRefresh": true,
	  usingComponents: {    
          'wxc-icon': "../../../static/@minui/wxc-icon/index/index"
        } 
	}
}