<template>
  <div class="container">
     <div class="tr bg-w">
       <div class="th">预测名称</div>
       <div class="th">起止日期</div>
       <div class="th">准确率</div>
       <div class="th">预言家</div>
     </div>
     <div v-for="items in listData.data" :key="pl_id" class="tr bg-g" >
       <div class="td name td-cell">
         {{items.username}}
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
       <div class="td td-cell">
         {{items.pl_id}}
       </div>
     </div>

  </div>
</template>

<script>


export default {
  data () {
    return {
      listData:{}
    }
  },

  components: {
  
  },

  methods: {
   
  },

  onLoad: function (res) {    
    wx.request({  
      url: 'http://10.0.3.66:5000/forecast/get_pl_info_list/1?_=1526623084166',   
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

  }
}
</script>

<style scoped>

.container {
  width: 100%;
  height: 100%;
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
  height: 3em;

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

</style>
