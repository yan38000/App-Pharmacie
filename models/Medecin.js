const mongoose = require('mongoose');

const medecinShema = mongoose.Schema({

    ref: {
        // Numéro unique désignant le medecin
        type: Number,
        unique: true,
        require: true  
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
    }
});

const medecinModel = mongoose.model('medecin', medecinShema);

module.exports = medecinModel;
