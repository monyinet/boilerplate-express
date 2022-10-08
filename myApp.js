let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);  
})
app.get('/', (req, res) => {
  res.send("Hello Express");
})



































 module.exports = app;
console.log('Hello World');
