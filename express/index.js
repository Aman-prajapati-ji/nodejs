const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')

const pp = path.join(__dirname, '../express/partialPath')

// template engine
app.set('view engine','hbs')
app.set('views', './template')  
hbs.registerPartials(pp)

app.get('/', (req, res)=>{
    res.render('index',{
        name:'aman prajapati'
    })
})

app.get('/home', (req, res)=>{
    res.send('hello mera bhai')
})

app.get('*', (req, res)=>{
    res.render('404', {
        error:'400 Not Found'
    })
})

app.listen(8000, '127.0.0.1', (err)=>{
    console.log('server running')
})
