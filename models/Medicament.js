const mongoose = require('mongoose');

const medicamentSchema = mongoose.Schema({

    ref: {
        // Référence du médicament unique
        // (dans le contexte fictif actuel, arbitrairement attribué)
        type: String,
        require : true,
        unique : true
    },
    nom: {
        type: String,
        require : true
    },
    qte: {
        // Quantité en stock
        type: Number,
        require : true,
        default: 0
    }
});

const medicamentModel = mongoose.model('medicament', medicamentSchema);

module.exports = medicamentModel;
