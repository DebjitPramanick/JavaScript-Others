// For creating server we need "http" module

const http = require('http');
const fs = require('fs');

// No to create server use ".createServer()" method

const server = http.createServer( (req,res) => {
    // console.log(req.url);

    // This is called routing
    if(req.url == "/") res.end("Hello from the other side.");
    else if(req.url == "/api/user"){
        fs.readFile(`${__dirname}/users.json`, "utf8", (err,data) => {
            res.end(data);
        })
        
    }
    else{
        //res.writeHead(404);
        res.end("Page does not exist.");
    }
})

// To get result after request we have to listen to server
// Listen function takes port number as a parameter

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port number 8000.")
});



// Creating event -------------------------------------------------------------


const EventEmitter = require('events');

const event = new EventEmitter();

// Emitting event

event.on('print-name', (name) => {
    console.log(`Your name is ${name}`)
})

event.emit('print-name', "Debjit");



