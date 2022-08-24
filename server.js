const http = require("http");


const port = 8091;  

const toDoList = ["Completed Node Byte", "Play cricket"];

http
    .createServer((req, res) => {
        
        const { method, url } = req;
        if (url === "/todos"){
            if (method ==="GET"){
                res.writeHead(200);
                res.write(toDoList.toString());
            }else if (method === "POST"){
                let body ="";
                req.on('error',(err) =>{
                    console.error(err);   
                })
                .on('data',(chunk)=> {
                    body +=chunk;
                    console.log(chunk);                
                })
                .on('end',()=>{
                    body = JSON.parse(body);
                    console.log("data:",body);
                });
            }
            else{
                res.writeHead(501);
            }
        } else{
            res.writeHead(404);
        }
        res.end();
    })
    .listen(port, () => {
       
        console.log(`Nodejs server started on port ${port}`);
    });

// http://Localhost:8091