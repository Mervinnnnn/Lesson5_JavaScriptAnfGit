



const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost:27017/MongoDB-Mervin'
)

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('Database Connected!')
})

db.on('error', ()=>{
    console.log('MongoDB Connection Error ' + err)
})

module.exports = mongoose