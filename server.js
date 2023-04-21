const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/submit-form', (req, res) => {
    let title = req.body.title;
    let language = req.body.language;
    let code = req.body.code;
    res.send(`Title: ${title} Language: ${language}`);
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);