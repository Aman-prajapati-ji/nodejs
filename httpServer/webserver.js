const http = require('http')
const contactus = require('./contactus')
const fs = require('fs')

const server = http.createServer((req, res) => {

    const routes = ['/', 'home', 'aboutus', 'contactus', 'termsofuse', 'privacypolicy']

    if (req.url === '/') {
        res.end('Welcome to the home page: aman@gmail.com')
    } else {
        const foundRoute = routes.find(route => req.url === `/${route}`)
        console.log(foundRoute);
        if (foundRoute) {
            if (foundRoute === 'home') {
                res.end('Welcome to the home page: aman@gmail.com')
            }
            else if (foundRoute === 'aboutus') {
                res.end('My name is Aman Prajapati: about us')
            } 
            else if (foundRoute === 'contactus') {
                
                // fs.readFile('contactus.txt', 'utf-8', (err, data)=>{
                //     console.log(err)
                //     console.log('data', data)
                // })
                
                // res.write(contactus)
                res.writeHead(200, {'content-type':'application/json'})
                console.log(contactus)
                res.end(contactus)
            }
            else if (foundRoute === 'termsofuse') {
                res.end('this is termsofuse: termsofuse')
            }
            else if (foundRoute === 'privacypolicy') {
                res.end('this is privacypolicy: privacypolicy')
            }
        } else {
            res.statusCode = 404
            res.writeHead(404, {"content-type":"text/html"})
            res.end('<h3>404 Not Found</h3>')
        }
    }
    
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log('you are in server : 127.0.0.1 and port number : 8000')
})