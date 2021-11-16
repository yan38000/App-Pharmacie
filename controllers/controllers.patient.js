const ObjectID = require('mongoose').Types.ObjectId;
const patientModel = require('../models/models.patient');


// Afficher patient
module.exports.allPatient = async (req, res)=>{
    const patient = await patientModel.find().select();
    res.status(200).json(patient);
}

// Ajouter patient
module.exports.addPatient = async (req, res)=>{
    // Error handling - Parametres manquants
    if (!req?.body?.numSecu) {
        return res.status(400).json({
            'message': "Un numéro de sécurité sociale doit etre fourni"
        });
    }
    if (!req?.body?.dateNaiss) {
        return res.status(400).json({
            'message': "Une date de naissance doit etre précisée"
        });
    }
    if (!req?.body?.nom || !req?.body?.prenom) {
        return res.status(400).json({
            'message': "Un nom et prénom doivent etre précisés"
        });
    }
    /*
    if (!req?.body?.mutuelle) {
        return res.status(400).json({
            'message': "Une référence de mutuelle doit etre précisée"
        });
    }*/
    const {numSecu, nom, prenom, mutuelle, dateNaiss} = req.body;

    try{
        const result = await patientModel.create({numSecu, nom, prenom, mutuelle, dateNaiss});
        res.status(201).json({result});
    }
    catch(err){
        console.error(err);
    }
}

// Afficher id patient
module.exports.getPatient = async (req,res)=>{
    // Le numéro de sécurité sociale est nécessaire a la désignation unique de l'individu
    // REMARQUE: il s'agit encore ici d'un parametre "id="
    if (!req?.params?.id) return res.status(400).json({'message': 'Numéro de sécurité sociale requis'});

    const patient = await patientModel.findOne({ numSecu: req.params.id }).exec();
    if (!patient) {
        return res.status(204).json({
            'message': `Aucun patient ne correspond au numéro de sécurité sociale ${req.params.id}`
        });
    } else {
        return res.status(200).json(patient);
    }
}

// Modifier patient
module.exports.updatePatient = async (req , res)=>{
    if (!req?.params?.id) {
        return res.status(400).json({
            'message': "Numéro de sécurité sociale manquant, impossible de désigner un patient"
        });
    }

    const patient = await patientModel.findOne({ numSecu: req.params.id }).exec();
    if (!patient) {
        return res.status(204).json({
            'message': `Aucun patient ne correspond au numéro de sécurité sociale ${req.params.id}`
        });
    }

    if (req.body?.nom) patient.nom = req.body.nom;
    if (req.body?.prenom) patient.prenom = req.body.prenom;
    if (req.body?.mutuelle) patient.mutuelle = req.body.mutuelle;
    if (req.body?.dateNaiss) patient.dateNaiss = req.body.dateNaiss;

    const result = await patient.save();
    res.status(202).json(result);
}

// Supprimer patient
module.exports.supPatient = async (req,res)=>{
    if (!req?.params?.id) {
        return res.status(400).json({
            'message': "Numéro de sécurité sociale manquant, impossible de désigner un patient"
        });
    }

    const patient = await patientModel.findOne({ numSecu: req.params.id }).exec();
    if (!patient) {
        return res.status(204).json({
            'message': `Aucun patient ne correspond au numéro de sécurité sociale ${req.params.id}`
        });
    }

    const result = await patient.deleteOne({ numSecu: req.params.id })
    res.status(200).json(result);
}
