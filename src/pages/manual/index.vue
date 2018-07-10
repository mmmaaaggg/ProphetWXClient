<template>
  <div class="container">
  	<div class="hdcontainer">
  		<div class="history" @click="showlist(pl_id)">调仓历史</div>
  	</div> 	
  	<div class="addinfo" :hidden="addhide">
  	  <div class="zh-input">
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
  		<div class="addBtn" @click="addItem">添加</div>
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
            <span class="selected" @click="toggled">{{toggle}}</span>
            <span class="setgp" @click="resetStorage" :hidden="!addhide">调仓</span>
            <span class="setgp" @click="submitStorage" :hidden="addhide">创建</span>
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
                    <div class="item-delete" :hidden="deletehide" @click="deleteItem(index)">-</div>
                </div>
	            <div class="picker" :hidden="pickerhide">
	             	<picker 
		                mode="selector"
		                :range="priceList"
		                @change="bindChange($event,index)"
                    >
                        <div class="pickerpadding"></div>
                    </picker>
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
    		toggle: "开盘价",
    		addhide: true,
    		deletehide: true,
    		pickerhide: true,
    		ishide: true,
    		arrayList: [],
    		priceList: []
    	}
    },

    methods: {

    	showlist (id) {
    		wx.navigateTo({
    			url: "/pages/historylist/main?id=" + id
    		})
    	},

    	toggled () {
    		this.toggle = this.toggle == "开盘价" ? "收盘价" : "开盘价"
    	},

    	bindChange (e,index) {
    		let value = e.target.value
    		this.arrayList[index] = value

            let num = 0
            for (let item of this.arrayList) {
            	num += Number(item);
            }
            
            if (num > 100) {
            	value = 100 - (num - value)
            	wx.showToast({
            		title: "资金已耗尽",
            		duration: 1000
            	})
            }
             
            value = Number(value).toFixed(2)
            this.$set(this.arrayList,index,value)
    	},

    	addItem () {
            let flag = true;
	        for (let item of this.list) {
	           if (item.asset_name == this.gpname) {
	               flag = false;
	           }
	        }
	        if (this.gpname && flag ) {
	           this.list.push({
	             category: this.category,
	             asset_name: this.gpname,
	             asset_type: this.type,
	             asset_code: this.code,
	             direction: 1
	           });
	           this.arrayList.push(0);
	           this.gpname = '';
	        } else if (this.gpname && !flag) {
	            wx.showToast({
	               title: "不能输入相同内容",
	               duration: 1000
	            });   
	          } else {
	               wx.showToast({
	                 title: "不能为空",
	                 duration: 1000
	               });
	            } 
    	},

    	deleteItem (index) {
            this.list.splice(index,1)
            this.arrayList.splice(index,1)
    	},

    	resetStorage () {
    		this.addhide = false;
    		this.deletehide = false;
    		this.pickerhide = false;

            for (let i = 0; i <= 100; i++) {
            	this.priceList.push(i)
            }
    	},

    	submitStorage () {
            this.addhide = true

            let time = env.formatTime(new Date()).split(" ")[0];
            let price_type = this.toggle == "开盘价" ? 'open' : 'close'
            let data = this.list
            let obj = {
            	"trade_date": time,
            	"price_type": price_type,
            	"data": this.list
            }
            let url = env.host + `forecast/pl_data/update/${this.pl_id}`
            let token = wx.getStorageSync("token")

            wx.request({
                url: url,
                header: {
                	token: token
                },
                method: 'POST',
                data: obj
            })

            wx.showToast({
            	title: "调仓已提交",
            	duration: 1000
            })
    	},

    	bindInput (e) {
	        this.gpname = e.target.value;
	        let url = `https://prophets.top/asset/get_list/${this.gpname}`;
	        wx.request({
	          //url: 'http://127.0.0.1:6060/search',
		        url: url,
		        success: (res) => {
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
.history:active {
  background: #E4E2E2;
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
.selected {
  padding: 5rpx;
  border: 1px solid #878686;
  border-radius: 6px;
}
.setgp { 
  padding: 5rpx;
  border: 1px solid #878686;
  margin-right: 3vw;
  border-radius: 6px;
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
  width: 35vw;
  position: absolute;
  left: 30vw;
}
.gpxs {
  font-size: 0.8em;
  right: 2vw;
  display: flex;
  position: absolute;
}
.zh-input {
  width: 70%;
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
  width: 
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
  justify-content: space-between;
}
.addBtn {
  margin-right: 3vw;
  border: 1px solid #878686;
  padding: 5rpx;
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 6px;
}
.item-delete {
  border-radius: 50%;
  border: 2rpx solid black;
  margin-left: 2vw;
  width: 20px;
  height: 20px;
  text-align: center;
}
.addBtn:active,.setgp:active,.item-delete:active {
  background: #878686;
}
.first-title {
  font-weight: bold;
  background: #F37878;
}
.picker {
  width: 20vw;
  height: 8vh;
  left: 0;
  position: absolute;
}
.pickerpadding {
  height: 8vh;
}
</style>