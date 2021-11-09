const mongoose = require('mongoose');

const medecinShema = mongoose.Schema({
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

const medecinModel = mongoose.model('medecin' , medecinShema);

module.exports = medecinModel;

