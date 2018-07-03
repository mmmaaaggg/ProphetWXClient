<template>
  <div class="container">
  	<scroll-view scroll-y="true" class="scroll" >
  	<div class="hd">
  	  <div class="hdfst">
  	  	<span>关注人数：4</span>  
  	  	<span>创建于2018.05.16</span>
  	  </div>
  	  <div class="hdscnd">
  	  	<div class="hdwk">
  	  	  <div>周</div>
  	  	  <div class="hdsz">60%</div>
  	  	</div>
  	  	<div class="hdmnt">
  	  	  <div>月</div>
  	  	  <div class="hdsz">70%</div>	
  	  	</div>
  	  	<div class="hdjz">
  	  	  <div>净值</div>
  	  	  <div class="hdsz">1.0245</div>
  	  	</div>
  	  	<div class="hdfz">
  	  	  <div>高于沪深300指</div>
  	  	  <div class="hdsz">5%</div>
  	  	</div>
  	  </div>
  	  <div class="hdtrd">
  	  	<span class="zql">56</span>%准确率，累计<span class="ljts">25</span>天跑赢沪深300指数
  	  </div>
  	</div>
  	<div class="data">
  	  <div class="dtshow">
  	  	<div class="dtdy">
  	  	  <div>日准确排名</div>
  	  	  <div class="dtsz">跑赢<span>61%</span>预测</div>
  	  	</div>
  	  	<div class="dtmnt">
  	  	  <div>月准确排名</div>
  	  	  <div class="dtsz">跑赢<span>71%</span>预测</div>	
  	  	</div>
  	  </div>
  	  <div class="dtjs">
  	  	<span class="gpmz">医药跑赢沪深300</span>
  	  	<span class="By">By</span>
  	  	<span class="ycr">王博士</span>
  	  </div>
  	</div>
  	<div class="chart">
  	  <div class="bt">医药组合跑赢沪深300</div>
  	  <div class="chartContainer">
        <div class="chartPick">
          <div class="zsdb">
            <div class="datePick">{{date}}</div>
            <div>走势对比</div>
          </div>
          <div class="dpick">
          	<div 
          	  class="pickItem" 
          	  :class="{active:selected == '日'}"
          	  @click="selectItem('日')">日
          	</div>
          	<div 
          	  class="pickItem"
          	  :class="{active:selected == '周'}"
          	  @click="selectItem('周')">周
          	</div>
          	<div 
          	  class="pickItem"
          	  :class="{active:selected == '月'}"
          	  @click="selectItem('月')">月
          	</div>
          </div>
        </div>
        <div class="echarts">
          <ec-canvas 
            class="canvas" 
            id="mychart-dom-bar" 
            canvas-id="mychart-bar" :ec="ec1">
          </ec-canvas>
        </div>  
      </div>
      <div class="chartTb">
      	<div class="syl">
          <div class="datePick">{{date}}</div>
          <div>收益率</div> 
        </div>
      	<div class="echarts">
          <ec-canvas 
            class="canvas" 
            id="mychart-dom-bar" 
            canvas-id="mychart-bar" :ec="ec2">
          </ec-canvas>
        </div>
        <div class="fxsy">
          <div>收益率累计日高于沪深300指数，胜率%</div>
          <div>近日每日连续高于沪深300指数</div>
        </div> 
      </div>
      <div class="chartTb">
      	<div class="hcl">
          <div class="datePick">{{date}}</div>
          <div>回撤率</div> 
        </div>
      	<div class="echarts">
          <ec-canvas 
            class="canvas" 
            id="mychart-dom-bar" 
            canvas-id="mychart-bar" :ec="ec2">
          </ec-canvas>
        </div>
        <div class="fxsy">
          <div>回撤率累计日高于沪深300指数，胜率%</div>
          <div>近日每日连续高于沪深300指数</div>
        </div> 
      </div>
      <div class="chartContainer">
      	<div class="zcpz">
          <div class="datePick">{{date}}</div>
          <div>资产配比</div> 
        </div>
      	<div class="echarts">
          <ec-canvas 
            class="canvas" 
            id="mychart-dom-bar" 
            canvas-id="mychart-bar" :ec="ec3">
          </ec-canvas>
        </div>
      </div>
      <div class="chartContainer">
      	<div class="pzgp">
          <div class="datePick">{{date}}</div>
          <div>行业配置仅股票</div>
        </div>
      	<div class="echarts">
          <ec-canvas 
            class="canvas" 
            id="mychart-dom-bar" 
            canvas-id="mychart-bar" :ec="ec3">
          </ec-canvas>
        </div>
      </div>
  	</div>
  </scroll-view>
  </div>
</template>


<script>

var options1 = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],

    tooltip: {
      trigger: 'axis'
    },
    legend: {

      data: ['A商品', 'B商品', 'C商品']
    },
    grid: {
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      x: 'center',
      type: 'value'
    },
    series: [{
      name: 'A商品',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, {
      name: 'B商品',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
    }, {
      name: 'C商品',
      type: 'line',
      smooth: true,
      data: [10, 30, 31, 50, 40, 20, 10]
    }]
  };
