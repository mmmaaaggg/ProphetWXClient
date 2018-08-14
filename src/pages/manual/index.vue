<template>
  <div class="container">
    	<div class="hdcontainer">
    		  <div class="history" @click="showlist(pl_id)">调仓历史</div>
    	</div>
    	<div
          class="addinfo"
          :hidden="addhide"
          @click="addItem"
        >
      		<div>添加股票</div>
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
        		pl_id: '',
        		list: '',
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
            let pages = 'manual'
            wx.navigateTo({
                url: "/pages/select/main?pages=" + pages
            })
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
            let url = env.host + `/forecast/pl/data/${this.pl_id}`
            let token = wx.getStorageSync("token")

            wx.request({
                url: url,
                header: {
                    'content-type': 'json',
                	  token: token
                },
                method: 'PUT',
                data: obj,
                success (res) {
                    if (res.statusCode == 200) {
                        wx.showToast({
                            title: '调仓已提交',
                            duration: 1500
                        })
                    }
                    wx.reLaunch({
                        url: '/pages/combinelist/main'
                    })
                }
            })
      	},

      	loadList () {
        		let that = this;
        		let token = wx.getStorageSync('token');
        		wx.request({
          			url: env.host + `/forecast/pl/data/${that.pl_id}/latest/record`,
          			header: {
                        'content-type': 'json',
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
        if (this.$root.$mp.query.pl_id) {
            this.pl_id = this.$root.$mp.query.pl_id
            this.loadList()
        }
        let detail = this.$root.$mp.query.detail
      	if (detail) {
            detail = JSON.parse(detail)
            console.log(this.list)
            for (let i = 0; i < detail.length; i++) {
                if (this.list.length == 0) {
                    this.$set(this.list,i,detail[i])
                    this.arrayList.push(0.00)
                }
                else {
                    for (var j = 0; j < this.list.length; j++) {
                        if (this.list[j].asset_name == detail[i].asset_name) {
                            break
                        }
                    }
                    if (j == this.list.length) {
                        this.$set(this.list,this.list.length,detail[i])
                        this.arrayList.push((0).toFixed(2))
                    }
                }
            }
        }
    }
}
</script>

<style>
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
.addinfo {
    display: flex;
    height: 6vh;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-bottom: 1vh;
    color: #8BA4FF;
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
    text-align: center;
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