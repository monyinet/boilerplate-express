let express = require('express');
let app = express();

app.use(('/public'), express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})
app.get('/', (req, res) => {
  res.send("Hello Express");
})

app.get('/json', (req, res) => {
  res.json({
    "message": "Hello json"
  });
})































 module.exports = app;
console.log('Hello World');
