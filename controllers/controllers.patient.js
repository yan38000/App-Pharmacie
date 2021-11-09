const ObjectID = require('mongoose').Types.ObjectId;
const patientModel = require('../models/models.patient');


// Afficher patient
module.exports.allPatient = async (req, res)=>{
    const patient = await patientModel.find().select();
    res.status(200).json(patient);
}

// Ajouter patient
module.exports.addPatient = async (req, res)=>{
    const {nom,prenom} = req.body
    try{
        const patient = await patientModel.create({nom , prenom});
        res.status(201).json({patient : "add successful"});
    }
    catch(err){
        res.status(200).send({err});
    }
}

// Afficher id patient
module.exports.infoPatient = async (req,res)=>{
    patientModel.findById(req.params.id , (err , docs)=>{
        if (!err) res.send(docs);
        else return res.status(400).send('ID unknown:'+ req.params.id);
    })
}

// Modifier patient
module.exports.updatePatient = async (req , res)=>{
    const condition = { _id : req.params.id};

    patientModel.findByIdAndUpdate(condition , req.body, (err ,docs)=>{
        if (!err) res.json({patient : "update successful",update: docs});
        else return res.status(400).send(req.params.id);
    })
}

// Supprimer patient
module.exports.supPatient = async (req,res)=>{
    const condition = { _id : req.params.id};

    patientModel.findByIdAndRemove(condition , req.body, (err ,docs)=>{
        if (!err) res.json({patient : "delete successful", delete : condition});
        else return res.status(400).send(req.params.id);
    })
}