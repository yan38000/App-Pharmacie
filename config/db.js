const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://"+process.env.DB_IDT_PASS+"@cluster0.sqive.mongodb.net/app-pharamacie",
{
    useNewUrlParser : true
}
)
.then(()=> console.log('connected to mongoDB'))
.catch((err)=> console.log('Failed to connected', err));