var express = require('express');
var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
});
