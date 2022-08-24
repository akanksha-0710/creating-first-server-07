const http = require('http');

const port = 8091;

http
    .createServer((request, response) => {
        response.writeHead(200, {"content-type":"text / html"});
        response.write("<h1>hello,this is from my server</h1>");
        response.end();
    })
        .listen(port, () => {
            console.log(`Nodejs server started on port ${port}`);
        });

// http://Localhost:8091