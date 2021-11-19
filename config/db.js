/*
Script de connexion a mongoose
*/

const mongoose = require('mongoose');
const color  = require('./strcolors')
/**
 * 
 */
mongoose.connect("mongodb+srv://"+process.env.DB_IDT_PASS+"@cluster0.sqive.mongodb.net/app-pharamacie",
    { useNewUrlParser : true })
    .then( () => console.log(color.STATUS_OK + 'connected to mongoDB'))
    .catch( (err) => console.log(color.STATUS_ERR + 'Failed to connect', err));