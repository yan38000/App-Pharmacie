//dependancies
const express = require('express');
const cors = require('cors');

//require path
const app = express();
const patientRouter = require('./routes/route.patient');
require('dotenv').config({path : './config/.env'});
require('./config/db')


//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

//router
app.use('/api/patient', patientRouter);

//404
app.use((req,res)=>{
    res.status(404).send('error no route');
})
//server
app.listen(process.env.PORT, ()=>{
    console.log(`Listing to server ${process.env.PORT}`);
});
