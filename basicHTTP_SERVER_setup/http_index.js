const http = require('http');

const PORT=3000;

// using the createServer function we can actually create a basic http server using http module
// this function returns a server object , and takes a callback as argument.
const server = http.createServer(function listener(request,response){
    // request -> we will be able to details of incoming http request -> object
    // response -> we will be able to configure what response we need to send
    // for incoming http request ->object

    //this callback is a kind of listener function that is going to collect
    // every http request that we will make to our server.

    // console.log("request details ",request);
    // console.log("response details ",response);

    // if(request.url=='/home'){
    //     console.log(request.method);
    //     response.end("<h1>welcome to home</h1>");
    // }
    console.log("request received");
    response.write("first response ")
    response.write("second response ")
    const obj={
        id:12,
        name:'razzak',
        course:'MERN Stack',
    }
    response.write(JSON.stringify(obj));
    response.end("completed")
})

//it will start the server
server.listen(PORT,function exec(){
    //once server boot up this callback will executed
    console.log(`server is up and running on port ${PORT}`);
    console.log("server is started");
})