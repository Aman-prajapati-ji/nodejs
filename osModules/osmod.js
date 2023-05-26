const os = require('os')

console.log(os.arch())
console.log('free memory in byte', os.freemem())

const freeMemory = (((os.freemem() / 1024) / 1024) / 1024)

console.log('free memory in Gb', freeMemory)

console.log('total memory in byte', os.totalmem())

const totalmemory = (((os.totalmem() / 1024) / 1024) / 1024)

console.log('total memory in gb', totalmemory)

console.log('hostname', os.hostname())
console.log('platform', os.platform())
console.log('platform', os.tmpdir())
console.log('platform', os.type())

