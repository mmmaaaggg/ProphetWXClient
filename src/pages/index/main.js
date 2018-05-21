import Vue from 'vue'
import App from './index'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
    listData: {}
};

const app = new Vue(App)
app.$mount()
