const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/build'));
app.set('views', __dirname + '/build/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/*', (req, res) => {
  res.render('index.html');
});

app.listen(PORT, () => {
  console.info(`Material-Magic listening on port ${PORT}!`);
});
