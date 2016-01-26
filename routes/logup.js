var _ = require("lodash");
var urlencode = require('urlencode');
var request = require('request');
var moment = require('moment');
var express = require('express');
var app = express();
var router = express.Router();

module.exports = function(){


    router.get('/logup',function(req,res){
        res.render('logup',{cc:"登录"})
    });

    router.post('/logup',function(req,res){
        User.findOne({name:req.body.name,pass:req.body.pass},function(err,data){
            if(err)console.log(err);
            if(data){
                req.session.user = data;
                res.redirect('/logup');
            }else{
                res.send(404);
            }
        })
    })

    return router;
};