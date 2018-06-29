<template>
  <div class="container">
  	 <scroll-view scroll-y="true" class="scroll">
       <div class="hd">
         <div class="hdfst">
           <span class="followers"> 
             <span class="follow-text">4</span>人关注
           </span>  
           <span class="founded">
             <span class="founded-text">创建于</span> 
             <span class="found-date">2018.05.16</span> 
           </span>
         </div>
         <div class="hdscnd">
           <span class="total-text">总收益</span><span class="total-digital">2.44</span>%
         </div>
         <div class="hdtrd">
           <div class="hdwk">
             <div class="wk-text">日</div>
             <div class="hdsz">0.00%</div>
           </div>
           <div class="hdmnt">
             <div class="wk-text">月</div>
             <div class="hdsz">2.44%</div> 
           </div>
           <div class="hdjz">
             <div class="wk-text">净值</div>
             <div class="hdsz">1.0245</div>
           </div>
         </div>  
       </div>
       <div class="data">
         <div class="dtshow">
           <div class="dtmnt">
             <div>月收益排名（沪深）</div>
             <div class="dtsz">跑赢<span>71%</span>组合</div>
           </div>
           <div class="dtsy">
             <div>是余额收益的</div>
             <div class="dtsz"><span>21%</span></div>  
           </div>
         </div>
         <div class="dtjs">
           <div class="avatar">
             <open-data type="userAvatarUrl"></open-data>
           </div>
         </div>
       </div>
       <div class="gpdc">
         <div class="gpbt">
           <div class="gpsubt">最新调仓<span class="gp-time">(<span class="time">{{time}}</span>)</span></div>
           <div class="gpmore">更多>></div>
         </div>
         <div class="gpItemContainer">
           <div class="gpItem" v-for="(items,index) in list" :key="index">
             <div class="gp-name">
               <div class="gpjtmz">{{items.asset_name}}</div>
               <div class="gp-code">{{items.asset_code}}</div>
             </div>
             <div class="gpxs">
               <span class="weight-before">{{items.weight_before}}%</span>
               <span class="weight-code">-></span>
               <span class="weight">{{arrayList[index]}}%</span>
             </div>
           </div>
           <div class="zcpz">资产配置</div>
         </div>
         <div class="echarts">
           <ec-canvas 
            class="canvas" 
            id="mychart-dom-bar" 
            canvas-id="mychart-bar" :ec="ec1" />
         </div>
       </div>
       <div class="chart">
         <div class="chartTb">收益率走势</div>
         <div class="echarts">
           <ec-canvas 
            class="canvas" 
            id="mychart-dom-bar" 
            canvas-id="mychart-bar" :ec="ec1" />
         </div>
       </div>
       <div class="yhcz">
         <div class="userItem">
           <div class="grxx">
             <div class="avatar">
               <open-data type="userAvatarUrl"></open-data>
             </div>
             <div class="nickname">
               <div class="wxname">
                 <open-data type="userNickName"></open-data>
               </div>
               <div class="wxtime">{{wxtime}}</div>
             </div>
           </div>
           <div class="userxw">我刚刚调整了雪球组合</div>
           <div class="gjl">
             <div class="forwarding">
               <text class="iconfont icon-zhuanfa"></text>
               <span>转发</span>
             </div>
             <div class="comment">
               <text class="iconfont icon-pinglun"></text>
               <span>评论</span>
             </div>
             <div class="reward">
               <text class="iconfont icon-dashang"></text>
               <span>打赏</span>
             </div>
           </div>
         </div>
         <div class="userItem">
           <div class="grxx">
             <div class="avatar">
               <open-data type="userAvatarUrl"></open-data>
             </div>
             <div class="nickname">
               <div class="wxname">
                 <open-data type="userNickName"></open-data>
               </div>
               <div class="wxtime">{{wxtime}}</div>
             </div>
           </div>
           <div class="userxw">我刚刚调整了雪球组合</div>
           <div class="gjl">
             <div class="forwarding">
               <text class="iconfont icon-zhuanfa"></text>
               <span>转发</span>
             </div>
             <div class="comment">
               <text class="iconfont icon-pinglun"></text>
               <span>评论</span>
             </div>
             <div class="reward">
               <text class="iconfont icon-dashang"></text>
               <span>打赏</span>
             </div>
           </div>
         </div>
       </div>
     </scroll-view>
  </div>
</template>


<script>

import "../../../static/iconfont/iconfont.css";
import * as env from '../../utils/index';
import * as apiLogin from '../../components/login'

