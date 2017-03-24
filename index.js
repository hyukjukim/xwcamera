//index.js

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.use(express.static(__dirname + '/public')); // 1
/*
app.get('/',function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
 res.send('Hello World!'); // "Hello World!"를 보냅니다.
});
*/


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