var options2 = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: 55,
        name: '北京'
      }, {
        value: 20,
        name: '武汉'
      }, {
        value: 10,
        name: '杭州'
      }, {
        value: 20,
        name: '广州'
      }, {
        value: 38,
        name: '上海'
      },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  }
var options3 = {
    color: ['#37a2da'],
    parallelAxis: [
      { dim: 0, name: 'Price' },
      { dim: 1, name: 'Net Weight' },
      { dim: 2, name: 'Amount' },
      {
        dim: 3,
        name: 'Score',
        type: 'category',
        data: ['Excellent', 'Good', 'OK', 'Bad']
      }
    ],
    parallel: {
      left: 40,
      right: 80,
      top: 50,
      bottom: 20,
      parallelAxisDefault: {
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        },
        nameTextStyle: {
          color: '#666'
        }
      }
    },
    series: {
      type: 'parallel',
      lineStyle: {
        width: 4
      },
      data: [
        [12.99, 100, 82, 'Good'],
        [9.99, 80, 77, 'OK'],
        [20, 120, 60, 'Excellent'],
        [3.2, 40, 70, 'OK']
      ]
    }
  }
export default {
  data () {
    return {
      selected: '日',
      date: '日',
      ec1: {
      	options: options1
      },
      ec2: {
      	options: options2
      },
      ec3: {
      	options: options3
      }
    }
  },

  methods: {
    selectItem (item) {
      this.selected = item;
      this.date = item;
    }

  },
  
  mounted () {
  	
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
  ec-canvas {
  	position: absolute;
    width: 100%;
    height: 300px;
    margin-top: 2vh;
  }
  .container {
  	width: 100%;
  	height: 100%;
    background: #F5EEEE;
  }
  .hdfst>span {
    margin-right: 1vw;
    margin-left: 2vw;
  }
  .hd {
    width: 100%;
    height: 23vh;
    background: #78A0ED;
    color: #FFFFFF;
    border-top: 1rpx solid #FFFFFF;
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .hdfst>span {
  	margin-right: 2vw;
  }
  .hdscnd {
    display: flex;
    margin-top: 2vh;
  }
  .hdwk,.hdmnt,.hdjz {
  	width: 20%;
  	text-align: center;
  	border-right: 1px solid #D69EDD;
  }
  .hdfz {
  	width: 40%;
  	text-align: center;
  }
  .hdtrd>span {
    font-size: 1.8em;
    margin-right: 1vw;
  }
  .zql {
    margin-left: 2vw;
  }
  .ljts {
    margin-left: 1vw;
  }
  .hdsz {
  	margin-top: 1vh; 
  }
  .data {
  	width: 100%;
  	font-size: 0.8em;
    background: #FFFFFF;
  }
  .dtjs>span {
  	font-size: 1.5em;
  	color: #0C4BCF;
  }
  .dtshow {
  	display: flex;
    text-align: center;
    height: 185rpx;
    align-items: center;
  }
  .dtsz {
  	color:  #78A0ED;
  }
  .dtsz>span {
    font-size: 1.8em;
  }
  .dtdy {
  	width: 49%;
  	border-right: 1px solid #978282;
  }	
  .dtmnt {
  	width: 50%;
  }
  .dtjs {
  	width: 100%;
    padding-bottom:1vh;
  	position: relative;
  }
  .gpmz {
    margin-left: 2vw;
  }
  .By {
    position: absolute;
    right: 32vw;
    margin-right: 3vw;
  }
  .ycr {
  	position: absolute;
  	right: 9vw;
  }
  .chart {
  	width: 100%;
    background: #FFFFFF;
    margin-top: 1vh;
  }
  .syl,.hcl,.zcpz,.pzgp {
    margin-left: 2vw;
    margin-top: 1vh;
    display: flex;
  }
  .zsdb {
    position: absolute;
    left: 2vw;
    display: flex;
  }
  .datePick {
    background: #19EA3B;
    width: 29px;
    border-radius: 50%;
    height: 29px;
    text-align: center;
    margin-right: 0.5vw;
  }
  .fxsy {
    margin-left: 2vw;
    margin-bottom: 1vh;
  }
  .bt {
  	text-align: center;
  	margin-bottom: 1vh;
    padding-top:1vh;
    padding-bottom:1vh;
  }
  .chartPick {
  	display: flex;
  	width: 100%;
  	margin-top: 1.5vh;
    height: 6.57vh;
    position: relative;
  }
  .dpick {
  	display: flex;
  	text-align: center;
  	position: absolute;
    right: 2vw;
  }
  .pickItem {
  	border: 1px solid #78A0ED;
  	margin-right: -1px;
  	width: 8vw;
  }
  .active {
  	background: #78A0ED;
  }
  .chartContainer{
    width: 100%;
    border-top: 1px solid #8A7E7E;
    height: 700rpx;
  }
  .echarts {
  	display: flex;
  	width: 100%;
  	height: 300px;
    margin-bottom: 2vh;
  	justify-content: center;
  }
  .chartTb {
  	width: 100%;
    margin-top: 1vh;
    border-top: 1px solid #8A7E7E;
  }
  .fxsy {
  	margin-top: 2vh;
  	font-size: 0.8em;
  }
</style>