const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));
app.set('views', __dirname + '/build/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/*', (req, res) => {
  res.render('index.html');
});

app.listen(8081, () => {
  console.log('Material-Magic listening on port 8081!');
});
