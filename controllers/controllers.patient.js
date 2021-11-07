const ObjectID = require('mongoose').Types.ObjectId;
const patientModel = require('../models/models.patient');


//affiche patient
module.exports.allPatient = async (req, res)=>{
    const patient = await patientModel.find().select();
    res.status(200).json(patient);
}

//ajout patient
module.exports.addPatient = async (req, res)=>{
    const {nom,prenom} = req.body
    try{
        const patient = await patientModel.create({nom , prenom});
        res.status(201).json({patient : patient._id});
    }
    catch(err){
        res.status(200).send({err});
    }
}

//affiche id patient
module.exports.infoPatient = async (req,res)=>{
    patientModel.findById(req.params.id , (err , docs)=>{
        if (!err) res.send(docs);
        else return res.status(404).send('ID unknown:'+ req.params.id);
    })
}

//modifie patient
module.exports.updatePatient = async (req , res)=>{
    const condition = { _id : req.params.id};

    patientModel.findByIdAndUpdate(condition , req.body, (err ,docs)=>{
        if (!err) res.send('mofifi yes'+docs);
        else return res.status(404).send(req.params.id);
    })
}

//supprime patient
module.exports.supPatient = async (req,res)=>{
    const condition = { _id : req.params.id};

    patientModel.findByIdAndRemove(condition , req.body, (err ,docs)=>{
        if (!err) res.json({docs : patient});
        else return res.status(404).send(req.params.id);
    })
}