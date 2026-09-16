const http=require('http');
const PORT=3001;  //RUNNING NODE JS WEB DEVELOPMENT CODE 

const server =http.createServer((req,res)=>{
    console.log(`Request received: ${req.method} ${req.url}`);

    //Set staus code for headers

    res.statusCode=200;
    res.setHeader('content type', 'text/plain');
    res.setHeader('X-powered by','Node.js');

    //send response body
     res.end('Hello world');
});

server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
});