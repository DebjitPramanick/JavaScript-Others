// Node.js streaming -------------------------------------------------------------

// 1. Readable stream
// 2. Writable stream
// 3. Duplex stream
// 4. Tranform stream


const fs = require('fs')
const http = require('http')

const server = http.createServer();


server.on('request', (req,res) => {
    // fs.readFile('input.txt', (err,data) => {
    //     if(err) return console.error(err)
    //     res.end(data.toString())
    // })
    const rStream = fs.createReadStream('input.txt')

    // rStream.on('data', (chunk) => {
    //     res.write(chunk)
    // })

    // rStream.on('end',() => {
    //     res.end();
    // })


    rStream.pipe(res)
})

server.listen(8000, () => {
    console.log("Server connected...")
})