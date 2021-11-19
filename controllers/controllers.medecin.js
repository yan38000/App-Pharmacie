/*
Fonctions de la route medecin
*/
const medecinModel = require('../models/models.medecin');


module.exports.addMedecin = async (req, res) => {
    if (!req?.body?.ref) {
        return res.status(400).json({
            'message': "Une référence doit etre fournie"
        });
    }
    if (!req?.body?.nom) {
        return res.status(400).json({
            'message': "Un nom doit etre fourni"
        });
    }
    if (!req?.body?.prenom) {
        return res.status(400).json({
            'message': "Une référence doit etre fournie"
        });
    }

    const {ref,nom,prenom} = req.body;
    try {
        const medecin = await medecinModel.create({ref, nom, prenom});
        res.status(201).json({
            'message': "Ajout réussi",
            'result': medecin
        });
    }
    catch (err) {
        res.status(500).send({err});
    }
}

module.exports.AllMedecin = async(req ,res) => {
    const medecin = await medecinModel.find().select();
    res.status(200).json(medecin);
}

module.exports.getMedecin = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({
            'message': "Une référence doit etre fournie, impossible de désigner un medecin"
        });
    }

    const medecin = await medecinModel.findOne({ ref: req.params.id }).exec();
    if (!medecin) {
        return res.status(204).json({
            'message': `Aucun medecin ne correspond a la référence ${req.params.id}`
        });
    } else {
        return res.status(200).json(medecin);
    }
}
