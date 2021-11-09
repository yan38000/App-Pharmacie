const ObjectID = require('mongoose').Types.ObjectId;
const medecinModel = require('../models/models.medecin');


module.exports.addMedecin = async (req, res)=>{
    const {nom,prenom} = req.body
    try{
        const medecin = await medecinModel.create({nom , prenom});
        res.status(201).json({medecin : "add successful"});
    }
    catch(err){
        res.status(200).send({err});
    }
}

module.exports.AllMedecin = async(req ,res) =>{
    const medecin = await medecinModel.find().select();
    res.status(200).json(medecin);
}

module.exports.infoMedecin = async (req,res)=>{
    medecinModel.findById(req.params.id , (err , docs)=>{
        if (!err) res.send(docs);
        else return res.status(400).send('ID unknown:'+ req.params.id);
    })
}