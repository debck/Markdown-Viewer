const express = require('express');
const app = express();
const showdown = require("showdown");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//routes
app.get('/', (req,res) => {
	res.render('home');
});

const port = process.env.PORT || 4000;
app.listen(port, () =>{
	console.log(`Server started at ${port}`);
});