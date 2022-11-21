const mongoose = require('mongoose')

const URI = "mongodb://127.0.0.1:27017/netgat"

mongoose.connect(URI)
    .then(()=>console.log(`Connect to mongoose Success..`))
    .catch( e => console.log(e))

module.exports = mongoose