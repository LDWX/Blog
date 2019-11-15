let express = require('express')
let path = require('path')
let app = express()
app.get('/getData', function(req, res) {
  console.log('///////////////////////////////')
  // res.setHeader("Cache-Control", "public, max-age=10")
  // console.log(req.headers)
  console.log(res.getHeaders())
  // res.end('我不爱你')
  res.sendFile(`${__dirname}/scene.jpg`)
  return
})

//这里的maxAge等设置时针对html页面的
app.use(express.static(path.join(__dirname, "./"), {
  maxAge: '10s',
  expires: '10s',
  etag: false,
  lastModified: false
}))
app.listen(4000)
