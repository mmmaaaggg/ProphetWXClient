<template>
  <div class="container">
    <div class="subcontainer">
      <ec-canvas class="canvas" id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec"></ec-canvas>
    </div>
    <div class="bgcontainer">
      <div class="tr bg-w">
        <div class="th">预测名称</div>
        <div class="th">起止日期</div>
        <div class="th">准确率</div>
        <div class="th">预言家</div>
      </div>
      <div v-for="items in listData.data" :key="pl_id" class="tr bg-g" >
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
          {{items.access_type}}
        </div>
        <div class="td td-cell">
          {{items.pl_id}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const options = {
  color: ['#37a2da', '#32c5e9', '#67e0e3'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ['热度', '正面', '负面']
  },
  grid: {
    left: 20,
    right: 20,
    bottom: 15,
    top: 40,
    containLabel: true
  },
  xAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666'
      }
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666'
      }
    }
  ],
  series: [
    {
      name: '热度',
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'inside'
        }
      },
      data: [300, 270, 340, 344, 300, 320, 310],
      itemStyle: {
        // emphasis: {
        //   color: '#37a2da'
        // }
      }
    },
    {
      name: '正面',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true
        }
      },
      data: [120, 102, 141, 174, 190, 250, 220],
      itemStyle: {
        // emphasis: {
        //   color: '#32c5e9'
        // }
      }
    },
    {
      name: '负面',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'left'
        }
      },
      data: [-20, -32, -21, -34, -90, -130, -110],
      itemStyle: {
        // emphasis: {
        //   color: '#67e0e3'
        // }
      }
    }
  ]
}
export default {
  data () {
    return {
      ec: {
        // 传 options
        options: options,
      },
      listData: {}
    }
  },
   onLoad: function (res) {    
    wx.request({  
      url: 'http://10.0.3.66:5000/forecast/get_pl_info_list/1?_=1526623084166',   
      header: {  
        'content-type': 'application/json' // 默认值  
      },  
      method: 'GET',
      success: (res) => {  
        this.listData = res.data;
      },  
      fail: function () {  
       console.log("fail")  
      },  
      complete: function () {  
          
      }
    })   
  }
}
</script>

<style>
ec-canvas {
  width: 400px;
  height: 400px;
}

.container {
  width: 100vw;
  height: 100vh;
}
.subcontainer{
  position: absolute;
  top: 5vh;
  width: 80vw;
  height: 60vh;
}
.bgcontainer{
  position: absolute;
  top: 70vh;
  width: 100vw;
}
.bg-w {
  background-color: #CCC65C;
}
.bg-g{
  background-color: #E6F3F9;
}
.tr {
  display: flex;
  width: 100%;
  height: 3em;
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
  border-collapse: collapse;
}
.td-cell{
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>