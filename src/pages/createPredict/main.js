import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	config: {
	  "navigationBarBackgroundColor": "#646363",
	  "navigationBarTextStyle":"#fff",
	  "navigationBarTitleText": "建立预测",
	  "backgroundColor": '#040404',
	  usingComponents: {
        'wxc-input': "../../../static/@minui/wxc-input/index/index"
      }
	}
}