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
                <div class="input input-height">
                    <input
                      type="text"
                      placeholder="name"
                      :value="inputName"
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
                      :value="inputDescription"
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
                        <div class="category">{{item.asset_name}}</div>
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
            <div
              class="add-item"
              @click="addItem"
            >
            <!--  <div class="add-symbol">+</div> <!-->
            <div class="add-txt">添加股票</div>
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
</template>


<script>

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
              this.$set(this.priceBuffer,index,100-sum);
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
            let access_type = this.switchChecked == true ? 'public' : 'private'
            let obj = {
                   "name": this.inputName,
                   "access_type": access_type,
                   "desc": this.inputDescription,
                   "pl_data": {
                       "trade_date": this.date,
                       "price_type": open,
                       "data": this.buffer
                  }
            }
           //console.log(JSON.stringify(obj))
            wx.request ({
                url: 'https://prophets.top/forecast/pl',
                method: 'POST',
                header: {
                    'content-type': 'application/json' ,
                    "token": token
                },
                data: obj,
                success (res) {
                    if (res.statusCode == 200) {
                        wx.showToast({
                            title: '创建成功',
                            duration: 1500
                        })
                    }
                    wx.reLaunch({
                        url: '/pages/combinelist/main'
                    })
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
            this.inputName = '';
            this.inputDescription = '';
            this.date = '2017-12-16';
        },

        addItem () {
            let info = {'pages': 'createCombine', 'index':5}
            wx.navigateTo({
                url: "/pages/select/main?info=" + JSON.stringify(info)
            })
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
  	},
    mounted () {
        let detail = this.$root.$mp.query.detail
        if (detail) {
            detail = JSON.parse(detail)
            for (let item of detail) {
                item.toggleText = '做多'
            }
            if (this.buffer.length == 0) {
                for (let i = 0; i < detail.length; i++)
                    this.$set(this.buffer,i,detail[i])
            }
            else {
                for (let i = 0; i < detail.length; i++){
                    for (var j = 0; j < this.buffer.length; j++) {
                        if (this.buffer[j].asset_name == detail[i].asset_name)
                            break
                    }
                    if ( j == this.buffer.length) {
                        this.$set(this.buffer,this.buffer.length,detail[i])
                    }
                }
            }

        }
        else {
            this.buffer = []
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
  .input>input {
      height: 6vh;
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
      background: #EDEDED;
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
      padding-bottom: 3px;
      padding-top: 4rpx;
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
      border-radius: 6px;
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
  .add-item {
      display: flex;
      height: 6vh;
      justify-content: center;
      align-items: center;
      background: #fff;
      margin-top: 1vh;
      color: #8BA4FF;
  }
  .add-item:active {
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
      display: flex;
      justify-content: space-between;
  }
  .submit {
      margin-left: 63vw;
  }
  .btn {
      width: 14vw;
      height: 7vw;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #535C54;
      border-radius: 6px;
      margin-top: 2vh;
  }
  .btn:active {
      background: #BBBBE2;
  }
  .reset {
    margin-right: 4vw;
  }
</style>


