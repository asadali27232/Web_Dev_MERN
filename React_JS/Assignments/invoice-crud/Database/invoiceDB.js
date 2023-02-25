const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/invoiceDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('INFO! MongoDB Connection to invoiceDB is Succeeded')
    } else {
        console.log('ERR! MongoDB connection failed: ' + err)
    }
});