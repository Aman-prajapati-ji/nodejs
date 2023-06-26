const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/practice').then(()=>{
    console.log('successfully connect to database')
}).catch(()=>{
    console.log('error while connecting to database')
})


const signUp = new mongoose.Schema({
    name: {
        type: String, 
        lowercase:true,
        required: true,
    },
    email : {
        type : String,
        unique: true,
        required: true,
        lowercase:true,
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
    },
    number: {
        type : Number
    }
})

const SaveDetails = new mongoose.model('SignUp', signUp)


const saveData = async () => {
    try{
        const user = new SaveDetails({
            name: 'aman',
            email: 'aman4@gmail.com',
            password: 'aman1234',
            number: 10,
        })

        const userName = new SaveDetails({
            name: 'aman',
            email: 'aman5@gmail.com',
            password: 'aman1234',
            number: 10,
        })

        const result = await SaveDetails.insertMany([user, userName]); 
        console.log('result', result)

    } catch (err) {
        console.log('err', err)
    }
}

saveData()


const updateData = async (_id) => {
    const updatedData = await SaveDetails.updateOne({_id: _id},
        {
            $set : {
                name: 'akshat markanday'
            }
        }
    )
    console.log(updatedData)
} 

// updateData('64898aeb8c53c41b498000f8')

const deleteCollection = async (_id) => {
    const value = await SaveDetails.deleteOne({_id})
    console.log('delete', value)
}
// deleteCollection('64898aeb8c53c41b498000f8')

const readDocuments = async () => {
    // const result = await SaveDetails.find().select({name:1}).limit(1)
    // const result = await SaveDetails.find({ number : {$gt : 30} }).select({number:1,}) $gt, gte, lt, lte, neq, eq
    // const result = await SaveDetails.find({password: 'aman1234'}).countDocuments()
    // const result = await SaveDetails.find({password: 'aman1234'}).sort({name:-1,}).select({name:1,})
    const result = await SaveDetails.find({password: 'aman1234'}).sort({name:-1,}).select({name:1,})
    console.log('result', result)
}
    
readDocuments()