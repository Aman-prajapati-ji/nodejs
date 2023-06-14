const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/practice').then(()=>{
    console.log('successfully connect to database')
}).catch(()=>{
    console.log('error while connecting to database')
})


const signUp = new mongoose.Schema({
    name: {
        type: String, 
    },
    email : {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const SaveDetails = new mongoose.model('SignUp', signUp)


const saveData = async () => {
    try{
        const user = new SaveDetails({
            name: 'aman',
            email: 'amanprajapati832@gmail.com',
            password: 'aman1234'
        })

        const userName = new SaveDetails({
            name: 'aman',
            email: '',
            password: 'aman1234'
        })

        const result = await SaveDetails.insertMany([user, userName]); 
        console.log('result', result)

    } catch (err) {
        console.log('err', err)
    }
}

// saveData()

const readDocuments = async () => {
    // const result = await SaveDetails.find().select({name:1}).limit(1)
    const result = await SaveDetails.find({ number : 50 }).select({number:1,})
    console.log('result', result)
}

readDocuments()