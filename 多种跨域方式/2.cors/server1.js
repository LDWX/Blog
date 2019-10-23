let express = require('express');
let app = express();
<<<<<<< HEAD
console.log(express.static(__dirname))
=======
>>>>>>> cda7bc7e02970cd78e21bb18f2c028da11e9f909
app.use(express.static(__dirname));
app.listen(3000);