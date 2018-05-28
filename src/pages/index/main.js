import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	config: {
		pages: [],
		usingComponents: {
          'ec-canvas': '../../../static/ec-canvas/ec-canvas',
          'wxc-icon': "../../../static/@minui/wxc-icon/index/index"
        } 
	}
}