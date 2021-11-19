/*
Fonctions de la route ordonnance
*/
const ObjectID = require('mongoose').Types.ObjectId;
const ordonnanceModel = require('../models/Ordonnance');


// Afficher toutes les ordonnances
module.exports.allOrdonnance = async (req,res) => {
    const ordonnance = await ordonnanceModel.find().select();
    res.status(200).json(ordonnance);
}

// Ajouter ordonnance
module.exports.addOrdonnance = async (req,res) => {
    // Error handling - Parametres manquants
    if (!req?.body?.patient) { // Numéro de sécurité sociale du patient
        return res.status(400).json({
            'message': "Un numéro de sécurité sociale de patient doit etre fourni"
        });
    }
    if (!req?.body?.medecin) { // Référence du medecin
        return res.status(400).json({
            'message': "Une référence de medecin doit etre fournie"
        });
    }
    if (!req?.body?.date) { // Date de réalisation de l'ordonnance
        return res.status(400).json({
            'message': "La date de réalisation de l'ordonnance doit etre précisée"
        });
    }
    const {patient, medecin, date} = req.body;

    try{
        const result = await ordonnanceModel.create({patient, medecin, date, detail: [] });
        res.status(201).json({
            'message': "Ajout de l'ordonnance réussie",
            result
        });
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

// Afficher informations ordonnance
module.exports.getOrdonnance = async (req,res) => {
    // L'Object ID est nécessaire pour désigner une unique ordonnance
    if (!req?.params?.id) return res.status(400).json({'message': 'ObjectID requis'});


    const ordonnance = await ordonnanceModel.findById(req.params.id);
    if (!ordonnance) {
        return res.status(400).json({
            'message': `Aucune ordonnance n'est attribuée a l'objectID ${req.params.id}`
        });
    }
    return res.status(200).json({
        ordonnance
    });
}

// Modifier ordonnance
module.exports.updateOrdonnance = async (req,res) => {
    if (!req?.params?.id) return res.status(400).json({'message': 'ObjectID requis'});

    const ordonnance = await ordonnanceModel.findById(req.params.id);
    if (!ordonnance) {
        return res.status(400).json({
            'message': `Aucune ordonnance n'est attribuée a l'objectID ${req.params.id}`
        });
    }

    if (req.body?.patient) ordonnance.patient = req.body.patient;
    if (req.body?.medecin) ordonnance.medecin = req.body.medecin;
    if (req.body?.date) ordonnance.date = req.body.date;

    const result = await ordonnance.save();
    res.status(202).json({
        'message': "Modification réussie",
        result
    });
}

// Supprimer patient
module.exports.supOrdonnance = async (req,res) => {
    if (!req?.params?.id) return res.status(400).json({'message': "ObjectID Requis"});

    const ordonnance = await ordonnanceModel.findById(req.params.id);
    if (!ordonnance) {
        return res.status(400).json({
            'message': `Aucune ordonnance n'est attribuée a l'objectID ${req.params.id}`
        });
    }
    const result = await ordonnance.deleteOne({ _id : req.params.id })
    res.status(200).json({
        'message': "Suppression réussie",
        result
    });
}

module.exports.supDetailOrdonnance = async (req,res) => {
    if (!req?.body?.id) return res.status(400).json({
        'message': "ObjectID Requis"
    });
    if (!req?.body?.refMed) return res.status(400).json({
        'message': "la référence d'un médicament est requis"
    });

    const ordonnance = await ordonnanceModel.findById(req.body.id);
    if (!ordonnance) {
        return res.status(400).json({
            'message': `Aucune ordonnance n'est attribuée a l'objectID ${req.body.id}`
        });
    }

    ordonnance.updateOne({detail: [{$pullAll: {refMed: [req.params.refMed] } } ]});
    const result = await ordonnance.save();

    res.status(200).json({
        'message': "Supression réussie",
        result
    });
}

module.exports.addDetailOrdonnance = async (req,res) => {
    if (!req?.body?.id) return res.status(400).json({
        'message': "ObjectID Requis"
    });
    if (!req?.body?.refMed) return res.status(400).json({
        'message': "la référence d'un médicament est requis"
    });
    if (!req?.body?.amount) return res.status(400).json({
        'message': "Une quantité est requise"
    });

    const ordonnance = await ordonnanceModel.findById(req.body.id);
    if (!ordonnance) {
        return res.status(400).json({
            'message': `Aucune ordonnance n'est attribuée a l'objectID ${req.body.id}`
        });
    }

    // Forme le detail de l'ordonnance puis l'insere dans son array de detail
    const detail = {refMed: req.body.refMed, boitesParMois: req.body.amount};
    ordonnance.detail.push(detail);

    const result = await ordonnance.save();
    res.status(200).json({
        'message': "Ajout réussi",
        result
    });
}
