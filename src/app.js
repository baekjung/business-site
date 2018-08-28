const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/helloThere', function(request, response){
	response.send('Hello there!')
});

app.listen(3000, function(){
	console.log('working on 3000');
});