const mongoose = require('mongoose');

const ordonnanceSchema = mongoose.Schema({
    
    patient: {
        // Se réfere a patient.numSecu - Désigne patient concerné
        type: Number,
        require: true
    },
    medecin: {
        // Se réfere a medecin.ref - Numéro unique du medecin originaire de l'ordonnance
        type: Number,
        require: true
    },
    date: {
        // Date de création de l'ordonnance de la part du medecin
        type: Date,
        require: true,
        //default: Date.now
    },
    detail: [{
        // Liste des médicaments prescrits dans l'ordonnance et quantité accordée par mois
        refMed: {
            // Se réfere a medicament.ref - Désigne médicament concerné
            type: String,
            required: true
        },
        boitesParMois: {
            type: Number,
            required: true
        }
    }]
});

const ordonnanceModel = mongoose.model('ordonnance', ordonnanceSchema);

module.exports = ordonnanceModel;