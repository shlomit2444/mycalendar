const console = require('console');
const http = require('http');
const app = require('./app');
const svr = http.createServer(app);
const port = process.env.PORT || 8080
const server = http.createServer(app);
//svr.listen(port,()=>{
//console.log("server is up");
//server.listen(port,()=>{console.log("server statred")});
//});
server.listen(port,()=>{console.log("server statred")});
