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
                         <span class="found-date">{{foundtime}}</span> 
                     </span>
                 </div>
                 <div class="hdscnd">
                     <span class="total-text">总收益</span>
                     <span class="total-digital">{{rr_tot}}</span>%
                 </div>
                 <div class="hdtrd">
                     <div class="hdwk">
                         <div class="wk-text">日</div>
                         <div class="hdsz">0.00%</div>
                     </div>
                     <div class="hdmnt">
                         <div class="wk-text">月</div>
                         <div class="hdsz">{{rr_month}}%</div> 
                     </div>
                     <div class="hdjz">
                         <div class="wk-text">净值</div>
                         <div class="hdsz">{{final_value}}</div>
                   </div>
                 </div> 
                 <div class="button-collection" v-on:click="handleCollect(curId)">
                     <wxc-icon v-if ="collect" size="60" type="star-active" class="collected" />
                     <wxc-icon v-else  size="60" type="star" class="collected"></wxc-icon>
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
                         <div class="dtsz"><span>{{times_yeb}}%</span></div>  
                     </div>
                 </div>
                 <div class="dtjs">
                     <div class="avar">
                         <div class="avatar-img">
                             <open-data class='icon' type="userAvatarUrl"></open-data>
                         </div>
                     </div> 
                     <div class="avar-comment">感谢提醒，如有哪里需要改进的多多指教</div>
                 </div>
             </div> 
             <div class="gpdc">
                 <div class="gpbt">
                     <span class="gpsubt">最新调仓
                       <span class="gp-time">
                         (<span class="time">{{time}}</span>)
                       </span>
                     </span>
                     <span class="gpmore">
                       更多调仓
                       <span>></span>
                     </span>
                 </div>
                 <div class="gpItemContainer">
                     <div class="gpItem" v-for="(items,index) in list" :key="index" v-if="index < 2">
                         <div class="gp-name">
                             <div class="gpjtmz">{{items.asset_name}}</div>
                             <div class="gp-code">{{items.asset_code}}</div>
                         </div>
                         <div class="gpxs">
                             <span class="weight-before">{{weightbeforelist[index]}}%</span>
                             <span class="weight-code">-></span>
                             <span class="weight">{{weightlist[index]}}%</span>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="chart">
                 <div class="chartTb">
                     <span class="left-nav">资产配置</span>
                     <span 
                       class="right-nav"
                       @click="reset(curId)"
                     >
                       详细仓位
                       <span>></span>
                     </span>
                 </div>
                 <div 
                   class="echarts"
                   @click="reset(curId)"
                 >
                   <mpvue-echarts 
                     :echarts="echarts"
                     :onInit="onInit"
                   />
                 </div>
             </div>
             <div class="chart">
                 <div class="chartTb">
                     <span class="left-nav">收益率走势</span>    
                 </div>
                 <div class="echarts">
                   
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

import "../../../static/iconfont/iconfont.css"
import * as env from '../../utils/index'
import mpvueEcharts from 'mpvue-echarts'
import * as echarts from 'echarts'
import * as apiLogin from '../../components/login'

let chart = null

