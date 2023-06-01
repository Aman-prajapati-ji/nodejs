const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.url)

    if(req.url = '/home' ) {
        res.end('hello')
    }
    if(req.url = '/' ) {
        res.end('hello 1')
    }
    }
)

server.listen(8000, '127.0.0.1', (err)=>console.log('successfully run server'))