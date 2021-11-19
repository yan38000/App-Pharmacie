// Dépendances
const express = require('express');
const cors = require('cors');



// require path
const app = express();
const color = require('./config/strcolors');
const patientRouter = require('./routes/route.patient');
const medecinRouter = require('./routes/route.medecin');
require('dotenv').config({path : './config/.env'});

require('./config/db');

// Initialisations middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

// Gestion routeur "patient"
app.use('/api/patient', patientRouter);
app.use('/api/medecin/', medecinRouter);

// 400 Erreur : pas de route
app.use((req, res) => {
    res.status(400).send('error no route');
})

// Serveur écoute
app.listen(process.env.PORT, () => {
    console.log(color.STATUS_OK + `Server listening at port ${process.env.PORT}`);
});
