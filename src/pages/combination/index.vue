<template> 
  <div class="container">
    <scroll-view scroll-y="true" class="scroll" >
  	<div class="jbxx">
      <div class="left-tab">基本信息</div>
      <div class="right-tab">
        <div 
          class="select-item"
          :class="{active:selected == 'zq'}"
          @click="selectItem('zq')"
        >
          证券资产
        </div>
        <div 
          class="select-item"
          :class="{active:selected == 'sz'}"
          @click="selectItem('sz')"
        >
          数字资产
        </div>
        <div 
          class="select-item"
          :class="{active:selected == 'hh'}"
          @click="selectItem('hh')"
        >
          混合资产
        </div>
      </div> 
    </div>
    <div class="cjzh">
      <div class="single-input">
        <div class="zh-name">组合名称</div>
        <div class="input">
          <input type="text" placeholder="name" placeholder-style='margin-left:3px'>
        </div>
      </div>
      <div class="multiple-input">
        <span class="zh-mode">组合理念</span>
        <div class="input">
          <textarea
            auto-height
            placeholder="description"
          />
        </div>
      </div>
      <div class="switch-input">
        <div class="secret">公开组合</div>
        <div> 
          <switch 
            checked="switchChecked"
            bindchange="switchChange"
          />
        </div>
      </div>
    </div>
    <div class="manual">
      <div class="basic-info">
        <div class="trans-date">
          <div class="trans-time">交易日期</div>
          <div class="date"> 
            <picker 
              mode="date"
              :value="date"
              start="2000-01-01"
              end="2100-01-01"
              @change="dateChange($event)"
            >
              {{date}}
            </picker>
          </div>
        </div>
        <div class="trans-m">
          <div class="trans-price">价格</div>
          <div class="price">
            <picker 
              mode="selector"
              :value="index"
              :range="array"
              @change="priceChange($event)"
            >
              {{array[index]}}
            </picker>
          </div>
        </div>
      </div>
      <div class="chart">
        <div class="tr bg-t">
          <div class="th">资产类别</div>
          <div class="th">资产名称</div>
          <div class="th">仓位</div>
          <div class="th">删除</div>
        </div>
        <div class="tr bg-c" v-for="(item,index) in buffer" :key="index">
          <div class="td td-cell">
            {{item.category}}
          </div>
          <div class='td td-cell item-name'>
            {{item.name}}
          </div>      
          <div class="td td-cell">
          </div>
          <div class="td">
            <div 
              class="delete-item"
              @click="deleteItem(index)"
            >
              delete
            </div>
          </div>
        </div>
      </div>
      <div class="newItem">
        <div class="addItem">
          <div class="add-text">添加资产</div>
          <div class="input-wrap">
            <div class="input-gp">
              <input
               placeholder-style='margin-left:3px'
               placeholder="search"
               v-model="query"
               :value="inputValue"
               @input="bindInput($event)"
               @focus="changeItem(ishide,inputValue)"
               @blur="ishide = !ishide"
            />
            </div>
            
            <div 
              class="search-content"
              :hidden="ishide"
            >
              <scroll-view scroll-y="true" class="scroll" >
              <ul>
                <li
                  class="first-item"
                  v-for="(item,index) in List"
                  :key="index"
                >       
                  <div class="first-title item-info">{{item.text}}</div>  
                  <ul>
                    <li
                      class="second-item item-info"
                      v-for="(second,cindex) in item.children"
                      :class="{ odd : cindex % 2 == 0 }"
                      @click="chooseItem(second.text,item.text)"
                      :key="cindex"
                    >
                      <span>{{second.text}}</span>
                      
                    </li>
                  </ul>
                </li>
              </ul>
              </scroll-view>
            </div>
          </div>
          <div class="addIcon"></div>
        </div>
        <div class="button">
          <div 
            class="btn confirm"
            @click="addItem"
          >
            确认
          </div>
          <div 
            class="btn reset"
            @click="resetItem"
          >
            重置
          </div>
        </div>
      </div>
    </div>  
    </scroll-view>
  </div>
</template>


<script>

  export default {
  	data () {
      return {
        selected: 'zq',
        switchChecked: true,
        date: '2017-12-16',
        index: 0,
        array: ['美国', '中国', '巴西', '日本'],
        query: '',
        ishide: true,
        inputValue: '',
        buffer: [],
        List: '',
        category: ''
      }
  	},

  	computed: {
     
      /*computeList () {
         let vm = this;
         return vm.List.filter(function (item) {
           return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
         });
      }*/
    },

  	methods: {

      deleteItem (index) {
        this.buffer.splice(index,1)
      },

      resetItem () {
        this.buffer = [];
      },

      addItem () {
       if (this.inputValue) {
           this.buffer.push({
             category: this.category,
             name: this.inputValue
           });
           this.inputValue = '';
       } else {
             wx.showToast({
               title: "不能为空",
               duration: 1000
             });
       } 
        
      },

      bindInput (e) {
        let that = this;
        that.inputValue = e.target.value;
        let url = `http://10.0.3.66:8100/asset/get_list/${that.inputValue}`;
        wx.request({
          //url: 'http://127.0.0.1:6060/search',
          url: url,
          header: {  
            'content-type': 'application/json' // 默认值  
          },
          success: (res) => {
            that.List = res.data.results;
          }
        });
      },

      chooseItem (item,category) {
        this.inputValue = item;
        this.category = category;
      },

      changeItem (ishide) {
         let that = this;
         that.ishide = !ishide; 
      },

      dateChange (e) {
        this.date = e.target.value;
      },
      
      priceChange (e) {
        this.index = e.target.value;
      },

      selectItem (item) {
        this.selected = item;
      }
  	}
  }  
