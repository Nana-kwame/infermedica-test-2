var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set('port', process.env.PORT || 3131);

app.listen(process.env.PORT || 3131);

console.log('Hope this works ', process.env.PORT);
