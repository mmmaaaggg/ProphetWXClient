import Vue from 'vue'
import App from './index'

import "../../../static/iconfont/iconfont.css";

const app = new Vue(App)
app.$mount()


export default {
	config: {
		"navigationBarBackgroundColor": "#ffffff",
		"navigationBarTitleText": "我的组合",
		usingComponents: {
          'ec-canvas': '../../../static/ec-canvas/ec-canvas',
        }
	}
}