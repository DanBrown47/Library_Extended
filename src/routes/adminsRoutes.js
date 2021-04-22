const express = require('express');
const adminsRouter = express.Router();
const Authordata = require('../model/authordata');

function router(nav){
adminsRouter.get('/',function(req,res){
    res.render('addAuthor',{
    nav,
    title: 'Library'
    })  
})
    adminsRouter.post('/add',function(req,res){
        
var items = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image
    }

    var author = Authordata(items);
    author.save(); //saving to db
    res.redirect('/authors');
   
});

    return adminsRouter;
}
    
module.exports = router;