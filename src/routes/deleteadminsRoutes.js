const express = require('express');
const deleteadminsRouter = express.Router();
const deleteAuthordata = require('../model/deleteauthordata');

function router(nav){
deleteadminsRouter.get('/',function(req,res){
    res.render('deleteAuthor',{
    nav,
    title: 'Library'
    })  
})
    deleteadminsRouter.post('/add',function(req,res){
        
var items = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image
    }

    var deleteauthor = deleteAuthordata(items);
    deleteauthor.save(); //saving to db
    res.redirect('/authors');
   
});

    return deleteadminsRouter;
}
    
module.exports = router;