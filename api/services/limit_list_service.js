const http = require('http');
const app = require('app');
const port = 3000;

const Server = http.require.createServer((app) => {
    // res.writeHead(200,{"Content-Type":"text/plain"});
    // res.write("hi");
    // res.end();
});
Server.listen(port);