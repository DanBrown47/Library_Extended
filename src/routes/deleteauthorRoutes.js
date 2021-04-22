const express = require('express');
const deleteauthorsRouter = express.Router();
const deleteAuthordata = require('../model/deleteauthordata');

function router(nav){
    // var authors = [
    //     {
    //         title:'Jonathan Swift',
    //         author:'He is the author of a Travelogue Fantasy Book - Gullivers Travels',
    //         genre:'Travelogue',
    //         image:'jonathan_swift.jpg'
    //     },
    
    //     {
    //         title:'J K Rowling',
    //         author:'She is the writer of a fantasy novel cum movie named HarryPotter',
    //         genre:'Fantasy',
    //         image:'rowling.jpg'
    //     },
    
    //     {
    //         title:'Vaikkom Muhammed Basheer',
    //         author:'He is the author of a wonderful drama named Paathummayude Aadu',
    //         genre:'Drama',
    //         image:'vaikkombasheer.jpg'
    //     },
    //     {
    //         title:'Sudha Murty',
    //         author:'She is famous for her story,How I Taught my Grandmother to Read',
    //         genre:'Story',
    //         image:'sudhamurty.jpg'
    //     },
    //     {
    //         title:'Robert Frost',
    //         author:'He is famous for his poem Road Not Taken',
    //         genre:'Poem',
    //         image:'robert.jpg'
    //     }
    // ]
    
    
    deleteauthorsRouter.get('/',function(req,res){
        deleteAuthordata.find()
        .then(function(authors){
            res.render('authors',{
                nav,
                title:'Library',
                authors 
            });
        })
        
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send('Hey I am a Single Book');
    // });
    deleteauthorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        deleteAuthordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
            });
        })
        
    });

    return deleteauthorsRouter;
}

module.exports = router;