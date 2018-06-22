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
              :value="inputName" 
              placeholder-style='margin-left:3px'
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
          <div class="predict-type">
            <div class="type-text">预测类型</div>
            <div class="price">
              <picker 
                mode="selector"
                :value="index"
                :range="array"
                @change="indexChange($event)"
              >
                {{array[index]}}
              </picker>
            </div>
          </div>
          <div class="trans-date">
            <div class="trans-time">预测区间</div>
            <div class="date"> 
              <picker 
                mode="date"
                :value="date"
                :end="date1"
                @change="dateChange($event)"
              >
                {{date}}
              </picker>
            </div>
            <span class="mid-text">至</span>
            <div class="date">
              <picker 
                mode="date"
                :value="date1"
                :start="date"
                :end="date2"
                @change="dateChange1($event)"
              >
                {{date1}}
              </picker>
            </div>
          </div>  
          <div class="trans-date" :class="{activeType: showTimePicker}">
            <div class="trans-time">相对起点</div>
            <div class="date"> 
              <picker 
                mode="date"
                :value="date3"
                @change="dateChange2($event)"
              >
                {{date3}}
              </picker>
            </div>
          </div> 
        </div>
      </div>  
      <div class="combination">
        <div class="combine-row" :class="{activeType: isChoose}">
          <div class="combine-item invest-name">
            <div class="item-text">投资组合1</div>
            <div class="zh-input">
              <input 
                type="text" 
                placeholder="投资组合" 
                :value="combinationName"
                placeholder-style='text-align:center'
                @change="bindInputCBName($event)"
              />
            </div>
          </div>
          <div class="combine-item select-type">
            <div class="type-select">
              <picker 
                mode="selector"
                :value="index1"
                :range="typeList"
                @change="typeChange($event)"
              >
                {{typeList[index1]}}
              </picker>
            </div>
          </div>
          <div class="combine-item ratio" :class="{activeType: ischange}">
            <div class="item-text">{{typedata}}</div>
            <div class="ratioInput">
              <input 
                type="text" 
                placeholder="ratio" 
                :value="nameValue0"
                placeholder-style='text-align:center'
                @change="bindInputRatio($event)"
              />
            </div>
          </div>
          <div class="combine-item ratio" :class="{activeType: ischange0}">
            <div class="item-text">{{typedata}}</div>
            <div class="ratioInput">
              <input 
                type="text" 
                placeholder="ratio" 
                :value="nameValue1"
                placeholder-style='text-align:center'
                @change="bindInputRatio1($event)"
              />
            </div>
          </div>
        </div>
        <div class="combine-row" :class="{activeType: isSelected}">
          <div class="combine-item invest-name-mix">
            <div class="item-text">投资组合1</div>
            <div class="zh-input">
              <input 
                type="text" 
                placeholder="投资组合" 
                :value="combinationName"
                placeholder-style='text-align:center'
                @change="bindInputCBName($event)"
              />
            </div>
          </div>
          <div class="combine-item select-type-mix">
            <div class="type-select">
              <picker 
                mode="selector"
                :value="index1"
                :range="typeList"
                @change="typeChange($event)"
              >
                {{typeList[index1]}}
              </picker>
            </div>
          </div>
          <div class="combine-item ratio" :class="{activeType: ischange1}">
            <div class="item-text">投资组合2</div>
            <div class="ratioInput">
              <input 
                type="text" 
                placeholder="投资组合2" 
                :value="nameValue2"
                placeholder-style='text-align:center'
                @change="bindInputNewName($event)"
              />
            </div>
          </div>
          <div class="combine-item ratio" :class="{activeType: ischange2}">
            <div class="item-text">投资组合3</div>
            <div class="ratioInput">
              <input 
                type="text" 
                placeholder="投资组合3" 
                :value="nameValue3"
                placeholder-style='text-align:center'
                @change="bindInputNewName1($event)"
              />
            </div>
          </div>
          </div>
      </div>
      <div class="btnContainer">
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
        date: '2018-01-01',
        date1: "2018-12-01",
        date2: '2050-01-01',
        date3: '2018-01-01',
        index: 0,
        index1: 2,
        inputName: '',
        inputDescription: '',
        array: ['绝对点位预测','绝对收益率预测','相对点位预测','相对收益率预测'],
        typeList: ['强于','弱于','介于'],
        typedata:"点位",
        query: '',
        showTimePicker: true,
        isSelected:true,
        isChoose: false,
        ischange: false,
        ischange0: false,
        ischange1: false,
        ischange2: false,
        ishide: true,
        combinationName: '',
        nameValue0: '',
        nameValue1: '',
        nameValue2: '',
        nameValue3: '',
        inputValue: '',
        buffer: [],
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

      bindInputCBName (e) {
        this.combinationName = e.target.value;
      },

      bindInputRatio (e) {
        this.nameValue0 = e.target.value;
      },

      bindInputRatio1 (e) {
        this.nameValue1 = e.target.value;
      },

      bindInputNewName (e) {
        this.nameValue2 = e.target.value;
      },

      bindInputNewName1 (e) {
        this.nameValue3 = e.target.value;
      },
      
      switchChange (e) {
        this.switchChecked = !this.switchChecked;
      },

      spliteData () {
        let compare_type = '';
        let compare_method = '';
        let access_type = '';

        if (this.switchChecked) {
            access_type = 'pubic'
        } else {
              access_type = 'private'
        }

        switch (this.array[this.index]) {
             case "绝对点位预测":
                compare_type = "abs.fix_point";
                break;
             case "绝对收益率预测":
                compare_type = "abs.rr";
                break;
             case "相对点位预测":
                compare_type = "rel.fix_point";
                break;
             case "相对收益率预测":
                compare_type = "rel.rr";
                break;
        }

        switch (this.typeList[this.index1]) {
             case "强于":
                compare_method = ">";
                break;
             case "弱于":
                compare_method = "<";
                break;
             case "介于":
                compare_method = "between";
                break;
        }
        
        let asset_2 = '';
        let asset_3 = '';
        let redate = '';
        let asset_type_2 = this.typedata;

        if (this.array[this.index].indexOf("绝对") == -1) {
            asset_2 = this.nameValue2;
            asset_3 = this.nameValue3;
            asset_type_2 = '';
            if (this.date3 != '2018-01-01') {
                redate = this.date3
            } else {
                  redate = this.date
            }
        } else {
              asset_2 = this.nameValue0;
              asset_3 = this.nameValue1
        }

        let obj = {
          "data": {
              "name": this.inputName,
               "access_type": access_type,
               "desc": this.inputDescription,
               "date_from": this.date,
               "date_to": this.date1,
               "params": {
                  "compare_type": compare_type,
                  "asset_1": this.combinationName,
                  "compare_method": compare_method, 
                  "asset_type_2": asset_type_2,
                  "value_2": asset_2,
                  "value_3": asset_3,
                  "date_start": redate,
               }
          }
        }
        return obj;
      },

      submitItem () {
        let token = wx.getStorageSync('token')
        let obj = this.spliteData();
        console.log(obj)
        wx.request ({
          url: 'https://prophets.top/forecast/cmp/create',
          method: 'POST',
          header: { 
            'content-type': 'application/json' ,
            "token": token
          },
          data: obj,
          success (res) {
            
          }
        });
      },

      deleteItem (index) {
        this.buffer.splice(index,1)
        this.priceBuffer.splice(index,1)
      },

      resetItem () {
        this.inputName = ''
        this.inputDescription = ''
        this.date = '2018-01-01'
        this.date1 = "2018-12-01"
        this.index =  0
        this.index1 = 2
        this.typedata = "点位"
        this.showTimePicker = true
        this.isSelected = true
        this.isChoose = false
        this.ischange = false
        this.ischange0 = false
        this.ischange1 = false
        this.ischange2 = false
        this.combinationName = ''
        this.nameValue0 = ''
        this.nameValue1 = ''
        this.nameValue2 = ''
        this.nameValue3 = ''
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

      chooseItem (name,category,type,code) {
        this.inputValue = name;
        this.category = category;
        this.type = type;
        this.code = code;
      },

      changeItem (ishide) {
         let that = this;
         that.ishide = !ishide; 
      },

      dateChange (e) {
        this.date = e.target.value;
      },
      dateChange1 (e) {
        this.date1 = e.target.value;
      },
      dateChange2 (e) {
        this.date3 = e.target.value;
      }, 
      
      indexChange (e) {
        this.index = e.target.value;
        if (this.array[this.index].indexOf("绝对") == -1) {
            this.index1 = 2;
            this.isSelected = false;
            this.isChoose = true;
            this.showTimePicker = false;

            this.ischange0 = false;
            this.ischange = false;
            this.ischange1 = false;
            this.ischange2 = false;
        } else {
              this.index1 = 2;
              this.isSelected = true;
              this.isChoose = false; 
              this.showTimePicker = true;

              this.ischange0 = false;
              this.ischange = false;
              this.ischange1 = false;
              this.ischange2 = false;
              if (this.array[this.index].indexOf("点位") == -1){
                  this.typedata = "收益率"
              } else {
                    this.typedata = "点位"
                }
        }
      },
      typeChange (e) {
        this.index1 = e.target.value;
        if (this.typeList[this.index1] == "强于") {
            this.ischange0 = true;
            this.ischange = false;
            this.ischange1 = true;
            this.ischange2 = false;
        } else if (this.typeList[this.index1] == "介于") {
              this.ischange0 = false;
              this.ischange = false;
              this.ischange1 = false;
              this.ischange2 = false;
        } else {
              this.ischange = true;
              this.ischange0 = false;
              this.ischange1 = false;
              this.ischange2 = true;
        }
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
    border: 1px solid #A68585;
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
    margin-bottom: 1vh;
  }
  .basic-info {
    width: 100%;
    background: #FFFFFF;
  }
  .trans-date {
    width: 100%;
    display: flex;
    height: 5vh;
    align-items: center;
    padding-bottom: 1vh;
  }
  .predict-type {
    display: flex;
    height: 6vh;
    align-items: center;
    padding-top: 2vh;
    margin-bottom: 2vh;
  }
  .date {
    width: 32vw;
    justify-content: center;
  }
  .mid-text {
    margin-left: 4vw;
  }
  .date,.price {
    border: 1px solid #F2DEFC;
    margin-left: 4vw;
    text-align: center;
    height: 5vh;
    display: flex;
    align-items: center;
  }
  .trans-time,.type-text {
    margin-left: 2vw;
  }
  .price {
    width: 35vw;
    justify-content: center;
  }
  .combine-row {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .combine-item {
    height: 11vh;
    position: relative;
  }
  .select-type {
    width: 18%;
  }
  .select-type-mix {
    width: 12%;
  }
  .invest-name {
    width: 30%;
  }
  .invest-name-mix {
    width: 25%;
  }
  .ratio {
    width: 20%;
  }
  .zh-input,.ratioInput {
    width: 100%;
    border: 1px solid #A68585;
  }
  .item-text {
    text-align: center;
    padding-top: 18rpx;
    padding-bottom: 14rpx;
  }
  .combination,.btnContainer {
    width: 100%;
    font-size: 0.8em;
    background: #FFFFFF;
    position: relative;
  }
  .type-select {
    border: 1px solid #A68585;
    width: 100%;
    position: absolute;
    bottom: 1px;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .activeType {
    display: none;
  }
  .button {
    display: flex;
    position: absolute;
    right: 5vw;
    top: 3vh;
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


