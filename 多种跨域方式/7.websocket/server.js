let express = require('express');
let app = express();
let WebSocket = require('ws');
let wss = new WebSocket.Server({port:3000});
wss.on('connection',function(ws) {
  console.log('连接成功。')

  // 同一个websocket中可以有多个onmessage方法。
  ws.on('message', function (data) {
    console.log(data);
    ws.send('返回消息')
  });

  ws.on('message', function(data) {
    console.log('second:', data)
    ws.send('第二个message')
  })
})



