<template>
    <div class="container">
      	 <scroll-view scroll-y="true" class="scroll">
              <div class="tr bg-t">
                  <div class="th th-name">组合</div>
                  <div class="th th-date">起止日期</div>
                  <div class="th th-rate">净值</div>
                  <div class="th th-person">预言家</div>
              </div>
              <div
                v-for="(items,index) in listData"
                :key="index"
                class="tr bg-c"
              >
                  <div
                    @touchstart="handleTouchstart($event,index)"
                    @touchmove="handleTouchmove($event,index)"
                    @touchend="handleTouchend($event,index)"
                    @click="selectItem(items.pl_id,items.name,items.favorite)"
                    class="inner text"
                    :style="stylelist[index]"
                  >
                    <div class="td name th-name">
                      {{items.name}}
                    </div>
                    <div class='td th-date'>
                        <div class="td-date">
                            <div class="date">{{items.date_from || '---'}}</div>
                            <div class="date">{{items.date_to || '---'}}</div>
                        </div>
                    </div>
                    <div class="td th-rate">
                        {{items.nav || '---'}}
                    </div>
                    <div class="td th-person">
                        <div class="username">
                            {{items.username}}
                        </div>
                    </div>
                  </div>

                  <div class="inner del" @click="delItem(index,items)">删除</div>
              </div>
              <div class="created" @click="addPredict">
                  <wxc-icon size="40" type="add" class="create" />
              </div>

            <div class="weui-loadmore" :hidden="isHideLoadMore">
                <div class="weui-loading"></div>
                <div class="weui-loadmore__tips">正在加载</div>
            </div>
        </scroll-view>
    </div>
</template>


<script>

import * as apiLogin from '../../components/login'
import * as env from '../../utils/index'

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
          	pageIndex: 1,
          	total: 1,
          	count: 16,
          	isHideLoadMore: true,
            collect: [],
            startX: 0,
            stylelist: [],
            delWidth: 180,
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
         }
         else {
         	   this.isHideLoadMore = true;
        	   wx.showToast({
            	 	 title: "没有更多了",
            	 	 duration: 1000
        	   });
        }
    },

  	methods: {

        handleTouchstart (e) {
            this.startX = e.clientX
        },
        handleTouchmove (e,id) {
            let moveX = e.clientX;
            let disX = this.startX - moveX;
            let delWidth = this.delWidth;
            let tempstyle = '';
            if (disX == 0 || disX < 0) {
                tempstyle = "left: 0rpx"
            }
            else if (disX > 0 && disX <= delWidth) {
                tempstyle = "left:-" + disX + "rpx"
            }
            else {
                tempstyle = "left:-" + delWidth + "rpx"
            }
            this.$set(this.stylelist,id,tempstyle)

        },
        handleTouchend (e,id) {
            let disX = -e.currentTarget.offsetLeft;
            let delWidth = this.delWidth;
            let tempstyle = disX >= delWidth/2 ? "left:-" + delWidth + "rpx" : "left: 0rpx"
            this.$set(this.stylelist,id,tempstyle)
        },

        delItem (id,item) {
            this.listData.splice(id,1)
            this.stylelist.splice(id,1)
            let token = wx.getStorageSync("token")
            wx.request({
                url: env.host + `/forecast/pl/info/${item.pl_id}`,
                header: {
                    "Content-Type": "json",
                    token: token
                },
                method: 'DELETE',
                sucess: function(res) {
                    console.log(res)
                }
            })
        },

        addPredict () {
            wx.navigateTo({url: "/pages/createCombine/main"})
            wx.setNavigationBarTitle({
                title: '创建组合'
            })
        },

        selectItem (id,name,collection) {
            let detail = {itemId: id, itemName: name, collected:collection}
            wx.navigateTo({
                url: "/pages/detailcb/main?detail="+JSON.stringify(detail),
            })
        },
        /*
    	  handleCollect: function (items,index) {
          let temp = this.collect[index];
          temp = temp == 0 ? 1 : 0;
          this.$set(this.collect,index,temp);
          wx.setStorageSync('collectList',this.collect)
          let url =  env.host + `forecast/cmp/favorite/${items.cmp_id}/${temp}`
          let token = wx.getStorageSync('token');
          wx.request({
            url: url,
            method: 'POST',
            header: {
              token: token
            }
          });
          wx.showToast({
            title: this.collect[index] == 1 ? "收藏成功":"收藏取消",
            duration: 1000,
            icon: "sucess",
            make: true
          })
        },
        */
        loadData (res) {
            let pageIndex = this.pageIndex;
            if (pageIndex == 1) {
                this.listData = res.data.data;
                this.total = res.data.data.total;
                for (let i = 0; i < this.listData.length; i++) {
                    if (this.listData[i].nav) {
                        this.listData[i].nav = Number(this.listData[i].nav).toFixed(3)
                    }
                    this.stylelist.push('')
                }
            }
            else {
                console.log('load more');
                //let tempList = res.data.data;
                let tempList = dataList;
                //this.listData.data = this.listData.data.concat(tempList)
                this.listData = this.listData.concat(tempList);
              }
        },

        getList () {
            let pageIndex = this.pageIndex;
            let token = wx.getStorageSync('token');
            let url = env.host + '/forecast/pl/all'
            wx.request({
                url: url,
                header: {
                    'content-type': 'json',
                    token: token
                },
                success: (res) => {
                  /*if (res.data.errcode == 41008) {
                      apiLogin.firstLogin();
                      this.getList()
                  } else {
                        this.loadData(res)
                    }*/
                	  this.loadData(res)

                }
            })
        }
  	},

  	mounted () {
    	  this.pageIndex = 1;
    	  this.getList()

        if (wx.getStorageSync('collectList')) {
            this.collect = wx.getStorageSync('collectList')
        }

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
.bg-c,.bg-t {
    border-bottom: 1px solid #E6E5E5;
}
.tr {
    display: flex;
    width: 100%;
    height: 6vh;
}
.th {
    display: flex;
    color: #858181;
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
}
.th-name {
    width: 28%;
}
.th-date {
    width: 22%;
}
.th-rate {
    width: 20%;
    font-size: 0.8em;
}
.th-person {
    width: 30%;
    display: flex;
}
.td {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E24C2B;
}

.td-date {
    height: 100%;
}
.username {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5em;
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
    font-weight: bold;
    color: #000000;
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
.created {
    width: 50px;
    height: 50px;
    position: fixed;
    background: #fff;
    left: 0;
    right: 0;
    margin:0 auto;
    top: 50%;
    line-height: 50px;
    text-align: center;
    z-index: 999;
    opacity: 0.5;
    border-radius:50%;
}
.del{
    background-color: #e64340;
    width: 180rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    right: 0;
    color: #fff;
    height: 6vh;
}
.text {
     transition: left 0.2s ease-in-out;
     width: 100%;
     display: flex;
     height: 6vh;
     z-index: 5;
     overflow: hidden;
     background: #fff;
}
.inner {
  position: absolute;
}
</style>