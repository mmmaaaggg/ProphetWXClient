<template>
  <div class="container">
  	<div class="hdcontainer">
  		<div class="history">调仓历史</div>
  	</div> 	
  	<div class="addinfo">
  	  <div class="zh-input" :hidden="addhide">
        <div class="input-gp">
            <input
		        placeholder="投资组合"
		        placeholder-style='text-align:center'
		        v-model="query"
		        :value="gpname"
		        @input="bindInput($event)"
		        @focus="ishide=false"
		        @blur="ishide=true"
            />
        </div>
      </div>
  		<div class="addBtn">添加</div>
  	</div>
  	<div class="search-content" :hidden="ishide">
	        <scroll-view scroll-y="true" class="scroll" >
		        <ul>
		            <li
		                class="first-item"
		                v-for="(item,index) in namelist"
		                :key="index"
		            >       
		                <div class="first-title item-info">{{item.text}}</div>  
		                <ul>
			                <li
			                  class="second-item"
			                  v-for="(second,cindex) in item.children"
			                  :class="{ odd : cindex % 2 == 0 }"
			                  @click="chooseItem(second.asset_name,item.text,second.asset_type,second.asset_code)"
			                  :key="cindex"
			                >
			                  <span>{{second.text}}</span>
			                  
			                </li>
		              </ul>
		           </li>
		        </ul>
	        </scroll-view>
    </div>
  
  	<div class="gpdc">
         <div class="gpbt">
             <span class="gpsubt">当前仓位</span>
             <span class="setgp">调仓</span>
         </div>
         <div class="gpItemContainer">
             <div class="gpItem" v-for="(items,index) in list" :key="index">
	             <div class="gp-name">
	                 <div class="gpjtmz">{{items.asset_name}}</div>
	                 <div class="gp-code">{{items.asset_code}}</div>
	             </div>
                 <div class="slider">
             	     <wxc-progress 
             	         :percent="arrayList[index]" 
             	     />
                 </div>
                 <div class="gpxs">
                     <span class="weight">{{arrayList[index]}}%</span>
                 </div>
             </div>
         </div>
         
    </div>
  </div>
</template>

<script>


import * as apiLogin from '../../components/login'
import * as env from '../../utils/index'



export default {
    data () {
    	return {
    		query: '',
    		gpname: '',
    		pl_id: '',
    		list: '',
    		namelist: '',
    		category: '',
    		type: '',
    		code: '',
    		addhide: false,
    		ishide: true,
    		arrayList: []
    	}
    },

    methods: {

    	bindInput (e) {
	        this.gpname = e.target.value;
	        let url = `https://prophets.top/asset/get_list/${this.gpname}`;
	        wx.request({
	          //url: 'http://127.0.0.1:6060/search',
		        url: url,
		        success: (res) => {
		        	console.log(res.data)
		            this.namelist = res.data.results;
		        }
            })
        },
        chooseItem (name,category,type,code) {
	        this.gpname = name;
	        this.category = category;
	        this.type = type;
	        this.code = code;
        },

    	loadList () {
    		let that = this;
    		let token = wx.getStorageSync('token');
    		wx.request({
    			url: env.host + `forecast/pl/get_data_list/${that.pl_id}/latest`,
    			header: {
                    token: token
                },
    			success (res) {
    		        if (res.data.count) {
                     that.list = res.data.data[0].data;
                     for (let i = 0; i < that.list.length; i++) {
                         that.arrayList[i] = (that.list[i].weight * 100).toFixed(2);
                     }
                }
    			}
    		})
    	}
    },

    mounted () {
    	this.pl_id = this.$root.$mp.query.pl_id
    	this.loadList()
    }
}
</script>

<style>
html,body {
  height: 100%;
  width: 100%;
}
.hidden {
  display: none;
}
.container {
  height: 100%;
  width: 100%;
  background: #E4E2E2;
}
.hdcontainer {
  height: calc(70rpx + 3vh);
}
.history {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  width: 100%;
  position: absolute;
  top: 1.5vh;
  height: 70rpx;
}
.gpdc {
  background: #fff;
}
.gpbt {
  height: 70rpx;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
  font-size: 0.8em;
}
.gpsubt {
  padding-left: 2vw;
}
.setgp { 
  padding-right: 5vw;
}
.gpItem {
  border-top: 1px solid #CBCBCB;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
}
.gp-name {
  font-size: 0.8em;
  margin-left: 2vw;
}
.gp-code {
  font-size: 0.7em;
  color: #B6AEAE;
}
.weight-code {
  margin-left: 2vw;
  margin-right: 2vw;
}
.slider {
  width: 40vw;
}
.gpxs {
  font-size: 0.8em;
  margin-right: 2vw;
}
.zh-input {
  width: 80%;
  padding-left: 2vw;
}
.input-gp {
  text-align: center;
}
.search-content {
  background: #F9A9A9;
  width: 100%;
  height: 20vh;
  position: relative;
}
.first-item {
  text-align: center;
  position: relative;
}
.first-item>ul {
  top: 20px;
}
.second-item {
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
}
.odd {
  background: #90BCD8;
}
.scroll {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
input {
  border: 1px solid #F6E4E4;
  font-size: 0.8em;
}
.addinfo {
  display: flex;
  background: #fff;
  margin-bottom: 1vh;
  height: 70rpx;
  align-items: center;
}
.addBtn {
  margin-left: 5vw;
  border: 1px solid #F6E4E4;
  padding: 6rpx;
  font-size: 0.8em;
}
.first-title {
  font-weight: bold;
  background: #F37878;
}
</style>