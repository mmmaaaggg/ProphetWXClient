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
          <div class="bg-item digita">{{confirmData}}</div>
          <div class="bg-item blogitem">待验证</div>
        </div>
      </div>
      <div class="blog vertified">
        <div class="wxcIcon vertifiedIcon">
          <wxc-icon size="45" type="rate" class="rate" /> 
        </div>
        <div class="bg-right" @click="handleCb">
          <div class="bg-item digita">{{vertified}}</div>
          <div class="bg-item blogitem">已验证</div>
        </div>
      </div>
      <div class="blog attention">
        <div class="wxcIcon attentionIcon">
          <wxc-icon size="45" type="star" class="star" /> 
        </div>
        <div class="bg-right">
        <div class="bg-item digita">{{interest}}</div>
          <div class="bg-item blogitem">关注预言</div>
        </div>
      </div>
    </div>
    <div class="tbContainer">
      <div class="tr bg-t">
        <div class="th th-name">预测名称</div>
        <div class="th th-date">起止日期</div>
        <div class="th th-rate">准确率</div>
        <div class="th th-person">预言家</div>
      </div>
      <div v-for="(items,index) in listData" :key="index" class="tr bg-c" >
        <div class="td name th-name">
          {{items.name}}
        </div>
        <div class='td th-date'>
          <div class="td-date">
            <div class="date">{{items.date_from}}</div>
            <div class="date">{{items.date_to}}</div>
          </div>
        </div>      
        <div class="td th-rate">
          {{items.cmp_id}}
        </div>
        <div class="td th-person">
          <div class="username">
            {{items.username}}
          </div>
          <div class="button-collection" v-on:click="handleCollect(items,index)">
             <wxc-icon v-if ="collect[index]" size="40" type="star-active" class="collected" />
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
import * as apiLogin from '../../components/login'
import * as env from '../../utils/index'

let chart = null

