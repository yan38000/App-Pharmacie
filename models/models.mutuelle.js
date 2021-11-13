const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({

    ref: {
        // Référence de la mutuelle unique
        // (arbitrairement attribué)
        type: Number,
        require : true,
        unique : true
    },
    nom: {
        type: String,
        require : true
    }
});

const patientModel = mongoose.model('patient' ,patientSchema);

module.exports = patientModel;