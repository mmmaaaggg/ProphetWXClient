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
             <wxc-icon v-if ="items.collectionstatus" size="40" type="star" class="collected" />
             <wxc-icon v-else  size="40" type="star-active" class="collected"></wxc-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

var options = {
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
 
  methods: {
   
    onCollect: function (items) {
      items.collectionstatus = !items.collectionstatus;
    },

    login () {
      wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code)
          wx.request({
            //url: 'https://prophets.top/auth/login',
            url: 'http://127.0.0.1:6060/wx/login',
            data: {
              code: res.code
            },
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            method: 'GET',

            success(res) {
              if (res.data.openid) {
                wx.setStorageSync('openid',res.data.openid)
              } else {
                  console.log('请求失败！' + res.errMsg)
                }
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

  onLoad: function (res) {    
    wx.request({  
      //url: 'http://10.0.3.66:5000/forecast/get_pl_info_list/1?_=1526623084166', 
      url: 'http://127.0.0.1:6060/list',
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
  },

  created() {
    //wx.checkSession({
      //fail: function () {
        this.login()
      //}
   // })
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
  top: 0;
  width: 100vw;
  height: 50vh;
}
.bgcontainer{
  position: absolute;
  top: 60vh;
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