const exp = require('express')

const express = exp()

express.get('/', (req, res)=>{
    res.send('home')
})
express.get('/home', (req, res)=>{
    res.send('home page')
})
express.get('/contactus', (req, res)=>{
    const { body } = req;
    console.log('body', body)
    res.status(200).send([
        {
            id:1,
            name:'aman prajapati'
        },
        {
            id:2,
            name:'aman rai'
        },
        {
            id:3,
            name:'aman vishwkarma'
        },
        {
            id:4,
            name:'aman kushwah'
        },
    ])
})

express.get('/aboutus', (req, res)=>{
    res.send('about us page')
})

express.listen(8000, ()=>{
    console.log('server is running')
})
