var express = require('express');
var router = express.Router();

// Get homepage
router.get('/', ensureAuthenticated,function(req,res){
    res.render('index');
});

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated() && req.user.id){
        console.log("req.user "+req.user.id);
        return next();
    }else{
        res.redirect('/users/login');
    }
}

module.exports = router;