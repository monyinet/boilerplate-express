let express = require('express');
let app = express();
app.use(express.static(`${__dirname}/public`))
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);  
})
app.get('/', (req, res) => {
  res.send("Hello Express");
})



































 module.exports = app;
console.log('Hello World');
