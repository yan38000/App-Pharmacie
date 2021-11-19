/*
Fonctionnalités générales
*/
const medecinModel = require('../models/Medecin');
const ordonnanceModel = require('../models/Ordonnance');
const patientModel = require('../models/Patient');


// Obtenir des informations basique sur patients, medecins et ordonnances
module.exports.getGeneral = async (req, res) => {

    // Obtention depuis la base de donnée
    const patients = await patientModel.find().select("-dateNaiss");
    const medecins = await medecinModel.find().select();
    const ordonnances = await ordonnanceModel.find().select();

    result = {
        patients: patients,
        medecins: medecins,
        ordonnances: ordonnances
    };

    res.status(200).json({result});
}