export default {

    components: {
      mpvueEcharts
    },

    data () {
        return {
            time: '',
            echarts,
            wxtime:'',
            foundtime: '',
            rr_tot: '',
            rr_month: '',
            final_value: '',
            times_yeb: '',
            list: '',
            curId: '',
            collect: false,
            weightlist: [],
            weightbeforelist: [],
            onInit: this.initChart,
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

      reset (id) {
          wx.navigateTo({
              url: "/pages/manual/main?pl_id=" + id
          })
      },

      handleCollect(curId) {
          this.collect = ! this.collect
          let temp = this.collect == true ? 1 : 0; 
          let url =  env.host + `/forecast/pl/favorite/${this.curId}/${temp}`
          let token = wx.getStorageSync('token');
          wx.request({
              url: url,
              method: 'POST',
              header: {
                  token: token
              }
          });  
          wx.showToast({  
              title: this.collect == true ? "收藏成功":"收藏取消",  
              duration: 1000,  
              icon: "sucess",  
              make: true  
          })  
      },

      splitData () {
          let wxtime = env.formatWxTime (new Date());
          this.wxtime = wxtime;

          let query = JSON.parse(this.$root.$mp.query.detail)
          let curId = query.itemId
          let navTitle = query.itemName
          this.curId = curId
          this.collect = query.collected == 1 ? true : false
          wx.setNavigationBarTitle({
            title: navTitle
          })
      },

      loadDataset() {
          let that = this;
          let token = wx.getStorageSync('token');
          wx.request({
              url: env.host + `/forecast/pl/stats/${that.curId}`,
              header: {
                  'content-type': 'json',  
                  token: token
              },
              success (res) {
                  let data = res.data
                  that.foundtime = data.general.created_at.split(" ")[0];
                  that.rr_tot = data.performance.rr_tot;
                  that.rr_month = data.performance.rr_month;
                  that.final_value = Number(data.performance.final_value).toFixed(2);
                  that.times_yeb = Number(data.performance.times_yeb).toFixed(2)
              }
          })
      },

      loadChart () {
          let that = this;
          let token = wx.getStorageSync('token');
          wx.request({
              url: env.host + `/forecast/pl/asset_dist/${that.curId}/latest`,
              header: {
                  'content-type': 'json',
                  token: token  
              },
              success (res) {
                  if (res.data.errcode == 41008) {
                     apiLogin.firstLogin();
                     that.loadChart();
                  }
                  let arr = [];
                  if (res.data.data[0].name_list != null) {
                      for (let item of res.data.data[0].name_list) {
                        let obj = {};
                        obj.name = item
                        obj.icon = 'circle'
                        arr.push(obj)
                      }    
                  }
                  let options = {
                    legend: {
                        orient: 'vertical',
                        y: 'middle',
                        data: arr
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: res.data.data[0].data
                        }
                    ]
                  };
                  
                  chart.setOption(options)
              }
          })
      },

      loadData () {
          let token = wx.getStorageSync('token');
          wx.request({
              url: env.host + `/forecast/pl/data/${this.curId}/latest/record`,
              header: {
                  'content-type': 'json',
                  token: token
              },
              success: (res) => {
                  if (res.data.errcode == 41008) {
                      apiLogin.firstLogin();
                  } 
                  else {
                      if (res.data.count) {
                          this.list = res.data.data[0].data;
                          this.time = res.data.data[0].trade_date;
                          for (let i = 0; i < this.list.length; i++) {
                              this.weightlist[i] = (this.list[i].weight * 100).toFixed(2);
                              this.weightbeforelist[i] = (this.list[i].weight_before * 100).toFixed(2);
                          }
                      }
                  }
              }
          })
      }
     
    
    },
    
    mounted () {
        this.splitData()
        this.loadData()
        this.loadChart()
        this.loadDataset()
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
      color: #D8D2D2;
  }
  .hdwk,.hdmnt {
      border-right: 1px solid #D69EDD;
  }
  .hdtrd,.hdscnd {
      margin-top: 1vh;
  }
  .hdscnd {
      position: relative;
  }
  .total-text,.founded,.found-date {
      margin-left: 2vw;
  }
  .total-digital {
      margin-left: 8vw;
      margin-right: 2vw;
      font-size: 2.5em;
      font-weight: 600;
  }
  .button-collection {
      position: absolute;
      right: 7vw;
      top: 10vh;
  }
  .followers {
      right: 5vw;
      position: absolute;
      font-size: 0.8em;
  }
  .data {
      width: 100%;
      font-size: 0.8em;
  }
  .dtshow {
      display: flex;
      text-align: center;
      height: 160rpx;
      align-items: center;
      background-image: linear-gradient(to top , #78A0ED 70%, #F0E9F0);
  }
  .dtjs {
      width: 100%;
      background: #fff;
      height: 10vh;
      display: flex;
  }
  .avar {
      height: 100%;
      width: 20%;
  }
  .avar,.avar-comment {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .avatar-img,.icon {
      height: 80rpx;
      width: 80rpx;
      border-radius: 50%;
      overflow: hidden;
  }
  .avar-comment {
      margin-left: 5vw;
      width: 60%;
      font-size: 0.8em;
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
      margin-left: 1vw;
      margin-right: 1vw;
  }
  .gpdc {
      width: 100%;
      border-bottom: #BFCFEF;
      background: #FFFFFF;
      margin-top: 1vh;
  }
  .gpbt {
      height: 70rpx;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8em;
  }
  .gpsubt {
      font-weight: bold;
      padding-left: 2vw;
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
      padding-right: 2vw;
      padding-top: 1.5vh;
      font-size: 0.8em;
      color: #ABAAAA;
  }
  .gpmore>span {
      margin-left: 1vw;
      font-size: 1.3em;
  }
  .gpItem {
      border-top: 1px solid #CBCBCB;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 8vh;
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
  .gpItemContainer {
      height: 16vh;
      position: relative;
  }
  .echarts {
      display: flex;
      width: 100%;
      height: 300px;
      justify-content: center;
  }
  .chart {
      margin-top: 1vh;
      width: 100%;
      background: #FFFFFF;
  }
  .chartTb {
      background: #FFFFFF;
      height: 70rpx;
      display: flex;
      align-items: center;
      font-size: 0.8em; 
      border-bottom: 1px solid #CBCBCB;
      justify-content: space-between;
  }
  .left-nav {
      padding-left: 2vw;
      font-weight: bold;
  }
  .right-nav {
      padding-right: 2vw;
      padding-top: 1.5vh;
      font-size: 0.8em;
      color: #ABAAAA;
  }
  .right-nav>span {
      margin-left: 1vw;
      font-size: 1.3em;
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