const fs = require('fs');

// crud create read update delete

// create folder
fs.mkdirSync('folder')

// create and add data or replace data in file
fs.writeFileSync('folder/app.txt', 'hello world')

// buffer data
const buffer_data = fs.readFileSync('app.txt')
console.log(buffer_data);

// converted in string
const str_data = buffer_data.toString()
console.log(str_data)

// add data in file
fs.appendFileSync('folder/app.txt', ' jai shree ram')

const updated_buffer_data = fs.readFileSync('app.txt')

const updated_str_data = updated_buffer_data.toString()
console.log(updated_str_data)

// rename file
fs.renameSync('folder/app.txt' ,'folder/myapp.txt')

// delelte file
fs.unlinkSync('folder/myapp.txt')

// delete folder
fs.rmdirSync('folder')
