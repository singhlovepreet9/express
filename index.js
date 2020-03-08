const express = require('express');
const app = express();
const ip = require("ip");
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/hello', (req, res) => {
	console.log('called');
	res.render('index', { title: 'new', message: `hello world from ${ip.address()}` });
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening to port ${port}....`));
