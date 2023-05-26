const fs = require('fs');

fs.mkdir('aman',(err)=>{
    console.log(err)
})

fs.writeFile('aman/header.js', 'home, contact, privacy, terms of use', (err)=>{
    console.log(err)
})

fs.rename('aman/header.js', 'aman/footer.js' ,(err) => {
    console.log(err)
})

fs.appendFile('aman/footer.js', ' <p>hello my name is aman prajapati</p>', (err) => {
    console.log(err)
})

fs.readFile('aman/footer.js', 'utf-8', (err, data) => {
    console.log(err)
    console.log(data)
})

fs.unlink('aman/footer.js', (err) => {
    console.log(err)
})

fs.rmdir('aman', (err)=>{
    console.log(err)
})



