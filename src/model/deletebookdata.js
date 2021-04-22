//accessing mongoose package
const mongoose = require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/libraryapp');

//schema definition
const Schema = mongoose.Schema;
const deleteBookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//model creation
var deleteBookdata = mongoose.model('deletebookdata', deleteBookSchema);

module.exports = deleteBookdata;