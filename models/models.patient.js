const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({

    numSecu: {
        // Numéro de sécurité sociale unique au patient
        type: Number,
        require : true,
        unique : true
    },
    nom: {
        type: String,
        require : true,
        trim : true
    },
    prenom: {
        type: String,
        require : true,
        trim : true
    },
    mutuelle: {
        // Se réfere a mutuelle.ref - Désigne mutuelle concernée
        type: Number,
        require: true
    },
    dateNaiss: {
        type: Date,
        require: true
    }
});

const patientModel = mongoose.model('patient' ,patientSchema);

module.exports = patientModel;