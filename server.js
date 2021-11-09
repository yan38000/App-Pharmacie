// Dépendances
const express = require('express');
const cors = require('cors');

const color = require('./config/strcolors');

// require path
const app = express();
const patientRouter = require('./routes/route.patient');
require('dotenv').config({path : './config/.env'});

require('./config/db');

// Initialisations middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

// Gestion routeur "patient"
app.use('/api/patient', patientRouter);

// 400 Erreur : pas de route
app.use((req,res)=>{
    res.status(400).send('error no route');
})

// Serveur écoute
app.listen(process.env.PORT, ()=>{
    console.log(color.STATSUS_OK + `Server listening at port ${process.env.PORT}`);
});
