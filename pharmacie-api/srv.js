'use-strict'
const express = require("express");
const app = express();

const dbutils = require('./model/db');

const COLORS = require("./lib/strcolors");
const PORT = 8080;


let db = dbutils.dbInit((err) => {
    if (!err) {
        console.log(COLORS.STATUS_OK + 'Connecté a la base de donnée locale');
    } else {

    }
})

app // DEBOUT ROUTAGE API

.get('/', (req, res) => {
    res.status(404).send('ERREUR - Aucune opération/requete spécifiée');
})

.get('/patients', (req, res) => {
    db.serialize(() => {
        db.each(`SELECT Cli_nom as nom FROM client`,
                (err, row) => {
            if (err) {
                console.error(COLORS.STATUS_ERR + err.message);
            }
            console.log(row.nom);
        });
    });
})
.listen(PORT, () => { console.log(COLORS.STATUS_OK + `Serveur écoute sur le port ${PORT}`) })

