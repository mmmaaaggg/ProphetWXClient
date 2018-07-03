import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	pages: [],
	config: {
		"navigationBarBackgroundColor": "#78A0ED",
		usingComponents: {
          'ec-canvas': '../../../static/ec-canvas/ec-canvas',
        }
	}
}