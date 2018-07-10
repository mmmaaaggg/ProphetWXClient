<template> 
  <div class="container">
    <scroll-view scroll-y="true" class="scroll">
      <div class="listContainer" v-for="items in listData" :key="index">
           <div class="timeItem">{{items.trade_date}}</div>
           <div class="gpItemContainer">
               <div class="gpItem" v-for="(item,sindex) in items.data" :key="sindex">
                   <div class="gp-name">
                       <div class="gpjtmz">{{item.asset_name}}</div>
                       <div class="gp-code">{{item.asset_code}}</div>
                   </div>
                   <div class="gpxs">
                       <span class="weight-before">{{item.weight_before}}%</span>
                       <span class="weight-code">-></span>
                       <span class="weight">{{item.weight}}%</span>
                   </div>
               </div>
           </div>
      </div>	
    </scroll-view> 
  </div>
</template>


<script>

import * as apiLogin from '../../components/login'
import * as env from '../../utils/index'



export default {
  
 
	data () {
    
    return {
    	listData: '',
    	id: '',
    	total: 1,
    	count: 16,
      weightbeforelist: [],
      weightlist: [],
    	isHideLoadMore: true,
      collect: []
    }
	},

	onPullDownRefresh () {
    wx.showNavigationBarLoading(); 
    setTimeout( () => {
    	this.pageIndex = 1;
    	this.getList();
    	wx.hideNavigationBarLoading(); 
      wx.stopPullDownRefresh(); 
    }, 1000);

  },
  
  onReachBottom () {
    
  },

	methods: {
    
    getList () {
        let that = this
        let token = wx.getStorageSync("token")
        wx.request({
            url: env.host + `forecast/pl/get_data_list_by_date/${that.id}/recent`,
            header: {
                token: token
            },
            success (res) {
                let data = res.data.data
                for (let items of data) {
                    for (let item of items.data) {
                        item.weight_before = (item.weight_before * 100).toFixed(2)
                        item.weight = (item.weight * 100).toFixed(2)
                    }
                }
                that.listData = data
            }
        })    
    }
  },

  mounted () {
        this.id = this.$root.$mp.query.id
        this.getList()
    }

}  
</script>


<style> 
  html,body {
  	width: 100%;
  	height: 100%;
  }
  .container {
  	width: 100%;
  	height: 100%;
    background: #E9EBEC;
  }
  .scroll {
    width: 100%;
    height: 100%;
  }
  .timeItem {
    height: 6vh;
    display: flex;
    align-items: center;
    font-size: 0.8em;
    margin-left: 2vw;
    color: #C8C5C5;
  }
  .gpItem {
    border-top: 1px solid #CBCBCB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    background: #fff;
  }
  .gp-name {
    font-size: 0.8em;
    margin-left: 2vw;
  }
  .gpxs {
    font-size: 0.8em;
    margin-right: 2vw;
  }
  .gp-code {
    font-size: 0.7em;
    color: #B6AEAE;
  }
  .weight-code {
    margin-left: 2vw;
    margin-right: 2vw;
  }
</style>