const fs = require('fs')
const http = require('http')

const server = http.createServer()

// fs.writeFile('data.txt', 'hello', (err)=>{
//     console.log('here is any error', err);
// } )


server.on('request', (req, res)=>{

    // old sctream

    // fs.readFile('data.txt', 'utf-8', (err, data)=>{
    //     if(err) {
    //         console.log('err', err)
    //     } 
    //     else {
    //         res.end(data)
    //     }
    // })

    // new stream 

    const stream = fs.createReadStream('data.txt')

    // stream.on('data', (chunkdata)=>{
    //     res.write(chunkdata)
    // })

    // stream.on('end', ()=>{
    //     res.end();
    // })

    // stream.on('error', ()=>{
    //     res.end('file not found or something want')
    // })

    // 3rd way (write, read)

    stream.pipe(res)

})

server.listen(8000, '127.0.0.1' ,()=>{
    console.log(`server 127.0.0.1 and port 8000 starding`)
})

