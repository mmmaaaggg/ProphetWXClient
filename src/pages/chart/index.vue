<template> 
  <div class="container">
  	
      <div class="tr bg-t">
        <div class="th">预测名称</div>
        <div class="th">起止日期</div>
        <div class="th">准确率</div>
        <div class="th">预言家</div>
      </div>
      <div v-for="items in listData.data" :key="pl_id" class="tr bg-c" >
        <div class="td name td-cell">
          {{items.username}}
        </div>
        <div class='td'>
          <div class="td-date">
            <div class="date">{{items.date_from}}</div>
            <div class="date">{{items.date_to}}</div>
          </div>
        </div>      
        <div class="td td-cell">
          {{items.status}}
        </div>
        <div class="td td-cell collection">
          <div class="username">
            {{items.cmp_id}}
          </div>
          <div class="button-collection" v-on:click="handleCollect(items)">
             <wxc-icon v-if ="items.collectionstatus" size="40" type="star-active" class="collected" />
             <wxc-icon v-else  size="40" type="star" class="collected"></wxc-icon>
          </div>
        </div>
      </div> 
      <div class="xsys">
      	<span class="curPage">{{pageIndex}}</span>
      	<span>/</span>
      	<span class="totalPage">{{total}}</span>
      </div>
      <div class="weui-loadmore" :hidden="isHideLoadMore">
        <div class="weui-loading"></div>
        <div class="weui-loadmore__tips">正在加载</div>
     </div>
  </div>
</template>


<script>

 var dataList = [{
      "id": 11, 
      "cmp_id": 16,
      "status":"30%",
      "date_from": "2018-03-25", 
      "date_to": "2018-04-24", 
      "username": "fbx",
      "collectionstatus": false
    }];

  export default {
  	data () {
      return {
      	listData: {},
      	callbackcount: 16,
      	pageIndex: 1,
      	total: 1,
      	count: 26,
      	isHideLoadMore: true
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
      console.log ('load more')
      this.isHideLoadMore = false;
      if (this.pageIndex < this.total) {
      	 setTimeout( () => {
      	   this.pageIndex ++;
      	   wx.showLoading();
      	   this.getList();
           wx.hideLoading();
           wx.stopPullDownRefresh() 
          }, 1000);
       } else {
       	   this.isHideLoadMore = true;
      	   wx.showToast({
      	 	 title: "没有更多了",
      	 	 duration: 1000
      	   });
      }
    },

  	methods: {

  	  handleCollect: function (items) {
        items.collectionstatus = !items.collectionstatus;
        wx.showToast({  
          title:items.collectionstatus? "收藏成功":"收藏取消",  
          duration: 1000,  
          icon: "sucess",  
          make: true  
        })  
      },	
      
      getList () {
        let pageIndex = this.pageIndex;
        let callbackcount = this.callbackcount;
        let url = `https://www.prophets.top/forecast/get_cmp_data_list/all?page_no=${pageIndex}&count=${this.count}`
        wx.request({  
         // url: url, 
          url: 'http://127.0.0.1:6060/list',
          header: {  
            'content-type': 'application/json' // 默认值  
          },  
          data: {
            pageIndex: pageIndex,
            callbackcount: callbackcount
          },
          method: 'GET',
          success: (res) => { 
          	//console.log (res)
          	if (pageIndex == 1) {
          	    this.listData = res.data.data;
          	    this.total = res.data.data.total;
          	} else {
          		console.log('load more');
          		//let tempList = res.data.data;
          		let tempList = dataList;
          		//this.listData.data = this.listData.data.concat(tempList)
          		this.listData.data = this.listData.data.concat(tempList);
          	}
            
          },  
          fail: function () {  
            console.log("fail")  
          },  
          
        })   
      }
  	},

  	mounted () {
  	  this.pageIndex = 1;
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
  }
  .scroll {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .tr {
    display: flex;
    width: 100%;
    height: 2em;
  }
  .th {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg-t {
    background-color: #7FBFF0;
  }
  .td {
    width: 25%;
    border: 1px solid #D1B9B9;
    margin-right: -1px;
    margin-bottom: -1px;
  }
  .td-cell{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E24C2B;
  }
  .td-date {
    height: 100%;
  }
  .date {
    font-size: 0.45em;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name {
    font-size: 0.6em;
  }
  .collection {
    display: flex;
  }
  .username {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-collection {
    height: 100%;
    width: 40%;
  }
  .collected {
    width: 5vw;
    height: 5vh;
    padding-top: 1vh;
    right: 2vh;
    position: absolute;
  }
  .xsys {
  	position: fixed;
  	width: 16%;
  	bottom: 10%;
  	right: 10%;
  	background: #D0D0D0;
  	opacity: 0.3;
  	text-align: center;
  }
  .curPage {
  	margin-right: 0.5vw;
  }
  .totalPage {
  	margin-left: 0.5vh;
  }
  .weui-loading {
	margin: 0 5px;
	width: 20px;
	height: 20px;
	display: inline-block;
    vertical-align: middle;
    -webkit-animation: weuiLoading 1s steps(12, end) infinite;
    animation: weuiLoading 1s steps(12, end) infinite;
    background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
    background-size: 100%;
  }
.weui-loadmore {
  width: 65%;
  margin: 0.5em auto;
  font-size: 14px;
  text-align: center;
}
.weui-loadmore__tips {
  display: inline-block;
  vertical-align: middle;
}
</style>