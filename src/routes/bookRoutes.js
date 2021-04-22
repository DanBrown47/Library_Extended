const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookdata');


function router(nav){
    // var books = [
    //     {
    //         title:'Gullivers Travels',
    //         author:'Jonathan Swift',
    //         genre:'Travelogue',
    //         img:'gulliver.jpg'
    //     },
        
    //     {
    //         title:'Harry Potter',
    //         author:'J K Rowling',
    //         genre:'Fantasy',
    //         img:'harry.jpg'
    //     },
    
    //     {
    //         title:'Paathummayude Aadu',
    //         author:'Basheer',
    //         genre:'Drama',
    //         img:'basheer.jpg'
    //     },
    //     {
    //         title:'How I Taught my Grandmother to read',
    //         author:'Sudha Murty',
    //         genre:'Story',
    //         img:'grandmother.jpg'
    //     },
    //     {
    //         title:'Road Not Taken',
    //         author:'Robert Frost',
    //         genre:'Poem',
    //         img:'roadnottaken.jpg'
    //     }
    // ]
    
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('books',{
                nav,
                title:'Library',
                books 
            });
        })
        
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send('Hey I am a Single Book');
    // });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
       Bookdata.findOne({_id:id})
           .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
            });
           })   
    });

    booksRouter.get('/delete/:id', function(req,res){
            const id = req.params.id
            Bookdata.deleteOne({_id:id})
            .then(function(){
           res.redirect('/books');
        });
    })

    return booksRouter;
}

module.exports = router;