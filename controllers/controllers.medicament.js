/*
Fonctions de la route medicament
*/
const medicamentModel = require('../models/models.medicament');

// Afficher tous les médicaments et leur stock
module.exports.allmedicament = async (req, res) => {
    const medicament = await medicamentModel.find().select();
    res.status(200).json(medicament);
}

// Ajouter medicament
/*
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
    if (!req?.body?.nom || !req?.body?.nom) {
        return res.status(400).json({
            'message': "Un nom et prénom doivent etre précisés"
        });
    }
    if (!req?.body?.mutuelle) {
        return res.status(400).json({
            'message': "Une référence de mutuelle doit etre précisée"
        });
    }
    const {numSecu, nom, prenom, mutuelle, dateNaiss} = req.body;

    try{
        const result = await patientModel.create({numSecu, nom, prenom, mutuelle, dateNaiss});
        res.status(201).json({result});
    }
    catch(err){
        console.error(err);
    }
}
*/

// Afficher Données d'un médicament
module.exports.getMedicament = async (req, res) => {
    // id = référence du médicament
    if (!req?.params?.id) return res.status(400).json({'message': 'Référence requise'});

    const medicament = await medicamentModel.findOne({ ref: req.params.id }).exec();
    if (!medicament) {
        return res.status(204).json({
            'message': `Auncun médicament ne correspond a la référence ${req.params.id}`
        });
    }
    res.status(200).json(medicament);
}

// Modifier données d'un médicament
module.exports.updateMedicament = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({
            'message': "Référence manquante, impossible de désigner un médicament"
        });
    }

    const medicament = await medicamentModel.findOne({ ref: req.params.id }).exec();
    if (!medicament) {
        return res.status(204).json({
            'message': `Aucun médicament ne correspond a la référence ${req.params.id}`
        });
    }

    if (req.body?.nom) medicament.nom = req.body.nom;
    if (req.body?.qte) medicament.qte = req.body.qte;

    const result = await medicament.save();
    res.status(202).json(result);
}

// Supprimer médicament
module.exports.supMedicament = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({
            'message': "Référence manquante, impossible de désigner un médicament"
        });
    }

    const medicament = await medicamentModel.findOne({ ref: req.params.id }).exec();
    if (!medicament) {
        return res.status(204).json({
            'message': `Aucun médicament ne correspond a la référence ${req.params.id}`
        });
    }

    const result = await medicament.deleteOne({ ref: req.params.id });
    res.status(200).json(result);
}

module.exports.modifQteMedicament = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({
            'message': "Référence manquante, impossible de désigner un médicament"
        });
    }
    const medicament = await medicamentModel.findOne({ ref: req.params.id }).exec();
    if (!medicament) {
        return res.status(204).json({
            'message': `Aucun médicament ne correspond a la référence ${req.params.id}`
        });
    }
    if (!req.body?.qte) {
        return res.status(400).json({
            'message': "Nouvelle valeure de quantitée non spécifiée, veuillez vérifier votre requete"
        });
    }
    const previousQty = medicament.qte; 
    medicament.qte = req.body.qte;

    res.status(200).json({
        'message':
        `Quantitée mise a jour, ancienne valeure: ${previousQty}, nouvelle valeure: ${req.body.qte}`
    });
}

