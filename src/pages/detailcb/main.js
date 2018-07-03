import Vue from 'vue'
import App from './index'

import "../../../static/iconfont/iconfont.css";

const app = new Vue(App)
app.$mount()


export default {
	config: {
		"navigationBarBackgroundColor": "#78A0ED",
		"navigationBarTextStyle":"#fff",
		usingComponents: {
          'ec-canvas': '../../../static/ec-canvas/ec-canvas',
          'wxc-icon': "../../../static/@minui/wxc-icon/index/index"
        }
	}
}