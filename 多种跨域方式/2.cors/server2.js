let express = require('express')
let app = express()
let whitList = ['http://localhost:3000', 'null'] //设置白名单
app.use(function(req, res, next) {
  let origin = req.headers.origin
  console.log('origin: ', origin)
  if (whitList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name,content-type')
    // 允许哪个方法访问我, GET,POST,HEAD是如果满足简单请求，则可以直接请求
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6)
    //设置过期时间
    res.setHeader('Cache-Control', 'max-age=30')
    // 允许返回的头, 自定义的请求头，如果不设置允许返回的话是不能返回的
    res.setHeader('Access-Control-Expose-Headers', 'name')
    if (req.method === 'OPTIONS') {
      res.end() // OPTIONS请求不做任何处理
      return
    }
  }
  next()
  return
})
app.put('/getData', function(req, res) {
  console.log(req.headers)
  res.setHeader('name', 'jw')
  res.setHeader('content-type', 'application/json')
  res.end('我不爱你')
  return
})
app.get('/getData', function(req, res) {
  console.log(req.headers)
  res.end('我不爱你')
  return
})
app.post('/getData', function(req, res) {
  console.log(req.headers)
  res.end('我不爱你')
  return
})
app.use(express.static(__dirname))
app.listen(4000)
