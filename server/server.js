var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static('./public'));

app.get('/something', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on ${port}...`);
});



