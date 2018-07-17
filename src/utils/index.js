function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('-')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function formatWxTime (date) {   
    let month = date.getMonth() + 1  
    let day = date.getDate()  

    let hour = date.getHours()  
    let minute = date.getMinutes()  

    return [month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')  
} 

//echart数据处理
function splitData(rawData) {
    var categoryData = [];
    var values = [];
    var volumes = [];
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
        volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? -1 : 1]);
    }

    return {
        categoryData: categoryData,
        values: values,
        volumes: volumes
    };
}

//平均间隔日期
function calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data.values[i - j][1];
        }
        result.push(+(sum / dayCount).toFixed(3));
    }
    return result;
}


//主机
const host = 'https://www.prophets.top'


//阴阳色
const upColor = '#00da3c';
const downColor = '#ec0000';

export {
  formatNumber,
  formatTime,
  formatWxTime,
  splitData,
  calculateMA,
  host,
  upColor,
  downColor
}
