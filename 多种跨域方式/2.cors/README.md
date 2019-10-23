server1.js 为客户端服务器，启动后，浏览器地址访问：`localhost:3000`即可访问页面

`server2.js`为服务器端，启动后，负责接收前端请求

用`server1.js`的web服务器(`localhost:3000`)访问`server2.js`的web服务器则为跨域请求，
用`server2.js`的web服务器(`localhost:4000`)访问`server2.js`的web服务器则不是跨域请求。