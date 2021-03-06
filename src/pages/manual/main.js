import Vue from 'vue'
import App from './index'


const app = new Vue(App)
app.$mount()

export default {
	 config: {
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "详细调仓",      
      usingComponents: {    
        'wxc-progress': "../../../static/@minui/wxc-progress/index/index",
      } 
    }
}