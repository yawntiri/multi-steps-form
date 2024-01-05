const express = require('express');
const server = express();
const routerApp = require('./routes/route.js');
const port = 3000;

server.use(express.json())
server.use('/api/', routerApp)

server.listen(port, ()=>{
console.log(`server listening on port ${port}`)
});