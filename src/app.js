const express = require('express');
const app = express();

app.use(express.static('../public'))

// app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.send('hello world');
// });

app.listen(3000, function(){
	console.log('working on 3000');
});