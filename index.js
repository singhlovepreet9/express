const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/hello', (req, res) => {
	console.log('dmfbhdbfj');
	res.render('index', { title: 'My appv2sjdhsdhjshdjshjd', message: 'hello worldv2' });
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening to port ${port}....`));
