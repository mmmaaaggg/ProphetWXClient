var express = require("express");
var request = require('request');
var testData = require('./testData');
var searchData = require('./searchData');

const server = express();


//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 6060;
//创建服务
/*var server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/plain');
     

    res.end(JSON.stringify(data));

});
server.listen(port,hostName,function(){
    console.log(`服务器运行在http://${hostName}:${port}`);
});*/


server.get('/',(req,res) =>{
  res.send('Hello express');
})


server.get('/list',(req,res) => {
  res.send({data: testData})
})

server.get('/search',(req,res) => {
  res.send({'data': searchData})
})


server.get('/wx/login', function (req, res, next) {
  let code = req.query.code
  console.log(code)

  request.get({
    uri: 'https://api.weixin.qq.com/sns/jscode2session',
    json: true,
    qs: {
      grant_type: 'authorization_code',
      appid: 'wxf3a84d3e002d0877',
      secret: '865a7f90b8d04a128eb8cc3e04dcec3d',
      js_code: code
    }
  }, (err, response, data) => {
    if (response.statusCode === 200) {
     // console.log("[openid]", data.openid)
      //console.log("[session_key]", data.session_key)

      //TODO: 生成一个唯一字符串sessionid作为键，将openid和session_key作为值，存入redis，超时时间设置为2小时
      //伪代码: redisStore.set(sessionid, openid + session_key, 7200)

   //   res.json({ sessionid: sessionid })
    } else {
      console.log("[error]", err)
      res.json(err)
    }
  })
})



server.listen(port,hostName,() => {
    console.log(`服务器运行在http://${hostName}:${port}`);
});