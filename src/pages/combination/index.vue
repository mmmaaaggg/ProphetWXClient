<template> 
  <div class="container">
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
        <div class="tr bg-c" >
          <div class="td td-cell">
          </div>
          <div class='td'>
          </div>      
          <div class="td td-cell">
          </div>
          <div class="td td-cell collection">
            <div class="username">
            </div>
          </div>
        </div>
      </div>
      <div class="newItem">
        <div class="addItem">
          <div class="add-text">添加资产</div>
          <div></div>
          <div class="addIcon"></div>
        </div>
        <div class="button">
          <div class="btn confirm">确认</div>
          <div class="btn reset">重置</div>
        </div>
      </div>
    </div>  
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
        array: ['美国', '中国', '巴西', '日本']
      }
  	},

  	

  	methods: {

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
    font-weight: bold;
  }
  .th {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .newItem {
    margin-top: 1vh;
    width: 100%;
    height: 30vh;
    background: #FFFFFF;
    position: relative;
  }
  .addItem {
    display: flex;
    width: 100%;
    height: 6vh;
    align-items: center;
  }
  .add-text {
    margin-left: 2vw;
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


