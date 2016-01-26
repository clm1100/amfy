var _ = require("lodash");
var urlencode = require('urlencode');
var request = require('request');
var moment = require('moment');
var express = require('express');
var router = express.Router();
var app = express();

module.exports = function(){
        var session;
    router.use(function(req,res,next){
        var user = req.session.user;
        if(user){
            session = user;
        }else{
            session = null;
        }
        next();
    });

    router.get('/login/new',function(req,res){
        res.render('login',{user:session});
    });
    router.get('/login/userlist',function(req,res){
        User.find({},function(err,item){
            res.render('userlist',{item:item,cc:"wwww"});
        })


    });
    router.get('/login/:id',function(req,res){
        User.findById(req.params.id,function(err,item){
            req.session.user = item;
            res.render('login',{item:item,user:app.locals.user});
        })
    });
    router.post('/login',function(req,res){
        var id = req.params.id;
        User.findById(id,function(err,item){
            if(!item) item = new User();
            item.name = req.body.name;
            item.pass = req.body.pass;
            item.save(function(err,data){
                res.render('login',{item:item,user:session});
            })
        })
    });
    return router;
};