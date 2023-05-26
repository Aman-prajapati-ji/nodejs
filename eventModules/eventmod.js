const EventEmmiter = require('events')

const event = new EventEmmiter()

// event.on('get_response', ()=>{
//     console.log('hello this is response of api')
// })

// event.on('get_response', ()=>{
//     console.log('hello this is response of api 2.0')
// })

// event.on('get_response', ()=>{
//     console.log('hello this is response of api 3.0')
// })

event.on('get_response', (sc, msg)=>{
    console.log(`hello i have response with status code '${sc}' and msg '${msg}'`)
})


event.emit('get_response', 200, 'ok')


