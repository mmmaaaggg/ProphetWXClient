import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	config: {
	  "navigationBarBackgroundColor": "#010101",
	  "navigationBarTextStyle":"#fff",
	  "navigationBarTitleText": "自由组合",
	  "backgroundColor": '#040404',
	}
}