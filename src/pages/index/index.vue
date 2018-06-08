<template>
  <div class="container">
    <scroll-view scroll-y="true" class="scroll" >
    <div class="chartContainer">
      <ec-canvas class="canvas" id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec"></ec-canvas>
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

var options = {
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

    login () {
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
              console.log(res.data.openid);
              wx.request({
                url: 'https://prophets.top/auth/has_login',
                header: {
                  token: res.data.token
                },
                success (res) {
                  console.log(res.data);
                }
              })
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
    wx.checkSession({
      fail: function () {
        this.login()
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