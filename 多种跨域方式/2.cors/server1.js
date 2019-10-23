let express = require('express');
let app = express();
console.log(express.static(__dirname))
app.use(express.static(__dirname));
app.listen(3000);