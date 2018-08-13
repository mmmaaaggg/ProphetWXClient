<template>
    <div class="container">
        <scroll-view scroll-y="true" class="scroll" >
            <div class="chartContainer">
                <mpvue-echarts :echarts="echarts"  :onInit="onInit"></mpvue-echarts>
            </div>
            <div class="bg-type">预测</div>
            <div class="tapContainer trTap">
                <div class="blog vertify">
                    <div class="wxcIcon vertifyIcon">
                        <wxc-icon size="45" type="feedback" class="feedback" />
                    </div>
                    <div class="bg-right" @click="navTocmpunvertifie">
                        <div class="bg-item digita">{{cmpSum[0]}}</div>
                        <div class="bg-item blogitem">待验证</div>
                    </div>
                </div>
                <div class="blog vertified">
                    <div class="wxcIcon vertifiedIcon">
                        <wxc-icon size="45" type="rate" class="rate" />
                    </div>
                    <div class="bg-right" @click="navTocmpvertifie">
                        <div class="bg-item digita">{{cmpSum[1]}}</div>
                        <div class="bg-item blogitem">已验证</div>
                    </div>
                </div>
                <div class="blog attention">
                    <div class="wxcIcon attentionIcon">
                        <wxc-icon size="45" type="star" class="star" />
                    </div>
                    <div class="bg-right" @click="navTocmpfavorite">
                        <div class="bg-item digita">{{cmpSum[2]}}</div>
                        <div class="bg-item blogitem">关注预言</div>
                    </div>
                </div>
            </div>
            <div class="bg-type cb">组合</div>
            <div class="tapContainer trTap">
                <div class="blog plvertify">
                    <div class="wxcIcon vertifyIcon">
                        <wxc-icon size="45" type="feedback" class="feedback" />
                    </div>
                    <div class="bg-right" @click="navToplunvertifie">
                        <div class="bg-item digita">{{plSum[0]}}</div>
                        <div class="bg-item blogitem">所有组合</div>
                    </div>
                </div>
                <div class="blog plvertified">
                    <div class="wxcIcon vertifiedIcon">
                        <wxc-icon size="45" type="rate" class="rate" />
                    </div>
                    <div class="bg-right" @click="navToplvertifie">
                        <div class="bg-item digita">{{plSum[1]}}</div>
                        <div class="bg-item blogitem">我的组合</div>
                    </div>
                </div>
                <div class="blog plattention">
                    <div class="wxcIcon attentionIcon">
                        <wxc-icon size="45" type="star" class="star" />
                    </div>
                    <div class="bg-right" @click="navToplfavorite">
                        <div class="bg-item digita">{{plSum[2]}}</div>
                        <div class="bg-item blogitem">关注组合</div>
                    </div>
                </div>
            </div>
        </scroll-view>
    </div>
</template>

<script>

import * as echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
import * as login from '../../components/login'
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
            cmpSum: [0,0,0],
            plSum: [0,0,0]
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
          login.ConfirmLogin()
          let that = this;
          wx.request({
              url: env.host + '/asset/candle/index/000300.SH/DOCLHV',
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

      loadplsum () {
          login.ConfirmLogin()
          let that = this;
          let token = wx.getStorageSync('token');
          wx.request({
              url: env.host + '/forecast/pl/summary',
              header: {
                  token: token
              },
              success: (res) => {
                  if (res.data.errcode == 41008) {
                     apiLogin.firstLogin();
                     this.loadplsum();
                  }
                  that.$set(that.plSum,0,res.data.data[0].count.split('.')[0])
                  that.$set(that.plSum,1,res.data.data[1].count.split('.')[0])
                  that.$set(that.plSum,2,res.data.data[2].count.split('.')[0])
              }
          })
      },

      loadTap () {
          login.ConfirmLogin()
          let that = this
          let token = wx.getStorageSync('token')
          wx.request({
              url: env.host + '/forecast/cmp/summary',
              //url: 'http://127.0.0.1:6060/list',
              header: {
                  token: token
              },
              method: 'GET',
              success: (res) => {
                  if (res.data.errcode == 41008) {
                      apiLogin.firstLogin();
                      that.loadTap();
                  }
                  that.$set(that.cmpSum,0,res.data.data[0].count.split('.')[0])
                  that.$set(that.cmpSum,1,res.data.data[1].count.split('.')[0])
                  that.$set(that.cmpSum,2,res.data.data[2].count.split('.')[0])
              }
          })
      },


      navTocmpunvertifie () {
          wx.navigateTo({url: "/pages/cmpunvertifielist/main"})
      },

      navTocmpvertifie () {
          wx.navigateTo({url: "/pages/cmpvertifielist/main"})
      },
      navTocmpfavorite () {
          wx.navigateTo({url: "/pages/cmpfavoritelist/main"})
      },
      navToplunvertifie () {
          wx.navigateTo({url: "/pages/plunvertifielist/main"})
      },

      navToplvertifie () {
          wx.navigateTo({url: "/pages/plvertifielist/main"})
      },
      navToplfavorite () {
          wx.navigateTo({url: "/pages/plfavoritelist/main"})
      },

    },

    mounted () {
        this.loadEchartData()
        this.loadplsum()
        this.loadTap()
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
      background: #fff;
  }
  .chartContainer{
      width: 100vw;
      height: 45vh;
  }
  .tapContainer {
      width: 100vw;
      height: 12vh;
  }
  .vertify {
      background: #FA872B;
  }
  .plvertify {
      background: #C18CEB;
  }
  .vertified {
      background: #95C04E;
  }
  .plvertified {
      background-image: linear-gradient(to right, #FF9885, 40%, #AB48D8);
  }
  .vertifyIcon,.vertifiedIcon,.attentionIcon {
      border-right: 1px solid #F0DEDE;
  }
  .attention {
      background: #C3C92A;
  }
  .plattention {
      background:#ED8FA0;
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
      border-radius: 6px;
      height: 100%;
      width: 30vw;
      display: flex;
  }
  .bg-right {
      width: 22vw;
  }
  .bg-right:active {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
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
  .blogitem {
      color: #fff;
      font-size: 0.8em;
      font-weight: bold;
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
  .bg-type {
      width: 100%;
      display: flex;
      align-items: center;
      height: 7vh;
      margin-top: 2vh;
      margin-bottom: 1vh;
      padding-left: 3vw;
      font-weight: 600;
  }
  .cb {
      margin-top: 7vh;
  }
</style>