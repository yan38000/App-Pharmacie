const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
  nom :{
      type: String,
      require : true,
      unique : true,
      trim : true
  },
  prenom :{
    type: String,
    require : true,
    unique : true,
    trim : true
}

});

const patientModel = mongoose.model('patient' ,patientSchema);

module.exports = patientModel;