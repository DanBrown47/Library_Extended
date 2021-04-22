//accessing mongoose package
const mongoose = require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String 
});

//model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;











