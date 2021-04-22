const express = require('express');
const deleteadminRouter = express.Router();
const deleteBookdata = require('../model/deletebookdata');

function router(nav){
deleteadminRouter.get('/',function(req,res){
    res.render('deleteBook',{
    nav,
    title: 'Library'
    })  
})
    deleteadminRouter.post('/add',function(req,res){
        
var item = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image
    }

    var deletebook = deleteBookdata(item);
    deletebook.save(); //saving to db
    res.redirect('/books');
   
});

    return deleteadminRouter;
}
    
module.exports = router;