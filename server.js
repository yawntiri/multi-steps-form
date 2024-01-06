const express = require('express');
const app = express();
const port = 3000;
const appRoutes = require('./routes/route.js');


// --- Middlewares ---

app.use(express.json());// express should accept data in json format
app.use(express.urlencoded());// express decodes data sent through html
app.use(express.static('public'));//rendering application on local host
app.use('/', appRoutes)// routes end point


app.listen(port, ()=>{
  console.log(`server is live at ${port}`);
})