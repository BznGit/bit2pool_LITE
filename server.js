let express = require('express');
let Client = require('stratum').Client;
let bodyParser = require('body-parser');
let app = express();
app.use(express.static('dist'));
app.listen(8080, ()=>{
	console.log('Server run 8080 port');
	
});
var client = new stratum.Client();

app.use(bodyParser.json());
app.post('/check_stratum_status', (reg, res,)=>{
	var adress = reg.body;
	console.log('stratum', adress)
	client = Client.create();
	client.connect({
		host: adress.stratum,
		port: adress.coin
	}).then(function(a){ return a
	}).then(function(value){
		currStat={
			name:adress.stratum,
				status: 'green'
			}
		console.log(currStat)
		res.send(currStat);
		
	});

}) 
