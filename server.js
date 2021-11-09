// Dependancies
const express = require('express');
const cors = require('cors');

const color = require('./config/strcolors');

// require path
const app = express();
const patientRouter = require('./routes/route.patient');
require('dotenv').config({path : './config/.env'});

require('./config/db');

// Middlewares inits
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

// Router handling
app.use('/api/patient', patientRouter);

// 400 No route handling
app.use((req,res)=>{
    res.status(400).send('error no route');
})
// Server listen
app.listen(process.env.PORT, ()=>{
    console.log(color.STATSUS_OK + `Server listening at port ${process.env.PORT}`);
});
