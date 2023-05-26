// immediately invoked function expression (IIFE) is a modual warapper function
// tihs data is private 
// grouping operator () inside this annomious function

( function (exports, require, module, __filename, __dirname) {
    const add = () => {
        return 10; 
    }
    const name = 'aman'
    console.log(name)
})()

console.log(__dirname)
console.log(__filename)
