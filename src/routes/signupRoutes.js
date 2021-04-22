const express = require('express');
const signupRouter = express.Router();
function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',
        {
            nav,
            title:'Library',
        });
    });
    return signupRouter;
}
module.exports = router;