var options1 = {
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

export default {

  data () {
    return {
      time: '',
      wxtime:'',
      list: '',
      curId: '',
      arrayList: [],
      ec1: {
        options: options1
      }
    }
  },

  methods: {

    splitData () {
      let wxtime = env.formatWxTime (new Date());
      this.wxtime = wxtime;

      let query = JSON.parse(this.$root.$mp.query.detail)
      let curId = query.itemId
      let navTitle = query.itemName
      this.curId = curId
      wx.setNavigationBarTitle({
        title: navTitle
      })

    },

    loadData () {
      let token = wx.getStorageSync('token');
      wx.request({
        url: env.host + `forecast/pl/get_data_list/${this.curId}/latest`,
        header: {
          token: token
        },
        success: (res) => {
          if (res.data.errcode == 41008) {
             apiLogin.firstLogin();
          } else {
                if (res.data.count) {
                     this.list = res.data.data[0].data;
                     this.time = res.data.data[0].trade_date;
                     for (let i = 0; i < this.list.length; i++) {
                         this.arrayList[i] = (this.list[i].weight * 100).toFixed(2);
                     }
                }
             
          }
        }
      });

    }
   
  
  },
  
  mounted () {
    this.splitData()
    this.loadData();
  }
}
</script>


<style>
  html,body {
    height: 100%;
    width: 100%;
  }
  .iconfont {
    font-size: 20px;
    font-family: iconfont;
    margin-right: 1vh;
  }
  ec-canvas {
    position: absolute;
    width: 100%;
    height: 300px;
  }
	.container {
    width: 100%;
    height: 100%;
    background: #F0E9F0;
  }
  .scroll {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .hd {
    width: 100%;
    height: 25vh;
    background: #78A0ED;
    border-top: 1rpx solid #FFFFFF;
    color: #FFFFFF;
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .hdtrd {
    display: flex;
  }
  .hdwk,.hdmnt,.hdjz {
    width: 20%;
    height: 46.8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .wk-text,.total-text,.founded-text,.dtmnt,.dtsy {
    color: #E0E0E0;
  }
  .hdwk,.hdmnt {
    border-right: 1px solid #D69EDD;
  }
  .hdtrd,.hdscnd {
    margin-top: 1vh;
  }
  .total-text,.founded,.found-date {
    margin-left: 2vw;
  }
  .total-digital {
    margin-left: 2vw;
    font-size: 2em;
  }
  .followers {
    right: 5vw;
    position: absolute;
    font-size: 0.8em;
  }
  .data {
    width: 100%;
    font-size: 0.8em;
    background-image: linear-gradient(to top , #78A0ED 70%, #fff);
  }
  .dtshow {
    display: flex;
    text-align: center;
    height: 160rpx;
    align-items: center;
  }
  .dtsy {
    width: 49%;
  } 
  .dtmnt {
    width: 50%;
    border-right: 1px solid #978282;
  }
  .dtmnt,.dtsy {
    display: flex;
    flex-direction: column;
  }
  .dtsz>span {
    font-size: 1.8em;
    color: #fff;
    margin-left: 2vw;
    margin-right: 1vw;
  }
  .gpdc {
    width: 100%;
    border-bottom: #BFCFEF;
    background: #FFFFFF;
    margin-top: 1vh;
  }
  .gpbt {
    height: 8vh;
    position: relative;
    border-bottom: 1px solid #CBCBCB;
  }
  .gpsubt {
    font-family: "微软雅黑";
    font-weight:bold;
    height: 100%;
    font-size: 0.8em;
    margin-left: 2vw;
    display: flex;
    align-items: center;
  }
  .gp-time {
    font-size: 0.8em;
    margin-left: 1vw;
    color: #958B8B;
  }
  .time {
    margin-right: 1vh;
  }
  .gpmore {
    right: 2vh;
    font-size: 0.7em;
    bottom: 1px;
    position: absolute;
  }
  .gpItem {
    border-bottom: 1px solid #CBCBCB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;

  }
  .gp-name {
    font-size: 0.8em;
    margin-left: 2vw;
  }
  .gp-code {
    font-size: 0.7em;
    color: #B6AEAE;
  }
  .weight-code {
    margin-left: 2vw;
    margin-right: 2vw;
  }
  .gpxs {
    font-size: 0.8em;
    margin-right: 2vw;
  }
  .zcpz {
    width: 25vw;
    height: 8vh;
    position: absolute;
    left: 1vh;
    bottom: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0E0C0C;
    font-size: 0.8em;
  }
  .zcpz:active {
    background: #F2EDED;
  }
  .gpItemContainer {
    height: 300px;
    position: relative;
  }
  .echarts {
    display: flex;
    width: 100%;
    height: 300px;
    justify-content: center;
    border-top: 1px solid #D8CECE;
  }
  .chart {
    margin-top: 1vh;
    width: 100%;
    background: #FFFFFF;
  }
  .chartTb {
    background: #FFFFFF;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 1vw;
  }
  .yhcz {
    width: 100%;
  }
  .grxx {
    display: flex;
    height: 55px;
    align-items: center;
  }
  .avatar {
    width: 34.32px;
    height: 35.36px;
    margin-left: 3vw;
    border-radius: 50%;
  }
  .nickname {
    margin-left: 2vh;
    font-size: 0.7em;
  }
  .userxw {
    padding-left: 3vw;
    margin-bottom: 2vh;
    padding-left: 3vw;
  }
  .gjl {
    display: flex;
    border-top: 1px solid #E0D9D9;
  }
  .forwarding,.comment,.reward {
    width: 33.3%;
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: center;
  }
  .forwarding:active,.comment:active,.reward:active {
    background: #F9F2F2;
  }
  .userItem {
    margin-top: 1vh;
    background: #FFFFFF;
  }
</style>