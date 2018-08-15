<template>
    <div class="date-select">
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
</template>

<script>

export default {
    data () {
        return {
            index: 0,
            date: '2017-12-16',
            array: ['收盘价','开盘价']
        }
    }
}

</script>

<style>
.date-select {
    width: 100vw;
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
<style>