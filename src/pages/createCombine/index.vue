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
          <input 
            type="text" 
            placeholder="name" 
            @change="bindInputName($event)"
          />
        </div>
      </div>
      <div class="multiple-input">
        <span class="zh-mode">组合理念</span>
        <div class="input">
          <textarea
            auto-height
            placeholder="description"
            @change="bindInputDescription($event)"
          />
        </div>
      </div>
      <div class="switch-input">
        <div class="secret">公开组合</div>
        <div> 
          <switch 
            checked="switchChecked"
            @change="switchChange($event)"
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
        <div class="tr">
          <div class="th asset-name">资产名称</div>
          <div class="th th-normal">多空</div>
          <div class="th asset-price">仓位</div>
          <div class="th th-normal delete">删除</div>
        </div>
        <div class="tr itemlist" v-for="(item,index) in buffer" :key="index">
          <div class="td asset-name item-name">
            <div class="cate-type">{{item.category}}</div> 
            <div class="category">{{item.name}}</div>
          </div>
          <div class='td th-normal'>
            <div 
              class="toggle-item"
              @click="Toggle(item)"
            >
              {{item.toggleText}}
            </div> 
          </div>      
          <div class="asset-price slider">
            <slider 
              @change="sliderchange($event,item,index)" 
              show-value = true
              :value="priceBuffer[index]"
              block-size ='12'
              activeColor = "#07F228"
            />
          </div>
          <div class="td th-normal delete">
            <div 
              class="delete-item"
              @click="deleteItem(index)"
            >
              del
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
               placeholder="search"
               v-model="query"
               :value="inputValue"
               @input="bindInput($event)"
               @focus="changeItem(ishide,inputValue)"
               @blur="ishide = !ishide"
            />
            </div>  
          </div>
          <div 
            class="add-icon"
            @click="addItem"
          >
            添加股票
          </div>
        </div>
        <div class="search-content" :hidden="ishide">
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
                      @click="chooseItem(second.asset_name,item.text,second.asset_type,second.text)"
                      :key="cindex"
                    >
                      <span>{{second.text}}</span>
                      
                    </li>
                  </ul>
                </li>
              </ul>
            </scroll-view>
        </div>
        <div class="button">
          <div 
            class="btn submit"
            @click="submitItem"
          >
            提交
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
  import Vue from 'vue';

  export default {
    
  	data () {
      return {
        selected: 'zq',
        switchChecked: true,
        date: '2017-12-16',
        index: 0,
        inputName: '',
        inputDescription: '',
        array: ['收盘价','开盘价'],
        toggleText: "做多",
        query: '',
        ishide: true,
        inputValue: '',
        buffer: [],
        priceBuffer: [],
        List: '',
        type: '',
        category: '',
        code: ''
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

      bindInputDescription (e) {
        this.inputDescription = e.target.value;
      },

      bindInputName (e) {
        this.inputName = e.target.value;
      },

      switchChange (e) {
        this.switchChecked = !this.switchChecked;
      },

      sliderchange (e,item,index) {
        let tempValue = e.target.value;
        let tempSum = 0;
        let sum = 0;
        this.priceBuffer[index] = tempValue;

        for (let i of this.priceBuffer) {
          tempSum += i;
        }
        
        sum = tempSum - this.priceBuffer[index];
        
        if (tempSum >= 100) {
          wx.showToast({
            title: '现金用尽',
            duration: 1500
          });
          Vue.set(this.priceBuffer,index,100-sum);
          console.log(this.priceBuffer)
        } else {
          this.priceBuffer[index] = tempValue;
        }
        tempValue = 0;
        sum = 0;
        tempSum = 0;
        item.weight = this.priceBuffer[index];
      },

      submitItem () {
        let open = this.array[this.index] == "收盘价" ? 'open' : 'close';
        console.log(this.buffer)
        let token = wx.getStorageSync('token')
        let obj = {
               "name": this.inputName,
               "access_type": this.switchChecked,
               "desc": this.inputDescription,
               "pl_data": {
                   "trade_date": this.date,
                   "price_type": open,
                   "data": this.buffer
              }
        }
        wx.request ({
          url: 'https://prophets.top/forecast/pl',
          method: 'POST',
          header: { 
            'content-type': 'application/json' ,
            "token": token
          },
          data: obj,
          success (res) {
            console.log(res)
          }
        });
      },

      Toggle (item) {
        item.toggleText =  item.toggleText == "做多" ? "做空" : "做多"
        item.direction = item.toggleText == "做多" ? 1 : -1
      },

      deleteItem (index) {
        this.buffer.splice(index,1)
        this.priceBuffer.splice(index,1)
      },

      resetItem () {
        this.buffer = [];
        this.priceBuffer = [];
      },

      addItem () {
        let flag = true;
        for (let item of this.buffer) {
           if (item.name == this.inputValue) {
               flag = false;
           }
        }
        if (this.inputValue && flag ) {
           this.buffer.push({
             category: this.category,
             name: this.inputValue,
             toggleText: this.toggleText,
             asset_type: this.type,
             asset_code: this.code,
             direction: 1
           });
           this.priceBuffer.push(0);
           this.inputValue = '';
        } else if (this.inputValue && !flag) {
            wx.showToast({
               title: "不能输入相同内容",
               duration: 1000
            });   
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
        let url = `https://prophets.top/asset/asset/${that.inputValue}`;
        wx.request({
          url: url,
          header: {  
            'content-type': 'json'  
          },
          success: (res) => {
            that.List = res.data.results;
          }
        });
      },

      chooseItem (name,category,type,text) {
        this.inputValue = name;
        this.category = category;
        this.type = type;
        this.code = text.split(".")[0];
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
   .input>input,.input-gp>input {
    padding-left: 20rpx;
    padding-top: 4rpx;
    padding-bottom: 6rpx;
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
    background: #E9EBEC;
  }
  .jbxx {
    width: 100%;
    height: 7vh;
    display: flex;
    background: #FFFFFF;
    align-items: center;
    margin-bottom: 1vh;
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
    border: 1px solid #ACA4AB;
    margin-right: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .active {
    background: #3D7AC2;
    color: #FFFFFF;
  }
  .cjzh {
    width: 100%;
    font-size: 16px;
    background: #FFFFFF;
  }
  .single-input,.switch-input {
    display: flex;
  }
  .single-input {
    height: 8vh;
    width: 100%;
    align-items: center;
  }
  .zh-name,.zh-mode,.secret,.trans-time,.trans-price,.add-text {
    text-align: center;
    margin-left: 2vw;
    font-weight: bold;
    font-size: 0.8em;
  }
  .input {
    width: 70vw;
    margin-left: 4vw;
    border: 1px solid #A68585;
  }
  .multiple-input {
    width: 100%;
    display: flex;
    height: 13vh;
  }
  .switch-input {
    margin-top: 1vh;
    height: 7vh;
    align-items: center;
    margin-bottom: 1vh;
    padding-bottom: 10rpx;
  }
  textarea {
    padding-left: 19rpx;
    padding-top: 3px;
    padding-bottom: 3px;
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
    justify-content: center;
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
  .asset-name {
    width: 30%;
    position: relative;
  }
  .asset-price {
    width: 40%;
  }
  .tr {
    display: flex;
    width: 100%;
    height: 85rpx;
  }
  .itemlist {
    border-top: 1px solid #CBCBCB;
  }
  .td,.th{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-name {
    font-size: 0.7em;
    display: flex;
    justify-content: space-around;
  }
  .category {
    font-size: 1.1em;
    font-weight: bold;
    position: absolute;
    right: 2vw;
  }
  .cate-type {
    left: 2vw;
    position: absolute;
  }
  .th { 
    font-weight: bold;
  }
  .th-normal {
    width: 18%;
  }
  .delete-item {
    width: 60rpx;
    height: 43rpx;
    border-radius: 6px;
    border: 1px solid #E6DEDE;
    text-align: center;
  }
  .toggle-item {
    width: 80rpx;
    height: 47rpx;
    border-radius: 12rpx;
    border: 2rpx solid #E6DEDE;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .delete {
    margin-right: 0;
  }
  .delete-item:active,.toggle-item:active {
    background: #58F3E2;
  }
  .newItem {
    margin-top: 1vh;
    width: 100%;
    height: 40vh;
    background: #fff;
    position: relative;
  }
  .addItem {
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
    justify-content: space-between;
  }
  .add-icon {
    padding: 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #EBEEB0;
    border-radius: 6px;
    margin-right: 12px;
  }
  .add-icon:active {
    background: #BBBBE2;
  }
  .input-gp {
    display: flex;
    align-items: center;
    border: 1px solid #A68585;
  }
  .input-gp>input {
    height: 1.4em;
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
  .submit {
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


