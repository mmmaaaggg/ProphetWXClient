import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	config: {
		"navigationBarBackgroundColor": "#ffffff",
		"navigationBarTitleText": "我的预测",
		usingComponents: {
          'ec-canvas': '../../../static/ec-canvas/ec-canvas',
        }
	}
}