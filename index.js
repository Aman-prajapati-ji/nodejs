// if using es modual write this code "type": "module", in package.json

// import { writeFile, appendFileSync } from 'node:fs';

// writeFile('message.txt', 'Hello world this is boy aman prajapati 93400', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File written successfully.');
//   }
// });

// appendFileSync('message.txt', 'hello mera bhai or kya sab bdiya', (err)=>{
//     if(err) {
//         console.log('there is any error while apdating ');
//     }else {
//         console.log('File update successfully 2.0.');
//     }

// })

const fs = require('fs');

// const filePath = 'app.txt';

// const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//   console.log(chunk);
// });

// readStream.on('end', () => {
//   console.log('File reading completed.');
// });

// readStream.on('error', (err) => {
//   console.error('Error while reading the file:', err);
// });

// crud create read update delete

// create folder
// fs.mkdirSync('folder')

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
