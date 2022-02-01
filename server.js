let express = require('express');

let bodyParser = require('body-parser');
let app = express();
app.use(express.static('dist'));
app.listen(8080, ()=>{
	console.log('Server run 8080 port');
	
});

