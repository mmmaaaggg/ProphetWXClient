import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
	"navigationBarBackgroundColor": "#fff",
	"navigationBarTextStyle":"#000",
	config: {
	    usingComponents: {
	      'wxc-icon': "../../../static/@minui/wxc-icon/index/index"
	    } 
  },
}