</script>


<style> 
  html,body {
  	width: 100%;
  	height: 100%;
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
    background: #F0E7E7;
  }
  .jbxx {
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #CAC1C1;
  }
  .left-tab {
    position: absolute;
    left: 2vw;
    margin-right: 3vw;
    font-weight: bold;
    font-size: 16px;
  }
  .right-tab {
    display: flex;
    position: absolute;
    right: 3vw;
    height: 5vh;

  }
  .select-item {
    width: 20vw;
    text-align: center;
    font-size: 0.8em;
    border: 1px solid #2E73E1;
    margin-right: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    background: #2E73E1;
  }
  .cjzh {
    width: 100%;
    font-size: 16px;
    border-bottom: 2px solid #CAC1C1;
  }
  .single-input,.switch-input {
    display: flex;
  }
  .single-input {
    height: 6vh;
    width: 100%;
    align-items: center;
  }
  .zh-name,.zh-mode,.secret {
    text-align: center;
    margin-left: 2vw;
  }
  .input {
    width: 70vw;
    margin-left: 4vw;
    border: 1px solid #F3EEEE;
  }
  .multiple-input {
    width: 100%;
    display: flex;
    height: 13vh;
    margin-top: 1vh;
  }
  .switch-input {
    margin-top: 1vh;
    height: 7vh;
    align-items: center;
    margin-bottom: 1vh;
  }
  textarea {
    padding: 3px;
  }
  switch {
    margin-left: 4vw;
  }
  .manual {
    width: 100%;
    font-size: 0.8em;
  }
  .basic-info {
    width: 100%;
    display: flex;
    height: 6vh;
    align-items: center;
    margin-bottom: 1vh;
    background: #FFFFFF;
  }
  .trans-date {
    width: 60%;
    display: flex;
    height: 5vh;
    align-items: center;
  }
  .trans-m {
    width: 40%;
    display: flex;
    height: 5vh;
    align-items: center;
    margin-left: 8vw;
  }
  .date {
    width: 32vw;
  }
  .price {
    width: 10vw;
  }
  .date,.price {
    border: 1px solid #F2DEFC;
    margin-left: 4vw;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .trans-time {
    margin-left: 2vw;
  }
  .price {
    width: 16vw;
    justify-content: center;
  }
  .chart {
    width: 100%;
    background: #FFFFFF;
  }
  .tr {
    display: flex;
    width: 100%;
    height: 6vh;
  }
  .td {
    width: 25%;
    border: 1px solid #D1B9B9;
    margin-right: -1px;
    margin-bottom: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-name {
    font-size: 0.6em;
  }
  .th {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .delete-item {
    width: 135rpx;
    height: 43rpx;
    border-radius: 6px;
    border: 1px solid #E6DEDE;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .delete-item:active {
    background: #58F3E2;
  }
  .newItem {
    margin-top: 1vh;
    width: 100%;
    height: 40vh;
    background: #FDC4C4;
    position: relative;
  }
  .addItem {
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
  }
  .add-text {
    margin-left: 2vw;
    margin-right: 3vw;
  }
  .input-gp {
    height: 8vh;
    display: flex;
    align-items: center;
  }
  .input-gp>input {
    height: 1.4em;
  }
  .input-wrap {
     position:absolute;
     top: 0;
     left: 24vw;
     width: 60%;
  }
  .search-content {
    background: #FFFFFF;
    width: 100%;
    height: 20vh;
    position: relative;
  }
  .hidden {
    display: none;
  }
  .first-item {
    text-align: center;
    position: relative;
  }
  .first-title {
    font-weight: bold;
    background: #F37878;
  }
  .first-item>ul {
    top: 20px;
  }
  .item-info {
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .odd {
    background: #90BCD8;
  }
  .button {
    position: absolute;
    right: 5vw;
    bottom: 3vh;
    display: flex;
  }
  .confirm {
    margin-right: 3vw;
  }
  .btn {
    width: 14vw;
    height: 7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #EBEEB0;
    border-radius: 6px;
  }
  .btn:active {
    background: #BBBBE2;
  }
</style>


