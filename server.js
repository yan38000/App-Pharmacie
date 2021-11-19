// Dépendances
const express = require('express');
const app = express();
const cors = require('cors');

const color = require('./config/strcolors');
require('./config/db');

// require path
require('dotenv').config({path : './config/.env'});

// Initialisations middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

// Gestion des routeurs

const patientRouter = require('./routes/route.patient');
const medecinRouter = require('./routes/route.medecin');
const ordonnanceRouter = require('./routes/route.ordonnance');
const medicamentRouter = require('./routes/route.medicament');

app.use('/api/patient/', patientRouter);
app.use('/api/medecin/', medecinRouter);
app.use('/api/ordonnance/', ordonnanceRouter);
app.use('/api/medicament/', medicamentRouter);

// 400 Erreur : pas de route
app.use((req, res) => {
    res.status(400).send('error no route');
})

// Serveur écoute
app.listen(process.env.PORT, () => {
    console.log(color.STATUS_OK + `Server listening at port ${process.env.PORT}`);
});