export default {

  components: {
    mpvueEcharts
  },

  data () {
    return {
      listData: {},
      echarts,
      onInit: this.initChart,
      confirmData: 0,
      vertified: 0,
      interest: 0,
      collect: []
    }
  },
 
  methods: {
    
    initChart (canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chart)
        return chart
    },

    loadEchartData () {
      let that = this;
      wx.request({
        url: env.host + 'asset/candle/index/000300.SH/DOCLHV',
        success (res) {
          if (res.data.errcode == 41008) {
             apiLogin.firstLogin();
             that.loadEchartData();
          }
          let rawData = res.data.data;
          let data = env.splitData (rawData)
          let options = {
                backgroundColor: '#fff',
                animation: false,
                legend: {
                    top: 5,
                    left: 'center',
                    data: ['index', 'A', 'B', 'C', 'D']
                },
                axisPointer: {
                    link: {xAxisIndex: 'all'},
                    label: {
                        backgroundColor: '#777'
                    }
                },
                toolbox: {
                    show: false
                },
                brush: {
                    xAxisIndex: 'all',
                    brushLink: 'all',
                    outOfBrush: {
                        colorAlpha: 0.1
                    }
                },
                visualMap: {
                    show: false,
                    seriesIndex: 5,
                    dimension: 2,
                    pieces: [{
                        value: 1,
                        color: env.downColor
                    }, {
                        value: -1,
                        color: env.upColor
                    }]
                },
                grid: [
                    {
                        left: '13%',
                        right: '8%',
                        height: '50%',
                        top: '16%'
                    },
                    {
                        left: '13%',
                        right: '8%',
                        top: '65%',
                        height: '14%'
                    }
                ],
                xAxis: [
                    {
                        type: 'category',
                        data: data.categoryData,
                        scale: true,
                        boundaryGap : false,
                        axisLine: {onZero: false},
                        splitLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false},
                        splitNumber: 20,
                        min: 'dataMin',
                        max: 'dataMax',
                        axisPointer: {
                            z: 100
                        }
                    },
                    {
                        type: 'category',
                        gridIndex: 1,
                        data: data.categoryData,
                        scale: true,
                        boundaryGap : false,
                        axisLine: {onZero: false},
                        splitNumber: 20,
                        min: 'dataMin',
                        max: 'dataMax'
                    }
                ],
                yAxis: [
                    {
                        scale: true, 
                    },
                    {
                        scale: true,
                        gridIndex: 1,
                        splitNumber: 2,
                        axisLabel: {show: false},
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false}
                    }
                ],
               
                series: [
                    {
                        name: 'index',
                        type: 'candlestick',
                        data: data.values,
                        itemStyle: {
                            normal: {
                                color: env.downColor,
                                color0: env.upColor,
                                borderColor: null,
                                borderColor0: null
                            }
                        }
                    },
                    {
                        name: 'A',
                        type: 'line',
                        data: env.calculateMA(5, data),
                        smooth: true,
                        lineStyle: {
                            color: '#E866CC'
                        }
                    },
                    {
                        name: 'B',
                        type: 'line',
                        data: env.calculateMA(10, data),
                        smooth: true,
                        lineStyle: {
                            color: '#9234EF'
                        }
                    },
                    {
                        name: 'C',
                        type: 'line',
                        data: env.calculateMA(20, data),
                        smooth: true,
                        lineStyle: {
                            color: '#20627E'
                        }
                    },
                    {
                        name: 'D',
                        type: 'line',
                        data: env.calculateMA(30, data),
                        smooth: true,
                        lineStyle: {
                            color: '#DE871E'
                        }
                    },
                    {
                        name: 'Volume',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        data: data.volumes
                    }
                ]
          }
          chart.setOption(options)
        }
      });
    },

    loadChartData () {
      let that = this;
      let token = wx.getStorageSync('token');
      wx.request({  
        url: env.host + 'forecast/cmp/get_list/all', 
        //url: 'http://127.0.0.1:6060/list',
        header: {  
          token: token
        },  
        success: (res) => {  
          if (res.data.errcode == 41008) {
             apiLogin.firstLogin();
             this.loadChartData();
          }
          that.listData = res.data.data;
          for (let i = 0;i < that.listData.length;i++) {

            while (that.collect.length < that.listData.length) {
                that.collect.push(0)
            }

            if (that.collect.length == that.listData.length) {
                that.collect[i] = that.listData[i].favorite
            }
            
          }
          //console.log(that.collect)
        },  
        fail: function () {  
          console.log("fail")  
        }
      })     
    },

    loadTap () {
      let token = wx.getStorageSync('token')
      wx.request({  
        url: env.host + 'forecast/cmp/summary', 
        //url: 'http://127.0.0.1:6060/list',
        header: {  
          token: token
        },  
        method: 'GET',
        success: (res) => { 
          if (res.data.errcode == 41008) {
             apiLogin.firstLogin();
             this.loadTap();
          }
          this.confirmData = res.data[0].count;
          this.vertified = res.data[1].count;
          this.interest = res.data[2].count;
        },  
        fail: function () {  
         console.log("fail")  
        }
      })     
    },


    handleBg: function () {
      wx.navigateTo({url: "/pages/list/main"})
    },

    handleCb () {
      wx.navigateTo({url: "/pages/combination/main"})
    },
    
    handleCollect: function (items,index) {
      let temp = this.collect[index];
      temp = temp == 0 ? 1 : 0; 
      this.$set(this.collect,index,temp);
      wx.setStorageSync('collect',this.collect)
      let url =  env.host + `forecast/cmp/favorite/${items.cmp_id}/${temp}`
      let token = wx.getStorageSync('token');
      wx.request({
        url: url,
        method: 'POST',
        header: {
          token: token
        },
        success: (res) => {
          //console.log(res)
        },
        fail: () => {
          console.log('request fail')
        }
      });
      wx.showToast({  
        title: this.collect[index] == 1 ? "收藏成功":"收藏取消",  
        duration: 1000,  
        icon: "sucess",  
        make: true  
      }) 
    },
  

    ConfirmLogin () {
      let loginNum = 0;
      let that = this;
      let token = wx.getStorageSync('token')
      wx.request({
          url: env.host+'auth/has_login',
          header: {
            token: token
          },
          success (res) {
            if (res.data.message) {
               //that.loadChartData();
               //that.loadEchartData();
               //that.loadTap();
               loginNum = 0;
            } else {
                  console.log('login fail,Please login again')
                  apiLogin.firstLogin();
                  setTimeout(() => {
                    if (loginNum++ < 5) {
                        that.ConfirmLogin()
                    }  
                  },1000);
            }
            
          },
          fail: () => {
            console.log('request fail')
          }
                
      })
    },

    
  },

  mounted () { 
    this.ConfirmLogin(); 

    if (wx.getStorageSync('collect')) {
       this.collect = wx.getStorageSync('collect')
    }
  },

  created() {
   
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.tr {
  display: flex;
  width: 100%;
  height: 2em;
}
.th {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #D1B9B9;
  margin-right: -1px;
  margin-bottom: -1px;
}
.th-name {
  width: 28%;
}
.th-date {
  width: 22%;
}
.th-rate {
  width: 20%;
}
.th-person {
  width: 30%;
  display: flex;
}
.td {
  border: 1px solid #D1B9B9;
  margin-right: -1px;
  margin-bottom: -1px;
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
  font-size: 0.5em;
}
.username {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5em;
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