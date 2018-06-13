<template>
  <div class="container">
    <scroll-view scroll-y="true" class="scroll" >
    <div class="chartContainer">
      <mpvue-echarts :echarts="echarts"  :onInit="onInit"></mpvue-echarts>
    </div>
    <div class="tapContainer trTap">
      <div class="blog vertify">
        <div class="wxcIcon vertifyIcon">
          <wxc-icon size="45" type="feedback" class="feedback" /> 
        </div>
        <div class="bg-right" @click="handleBg">
          <div class="bg-item digita">320</div>
          <div class="bg-item blogitem">待验证</div>
        </div>
      </div>
      <div class="blog vertified">
        <div class="wxcIcon vertifiedIcon">
          <wxc-icon size="45" type="rate" class="rate" /> 
        </div>
        <div class="bg-right" @click="handleCb">
          <div class="bg-item digita">120</div>
          <div class="bg-item blogitem">已验证</div>
        </div>
      </div>
      <div class="blog attention">
        <div class="wxcIcon attentionIcon">
          <wxc-icon size="45" type="star" class="star" /> 
        </div>
        <div class="bg-right">
        <div class="bg-item digita">142</div>
          <div class="bg-item blogitem">关注预言</div>
        </div>
      </div>
    </div>
    <div class="tbContainer">
      <div class="tr bg-t">
        <div class="th">预测名称</div>
        <div class="th">起止日期</div>
        <div class="th">准确率</div>
        <div class="th">预言家</div>
      </div>
      <div v-for="items in listData.data" :key="pl_id" class="tr bg-c" >
        <div class="td name td-cell">
          {{items.name}}
        </div>
        <div class='td'>
          <div class="td-date">
            <div class="date">{{items.date_from}}</div>
            <div class="date">{{items.date_to}}</div>
          </div>
        </div>      
        <div class="td td-cell">
          {{items.access_type}}
        </div>
        <div class="td td-cell collection">
          <div class="username">
            {{items.username}}
          </div>
          <div class="button-collection" v-on:click="onCollect(items)">
             <wxc-icon v-if ="items.collectionstatus" size="40" type="star-active" class="collected" />
             <wxc-icon v-else  size="40" type="star" class="collected"></wxc-icon>
          </div>
        </div>
      </div>
    </div>
  </scroll-view>
  </div>
</template>

<script>

import * as echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'

let chart = null

let options = {
    title: {
        text: '股票走势'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [ 
        {
            name:'A股',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'B股',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'c股',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'D股',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'E股',
            type:'line',
            stack: '总量',
            data:[]
        },
        {
            name:'F股',
            type:'line',
            stack: '总量',
            data:[]
        }]
};


export default {

  components: {
    mpvueEcharts
  },

  data () {
    return {
      listData: {},
      echarts,
      onInit: this.initChart    
    }
  },
 
  methods: {
    
    initChart (canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chart)
        let option = options;
        chart.setOption(option)
        return chart
    },

    loadData () {
        wx.request({
          url: 'https://prophets.top/asset/candle/index/000300.SH',
          success (res) {
            let array = res.data.data;
            let date = [];
            for (let item of array) {
              date.push(item[0]);
              item.shift();
              for (let i = 0; i < item.length; i ++){
                  options.series[i].data.push(item[i]);
              }
            }
            options.xAxis.data = date;
          }
        });
    },
    handleBg: function () {
      wx.navigateTo({url: "/pages/chart/main"})
    },

    handleCb () {
      wx.navigateTo({url: "/pages/combination/main"})
    },
   
    onCollect: function (items) {
      items.collectionstatus = !items.collectionstatus;
      wx.showToast({  
        title:items.collectionstatus? "收藏成功":"收藏取消",  
        duration: 1000,  
        icon: "sucess",  
        make: true  
      })  
    },
  

    login (token) {
      let that = this;
      wx.request({
          url: 'https://prophets.top/auth/has_login',
          header: {
            token: token
          },
          success () {
            that.loadData();
          }
                
      })
    },

    firstLogin () {
      let that = this;
      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
            //console.log(res.code)
            wx.request({
              url: 'https://prophets.top/auth/login',
              //url: 'http://127.0.0.1:6060/wx/login',
              data: {
                code: res.code
              },
              header: { "Content-Type": "application/x-www-form-urlencoded" },
              method: 'GET',
              success(res) {
                wx.setStorageSync('token',res.data.token)
                that.login();
              } 
            })
          } 
        },
        
        fail(error) {
          console.log("request fail")
        }
      });
    }
  },

  mounted () {    
    wx.request({  
      //url: 'https://www.prophets.top/forecast/get_cmp_data_list/all', 
      url: 'http://127.0.0.1:6060/list',
      header: {  
        'content-type': 'application/json' // 默认值  
      },  
      method: 'GET',
      success: (res) => {  
        this.listData = res.data.data;
      },  
      fail: function () {  
       console.log("fail")  
      },  
      complete: function () {  
          
      }
    })   
  },

  created() {
    let that = this;
    let token = wx.getStorageSync('token');
    if (token) {
      console.log(token)
      that.login(token)
    } else {
      that.firstLogin()
    }
  }
}
</script>

<style>
html,body {
  height: 100%;
  width: 100%;
}
.scroll {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
.chartContainer{
  width: 100vw;
  height: 45vh;
}
.tapContainer {
  margin-top: 2vh;
  width: 100vw;
  height: 12vh;
}
.vertify {
  background: #9F52CD;
}
.vertifyIcon {
  border-right: 1px solid #F0DEDE;
}
.vertifiedIcon {
  border-right: 1px solid #D0A1A1;
}
.attention {
  background: #C18F3B;
}
.attentionIcon {
  border-right: 1px solid #E28BB7;
}
.tbContainer {
  margin-top: 5vh;
  width: 100vw;
}
.trTap {
  display: flex;
  justify-content: space-around;
}
.blog {
  border: 1px solid #DD94C5;
  border-radius: 6px;
  height: 100%;
  width: 30vw;
  display: flex;
}
.bg-right {
  width: 22vw;
  box-shadow: 0 4px 0 #404346, 0 3px 20px rgba(0,0,0,0.3);
}
.bg-right:active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
}
.bg-t {
  background-color: #7FBFF0;
}
.bg-c {
  background-color: #F7F9FA;
}
.wxcIcon {
  width: 8vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-item {
  height: 50%;
  text-align: center;
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
</style>