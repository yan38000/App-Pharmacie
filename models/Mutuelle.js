const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({

    ref: {
        // Référence de la mutuelle unique
        // (arbitrairement attribué)
        type: String,
        require : true,
        unique : true
    },
    nom: {
        type: String,
        require : true
    }
});

const mutuelleModel = mongoose.model('mutuelle', patientSchema);

module.exports = mutuelleModel;
