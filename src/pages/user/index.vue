<template>
  <div class="container">
  	 <scroll-view scroll-y="true" class="scroll">
       <div class="hd">
         <div class="hdfst">
           <span>关注人数：4</span>  
           <span>创建于2018.05.16</span>
         </div>
         <div class="hdscnd">
           <div class="hdwk">
             <div>日</div>
             <div class="hdsz">0.00%</div>
           </div>
           <div class="hdmnt">
             <div>月</div>
             <div class="hdsz">2.44%</div> 
           </div>
           <div class="hdjz">
             <div>净值</div>
             <div class="hdsz">1.0245</div>
           </div>
         </div>
         <div class="hdtrd">
           <span>2.44</span>%总收益
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
          <div class="dtjsr">
            <div class="gpmz">医药强势组合</div>
            <div class="By">By</div>
            <div class="ycr">王博士</div>
          </div>
          <div class="detail">寻找有效投资组合</div>
         </div>
       </div>
       <div class="gpdc">
         <div class="gpbt">
           <div class="gpsubt">最新调仓<span class="gp-time">(<span class="time">{{time}}</span>)</span></div>
           <div class="gpmore">更多>></div>
         </div>
         <div class="gpItemContainer">
           <div class="gpItem">
             <div class="gp-name">
               <div class="gpjtmz">山西汾酒</div>
               <div class="gp-code">SH600809</div>
             </div>
             <div class="gpxs">4.96%</div>
           </div>
           <div class="gpItem">
             <div class="gp-name">
               <div class="gpjtmz">山西汾酒</div>
               <div class="gp-code">SH600809</div>
             </div>
             <div class="gpxs">4.96%</div>
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
      ec1: {
        options: options1
      }
    }
  },

  methods: {

    formatTime (date) {  
      let year = date.getFullYear()  
      let month = date.getMonth() + 1  
      let day = date.getDate()  
  
      let hour = date.getHours()  
      let minute = date.getMinutes()  
      let second = date.getSeconds()  
  
      return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')  
    }, 
    formatWxTime (date) {   
      let month = date.getMonth() + 1  
      let day = date.getDate()  
  
      let hour = date.getHours()  
      let minute = date.getMinutes()  
  
      return [month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute].map(this.formatNumber).join(':')  
    }, 
  
    formatNumber (n) {  
      n = n.toString()  
      return n[1] ? n : '0' + n  
    } 
},
  
  mounted () {
    let time = this.formatTime (new Date());
    let wxtime = this.formatWxTime (new Date());
    this.time = time;
    this.wxtime = wxtime;
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
    color: #FFFFFF;
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .hdscnd {
    display: flex;
    margin-top: 1vh;
  }
  .hdwk,.hdmnt,.hdjz {
    width: 20%;
    height: 46.8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .hdwk,.hdmnt {
    border-right: 1px solid #D69EDD;
  }
  .hdtrd {
    margin-top: 1vh;
  }
  .hdtrd>span {
    font-size: 1.8em;
    margin-right: 1vw;
    margin-left: 2vw;
  }
  .hdfst>span {
    margin-right: 1vw;
    margin-left: 2vw;
  }
  .data {
    width: 100%;
    font-size: 0.8em;
    background: #FFFFFF;
  }
  .dtshow {
    display: flex;
    text-align: center;
    height: 185rpx;
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
    color: #78A0ED;
    margin-left: 2vw;
    margin-right: 1vw;
  }
  .dtjs {
    border-bottom: 2px solid #D0DBF2;
    border-top: 1px solid #C0AFAF;
  }
  .dtjsr {
    width: 100%;
    margin-top: 2vh;
    position: relative;
    display: flex;
    font-size: 1.4em;
    color: #605353;
  }
  .gpmz,.ycr {
    border-bottom: 1vh solid #78A0ED;
    margin-left: 2vw;
  }
  .By {
    position: absolute;
    right: 25vw;
    margin-right: 3vw;
  }
  .ycr {
    position: absolute;
    right: 5vw;
  }
  .detail {
    width: 96%;
    height: 10vh;
    margin: 2vh 2vw 1vh 2vw;
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
  }
  .gpsubt {
    font-family: "微软雅黑";
    font-weight:bold;
    height: 100%;
    margin-left: 2vw;
    display: flex;
    align-items: center;
  }
  .gp-time {
    font-size: 0.8em;
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
    border-top: 1px solid #D0DBF2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;

  }
  .gp-name {
    font-size: 0.8em;
    margin-left: 1vw;
  }
  .gpxs {
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