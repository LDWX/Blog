let express = require('express')
let app = express()

app.get('/say', function(req, res) {
  let { wd, callback } = req.query
  console.log(wd)
  console.log(callback)
  res.jsonp('helloworld')
})
app.listen(3000)
