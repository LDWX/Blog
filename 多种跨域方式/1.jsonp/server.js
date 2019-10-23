let express = require('express')
let app = express()

app.get('/say', function(req, res) {
  let { wd, callback } = req.query
  console.log(wd)
  console.log(callback)
<<<<<<< HEAD
  res.jsonp('helloworld')
=======
  res.end(`${callback}('我不爱你')`)
>>>>>>> cda7bc7e02970cd78e21bb18f2c028da11e9f909
})
app.listen(3000)
