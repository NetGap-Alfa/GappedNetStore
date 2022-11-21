const mongoose = require('mongoose')

//const URI = "mongodb://127.0.0.1:27017/netgat"
const URI = "mongodb+srv://UserDB_MinTIC:faeThjefWFV41IA2@cluster0.ylr66ui.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URI)
    .then(()=>console.log(`Connect to mongoose Success..`))
    .catch( e => console.log(e))

module.exports = mongoose